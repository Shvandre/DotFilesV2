// UI handlers
function updateUI(state) {
    // Update the button's appearance and text
    updateButtonState(state);
}

// Function to update the button's class based on proxy state
function updateButtonState(currentState) {
    const button = document.getElementById("mainButton");

    // Remove existing states
    button.classList.remove("disconnected", "connected", "connecting", "error");
    // Add the current state
    button.classList.add(currentState);

    // Change the button text accordingly (if needed)
    let buttonText = "";
    switch (currentState) {
        case "connected":
            buttonText = "Подключено";
            break;
        case "disconnected":
            buttonText = "Подключить";
            break;
        case "connecting":
            buttonText = "Подключение";
            break;
        case "error":
            buttonText = "Ошибка";
            break;
        default:
            buttonText = "Подключить";
    }
    document.getElementById("mainButtonText").textContent = buttonText;
}


// INITIALISATION OF POPUP STATE & BINDINGS / LISTENERS SETUP
function initializePopupState() {

    // Main button
    document.getElementById("mainButton").addEventListener("click", function() {

        const button = document.getElementById("mainButton");

        chrome.storage.local.get(['totalUsageTimeThisDay', 'dailyLimitSeconds', 'isPaid'], (data) => {

            // init undefined vars & protection
            totalUsageTimeThisDay = data.totalUsageTimeThisDay || 0;
            dailyLimitSeconds = data.dailyLimitSeconds || DEFAULT_DAILY_LIMIT_SECONDS;
            isPaid = data.isPaid || false;

            // check if need to block access
            if (!isPaid && (totalUsageTimeThisDay >= dailyLimitSeconds)) {
                syncUsageWithBackend();
                console.log('Limit reached. Disconnecting')
                chrome.storage.local.set({ targetState: 'disconnected' });
                updateOverlay('paymentOverlay')
            }
            else // if access allowed, control proxy
            {
                // Check the current proxy state before deciding the action
                chrome.storage.local.get("targetState", ({ targetState }) => {
                    let previousTargetState = targetState || 'disconnected';
                    if (previousTargetState === "disconnected") {
                        chrome.storage.local.set({ targetState: 'connected' });
                    } else {
                        chrome.storage.local.set({ targetState: 'disconnected' });
                        // Request feedback only when disconnecting
                        checkAndShowFeedbackOverlay();
                    }
                });
            }
        });
    });

    document.getElementById("logoutButton").addEventListener("click", function() {
        // Check the current proxy state before deciding the action
        chrome.storage.local.set({ "targetState": "disconnected" }, function() {
            // Clear storage variables: username, password, passwordValidated, activeOverlayId
            chrome.storage.local.remove(["username", "password", "passwordValidated", "authListenerSetTime", 'totalUsageTimeThisDay', 'dailyLimitSeconds'], function() {
                // Optionally, you can perform additional actions here if needed after clearing storage
                console.log("Storage variables cleared and target state set to disconnected.");
            });
            updateOverlay("loginOverlay")
        });
    });

    // Listen for changes in storage
    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'local' && 'currentState' in changes) {
            // Call updateUI with the new value
            updateUI(changes.currentState.newValue);
        }
    });

    initAuthOverlays();
    initFeedbackOverlays();
    initializeSubscriptionOverlays();
    initializePaymentModal();
    updateSubscriptionStateUI();
    updateCountdownTimer();

    document.querySelectorAll(".closeBtn").forEach(btn => {
        btn.addEventListener("click", function() {
            // Traverse up to find the nearest parent with class 'overlay'
            let overlay = this.closest('.overlay');
            if (overlay) {
                overlay.style.display = "none";
            }
        });
    });

    // Other navigation buttons
    document.querySelectorAll("button").forEach(btn => {
        const targetOverlayId = btn.getAttribute('overlay-target');
        if (targetOverlayId) {
            btn.addEventListener("click", function() {
                updateOverlay(targetOverlayId);
            });
        }
    });

    // Save theme preferences for Icon
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    chrome.storage.local.set({ theme: prefersDarkMode ? 'dark' : 'light' });

    // Init UI state
    chrome.storage.local.get('currentState', (result) => {
        const state = result.currentState || 'disconnected'; // Default state
        updateUI(state);
    });

    // Listen for subscription changes in storage
    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'local') {
            const { totalUsageTimeThisDay, dailyLimitSeconds, isPaid, email } = changes;

            if (totalUsageTimeThisDay || dailyLimitSeconds) {
                updateCountdownTimer(totalUsageTimeThisDay?.newValue, dailyLimitSeconds?.newValue);
            }

            if (isPaid || email) {
                updateSubscriptionStateUI();
            }
        }
    });

    // Initial fetch of the remaining time when the popup opens
    chrome.storage.local.get(['totalUsageTimeThisDay','dailyLimitSeconds'], (data) => {
        totalUsageTimeThisDay = data.totalUsageTimeThisDay || 0;
        dailyLimitSeconds = data.dailyLimitSeconds || DEFAULT_DAILY_LIMIT_SECONDS;
        updateCountdownTimer(data.totalUsageTimeThisDay, data.dailyLimitSeconds);
    });

    syncUsageWithBackend();
}

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateCountdownTimer(totalUsageTimeThisDay, dailyLimitSeconds) {
    // Load values from local storage if they are undefined
    chrome.storage.local.get(['totalUsageTimeThisDay', 'dailyLimitSeconds'], (data) => {
        // Use values from local storage if parameters are undefined
        totalUsageTimeThisDay = totalUsageTimeThisDay !== undefined ? totalUsageTimeThisDay : (data.totalUsageTimeThisDay || 0);
        dailyLimitSeconds = dailyLimitSeconds !== undefined ? dailyLimitSeconds : (data.dailyLimitSeconds || 0);

        const remainingTime = Math.max(dailyLimitSeconds - totalUsageTimeThisDay, 0);

        const countdownTimerElement = document.querySelector('#countdownTimer');
        if (remainingTime === 0) {
            // Timer color red - add style class .red
            countdownTimerElement.classList.add('red');
        } else {
            // Initial color - remove .red
            countdownTimerElement.classList.remove('red');
        }
        countdownTimerElement.textContent = formatTime(remainingTime);
    });
}

function updateSubscriptionStateUI() {
    chrome.storage.local.get(['email', 'isPaid'], (data) => {
        console.log("Updating Subscription popup state with data: ", data);

        // Update account email
        if (data.email) {
            const prefix = "👤  ";
            const displayedEmail = prefix + data.email;
            console.log("Updating displayed email with: ", displayedEmail);
            document.getElementById('userEmail').textContent = displayedEmail;
            document.getElementById('userEmail2').textContent = data.email;
        }

        const timerDataElement = document.getElementById('timerData');
        const paidSubscriptionDataElement = document.getElementById('paidSubscriptionData');

        if (data.isPaid) {
            timerDataElement.classList.add('h');
            paidSubscriptionDataElement.classList.remove('h');
        } else {
            timerDataElement.classList.remove('h');
            paidSubscriptionDataElement.classList.add('h');
        }
    });
}

// Payment Modal Functionality
function initializePaymentModal() {
    const paymentOptions = document.querySelectorAll('input[name="paymentPlan"]');
    const goToPaymentButton = document.getElementById('goToPaymentButton');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            goToPaymentButton.disabled = false;

            document.querySelectorAll('.payment-option').forEach(opt => {
                if (opt.contains(this)) {
                    opt.classList.add('selected');
                } else {
                    opt.classList.remove('selected');
                }
            });
        });
    });

    goToPaymentButton.addEventListener('click', async function() {
        const selectedOption = document.querySelector('input[name="paymentPlan"]:checked');

        if (selectedOption) {
            const period = parseInt(selectedOption.dataset.period);

            chrome.storage.local.get(['email'], async (data) => {
                if (data.email) {
                    // Disable the button and show small loader
                    const originalContent = goToPaymentButton.innerHTML;
                    goToPaymentButton.disabled = true;
                    goToPaymentButton.innerHTML = '<div class="lds-dual-ring button-loader"></div>';

                    // Hide any previous error message
                    const errorMessage = document.querySelector('.payment-error-message');
                    errorMessage.classList.remove('visible');

                    try {
                        // Make API call to get payment link
                        const response = await fetch('https://web.vpn-naoborot.online/get_payment_link', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email: data.email,
                                period
                            })
                        });
                        if (!response.ok) {
                            throw new Error('Failed to generate payment link');
                        }
                        const result = await response.json();
                        chrome.tabs.create({ url: result.payment_link });
                    } catch (error) {
                        console.error('Error generating payment link:', error);
                        const errorMessage = document.querySelector('.payment-error-message');
                        errorMessage.classList.add('visible');
                        // Re-enable the button and restore original content
                        goToPaymentButton.disabled = false;
                        goToPaymentButton.innerHTML = originalContent;
                    }
                } else {
                    console.error('User email not found');
                }
            });
        }
    });

    // Update the "Remove Limit" button to open the payment modal
    document.getElementById('removeLimitButton').setAttribute('overlay-target', 'paymentOverlay');

    // Also update the purchase link in the removeLimitOverlay
    document.getElementById('purchaseLink').addEventListener('click', function(e) {
        e.preventDefault();
        updateOverlay('paymentOverlay');
    });
}

initializePopupState();


