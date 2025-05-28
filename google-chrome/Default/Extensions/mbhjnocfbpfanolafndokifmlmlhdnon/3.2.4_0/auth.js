const authEnabled = true

function initAuthOverlays() {
    
    console.log("Auth init called");

    document.getElementById('emailForm').addEventListener('submit', handleEmailFormSubmit);

    document.querySelectorAll(".loginButton").forEach(btn => {
        btn.addEventListener("click", handleLogin);
    });

    chrome.storage.local.get(["password", "activeOverlayId", "passwordValidated"], function(items) {
        const { password, activeOverlayId, passwordValidated } = items;
    
        if (!authEnabled) {
            console.log("Authentication not enabled; no action needed.");
            // console.log("Setting up default username and password")   // TBD for when auth disabled
            // chrome.storage.local.set({ targetState: 'disconnected' })
            // chrome.storage.local.set({ targetState: 'disconnected' })
            return; // Exit if authentication is not enabled
        }
    
        console.log("Authentication is enabled. Evaluating password validation state...");
    
        // Proceed without overlay if the password has been validated
        if (passwordValidated) {
            console.log("Password has been validated; no overlay will be shown.");
        } else {
            console.log("Password not validated or absent. Checking for active overlay...");

            // Load email from storage
            loadEmailFromStorage((storedEmail) => {
                // Fill email input with stored email if available
                if (storedEmail) {
                    document.getElementById('emailInput').value = storedEmail;
                }
            });
            
            // Show an appropriate overlay if the password has not been validated
            if (activeOverlayId && activeOverlayId !== 'loadingOverlay') {
                updateOverlay(activeOverlayId);
                console.log(`Restoring active overlay: ${activeOverlayId}`);
            } else {
                console.log("No suitable active overlay found or defaulting to login.");
                chrome.storage.local.set({ targetState: 'disconnected' }, () => console.log("Proxy state set to disconnected."));
                updateOverlay("loginOverlay");
            }
        }
    });
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function onPasswordRequested(data) {
    console.log('onPasswordRequested:', data);
    updateOverlay("newPasswordOverlay");
}

function showError(error) {
    console.error('Error:', error);
    updateOverlay("errorOverlay");
}

function handleEmailFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const submitter = event.submitter;

    if (this.checkValidity()) {
        if (submitter && submitter.id === 'requestPasswordButton') {
            handleRequestPassword();
        } else if (submitter && submitter.id === 'alreadyHavePasswordButton') {
            var email = document.getElementById('emailInput').value; // Get the email from the form

            // Update the email in storage
            chrome.storage.local.set({ email: email }, () => {
                console.log(`email updated to ${email} in storage.`);
            });
            updateOverlay("passwordOverlay");
        } else {
            console.log("Form submission not caused by recognized button.");
        }
    } else {
        this.reportValidity(); // This will trigger the browser's default validation messages
    }
}

function handleRequestPassword() {
    updateOverlay("loadingOverlay"); // Show loading overlay during the request
    var email = document.getElementById('emailInput').value; // Get the email from the form

    // Update the email in storage
    chrome.storage.local.set({ email: email }, () => {
        console.log(`email updated to ${email} in storage.`);
    });

    const url = 'https://extension-api.naoinfrastructure.com/request_password';
    const data = { email: email };
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch(url, config)
        .then(handleResponse)
        .then(data => {
            onPasswordRequested(data);
        })
        .catch(error => {
            console.error('Error:', error);
            updateOverlay("errorOverlay"); // Show error overlay if the fetch fails
        });
}


// Function to load email from storage
function loadEmailFromStorage(callback) {
    chrome.storage.local.get('email', (result) => {
        const email = result.email;
        callback(email);
    });
}

function handleLogin(event) {
    const button = event.target;
    const overlayContent = button.closest('.overlayContent');
    const passwordInput = overlayContent.querySelector('input[name="password"]'); // we have 2 of them and neeed to choose the right one here
    
    const email = document.getElementById('emailInput').value;
    const password = passwordInput.value;
    
    updateOverlay("loadingOverlay"); // Show loading overlay during the request

    const url = 'https://extension-api.naoinfrastructure.com/validate_password';
    const data = { email: email, password: password };
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch(url, config)
        .then(handleResponse)
        .then(data => {
            onPasswordValidityCheck(data);
        })
        .catch(error => {
            console.error('Error:', error);
            updateOverlay("errorOverlay"); // Show error overlay if the fetch fails
        });
}

function onPasswordValidityCheck(data) {
    console.log('onPasswordValidityCheck:', data);
    if (data.result === "valid") {
        console.log("Password valid, hiding overlays, enabling proxy, updating subscription info")
        if (updateLocalSubscriptionState) {
            updateLocalSubscriptionState(data);
        } else {
            console.warn("Trying to update displayed subscription data before the function loaded")
        }
        updateOverlay(null);
        chrome.storage.local.set({
            username: data.username,
            password: data.password,
            passwordValidated: true,
            // targetState: 'connected',

        }, () => {
            console.log("Storage: Updated password, validated status.");
        });
        
    } else if (data.status === "error") {
        console.error('Server responded with error:', data.message);
        updateOverlay("errorOverlay");
    } else {
        console.log("Password invalid");
        updateOverlay("invalidPasswordOverlay");
    }
}

// Function to update the overlay and synchronize state in storage
function updateOverlay(newOverlayId) {
    // First, hide all existing overlays
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => overlay.style.display = 'none');
    console.log("All overlays hidden.");

    // Show the new overlay if provided
    if (newOverlayId) {
        const overlay = document.getElementById(newOverlayId);
        if (overlay) {
            overlay.style.display = "flex";
            console.log(`Overlay ${newOverlayId} is now displayed.`);
        } else {
            console.error(`Error: No overlay found with ID ${newOverlayId}`);
            newOverlayId = null; // Reset invalid overlay ID
        }
    }

    // Update the active overlay state in storage
    chrome.storage.local.set({ activeOverlayId: newOverlayId }, () => {
        console.log(`Active overlay ID updated to ${newOverlayId} in storage.`);
    });
}
