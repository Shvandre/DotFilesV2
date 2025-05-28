const BACKEND_TIMER_SYNC_PERIOD = 10 * 60 * 1000 // 10 minutes
const LOCAL_TIMER_UPDATE_PERIOD = 1000 // 1 second
const DEFAULT_DAILY_LIMIT_SECONDS = 1 * 60 * 60 // 1 hour
const MAX_TIME_DEVIATION_SECONDS = 30 // 30 seconds, otherwise override with backend data

function updateUsageOnBackend(email, password, currentDaySpentSeconds, lastResetDateStr) {

    console.log('Starting updateUsageOnBackend with:', { email, currentDaySpentSeconds, lastResetDateStr });

    fetch('https://extension-api.naoinfrastructure.com/update_time_spent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
            current_day_spent_seconds: currentDaySpentSeconds,
            last_reset_date: lastResetDateStr
        })
    })
    .then(response => {
        console.log('Received response from backend:', response);
        return response.json();
    })
    .then(data => {
        console.log('Parsed backend response:', data);
        if (data.status === 'success') {
            console.log('Update successful, updating local state...');
            updateLocalSubscriptionState(data);
        } else {
            console.error('Error updating usage:', data.message);
        }
    })
    .catch(error => {
        console.error('Error in updateUsageOnBackend:', error);
    });
}

function updateLocalSubscriptionState(data) {
    const { current_day_spent_seconds, is_paid, allow_access, daily_limit_seconds, last_reset_date } = data;

    chrome.storage.local.get(['totalUsageTimeThisDay'], (result) => {
        let totalUsageTimeThisDay = result.totalUsageTimeThisDay || 0;
        console.log('Current local totalUsageTimeThisDay:', totalUsageTimeThisDay);

        const isTimeDeviationAcceptable = (
            current_day_spent_seconds <= totalUsageTimeThisDay &&
            totalUsageTimeThisDay < (current_day_spent_seconds + MAX_TIME_DEVIATION_SECONDS)
        );

        const newData = {
            isPaid: is_paid,
            allowAccess: allow_access,
            dailyLimitSeconds: daily_limit_seconds,
            lastResetDateStr: last_reset_date
        };

        if (isTimeDeviationAcceptable) {
            console.log('Local time deviation is acceptable. Preferring local data.');
            chrome.storage.local.set(newData, () => {
                console.log('Local state updated, excluding totalUsageTimeThisDay.');
            });
        } else {
            console.log('Local data and backend data differ significantly. Using backend data:', current_day_spent_seconds, " instead of local: ", totalUsageTimeThisDay);
            newData.totalUsageTimeThisDay = current_day_spent_seconds;
            chrome.storage.local.set(newData, () => {
                console.log('Local state updated with backend data.');
            });
        }
    });
}


function checkAndUpdateUsage() {
    chrome.storage.local.get(['totalUsageTimeThisDay', 'currentState', 'dailyLimitSeconds', 'isPaid'], (data) => {

        if (data.currentState === 'connected') {

            totalUsageTimeThisDay = data.totalUsageTimeThisDay || 0;
            dailyLimitSeconds = data.dailyLimitSeconds || DEFAULT_DAILY_LIMIT_SECONDS;
            isPaid = data.isPaid || false;

            let newTime = totalUsageTimeThisDay + 1; // Increment the time by 1 second
            chrome.storage.local.set({ totalUsageTimeThisDay: newTime }, () => {
                console.log('Updated totalUsageTimeThisDay:', newTime); // Confirm time update
            });

            if (!isPaid && (totalUsageTimeThisDay >= dailyLimitSeconds)) {
                console.log('Limit reached. Disconnecting')
                chrome.storage.local.set({ targetState: 'disconnected' });
            }

        } else {
            console.log('Current state is not connected, no time update.'); // Log when not connected
        }
    });
}

function syncUsageWithBackend() {
    chrome.storage.local.get(['totalUsageTimeThisDay', 'email', 'password', 'lastResetDateStr'], (data) => {
        totalUsageTimeThisDay = data.totalUsageTimeThisDay || 0;
        lastResetDateStr = data.lastResetDateStr || ""
        if (data.email && data.password) {
            updateUsageOnBackend(data.email, data.password, totalUsageTimeThisDay, lastResetDateStr);
        }
    });
}

function handleDonationFormSubmit(event) {
    event.preventDefault();

    if (this.checkValidity()) {
        var donationAmount = document.getElementById('donationAmountInput').value;
        var donationDate = document.getElementById('donationDateInput').value;

        chrome.storage.local.get(['email', 'password'], (data) => {
            if (data.email && data.password) {
                updateOverlay('loadingOverlay')
                fetch('https://extension-api.naoinfrastructure.com/apply_donation', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password,
                        amount: donationAmount,
                        date: donationDate
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        alert('Большое спасибо! Увеличили для вас ежемесячный лимит 💙');
                        syncUsageWithBackend();
                        updateOverlay(null);
                    } else {
                        console.warn('Donation not accepted:', data.message);
                        alert("Извините, пожертвование не найдено. Пожалуйста, проверьте данные и попробуйте снова. Если не помогает, напишите нам.");
                        updateOverlay(null);
                    }
                })
                .catch(error => {
                    console.error('Error while applying donation:', error);
                    alert("Неизвестная ошибка. Попробуйте снова чуть позже или напишите нам.");
                });
            } else {
                console.warn('Bad login or password, Cannot apply donation.', data);
            }
        });
    } else {
        this.reportValidity(); // This will trigger the browser's default validation messages
    }
}

function initializeSubscriptionOverlays() {
    document.getElementById('donationForm').addEventListener('submit', handleDonationFormSubmit);
}

function initializeSubscriptionTimers() {
    setInterval(checkAndUpdateUsage, LOCAL_TIMER_UPDATE_PERIOD); // Update local usage every second
    // sync withBackend and schedule next sync
    syncUsageWithBackend();
    setInterval(syncUsageWithBackend, BACKEND_TIMER_SYNC_PERIOD); // Sync with backend every 10 minutes
}
