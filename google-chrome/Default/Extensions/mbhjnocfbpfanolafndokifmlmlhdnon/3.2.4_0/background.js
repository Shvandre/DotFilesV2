console.log("background.js started")

// Local storage variables meaning:
// targetState - target state that is controlle via main button. connected/disconnected
// currentState - current state that is updated by code execution results. connected/disconnected/connecting/error
// theme - light / dark
// feedbackProvided - boolean
// connectionCount - the number of successful connections
// username - proxy username either inputed by user or default
// password - proxy password either inputed by user or default
// passwordValidated - boolean if the password validated and can be used to auth proxy (if auth disabled this should be true)
// activeOverlayId - id of the overlay that is currently shown, to save the state of the popup
// authListenerSetTime - timestamp when auth listener set (the initializationDelay after that is needed for slow PCs)
// totalUsageTimeThisDay - seconds when state was connected thois day


const initializationDelay = 5000;

function addAuthListener() {
    chrome.webRequest.onAuthRequired.addListener(function(details, callbackFn) {
        console.log("onAuthRequired: Received auth required event", details);

        chrome.storage.local.get(["username", "password"], function(items) {
            if (details.challenger.host === "proxy.vpn-naoborot.online" && details.challenger.port === 2052) {
                console.log("onAuthRequired: Sending auth credentials for proxy authentication", items.username, items.password);

                // Use the dynamically stored username and password
                callbackFn({
                    authCredentials: {
                        username: items.username,
                        password: items.password
                    }
                });

                console.log("onAuthRequired: Auth credentials sent");
            } else {
                console.log("onAuthRequired: Request not for proxy, ignoring");
                callbackFn();
            }
        });
    }, {urls: ["<all_urls>"]}, ['asyncBlocking']);

    authListenerSetTime = Date.now();
    chrome.storage.local.set({ "authListenerSetTime": authListenerSetTime }, function() {
        console.log("addAuthListener: Listener added at ", authListenerSetTime);
    });
}

// Listen for changes in storage
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'targetState' in changes) {
        toggleProxy()
    }
    if (area === 'local' && 'currentState' in changes) {
        updateIcon(changes.currentState.newValue)
    }
});

function updateIcon() {
    chrome.storage.local.get(['theme', 'currentState'], (result) => {
        // Determine the icon based on the proxy state and theme // TODO remove it, as after the connection the icon will be updated anyway.
        let iconPath;
        if (result.currentState && result.currentState === 'connected') {
            iconPath = 'icons/icon128.png'; // Proxy is enabled
        } else {
            // Proxy is disabled, check the theme
            if (result.theme && result.theme === 'light') {
                iconPath = 'icons/icon128-disabled-light.png';
            } else {
                // Default to dark theme if theme is not set or is dark
                iconPath = 'icons/icon128-disabled-dark.png';
            }
        }
        chrome.action.setIcon({ path: iconPath });
    });
}

function incrementProxyConnectionCount() {
    chrome.storage.local.get('connectionCount', (result) => {
        let count = result.connectionCount || 0;
        chrome.storage.local.set({ 'connectionCount': count + 1 });
        console.log("incrementProxyConnectionCount: New connection count = ", count + 1)
    });
}

function initProxy() {
    chrome.storage.local.get(["targetState", "passwordValidated"], ({ targetState, passwordValidated }) => {
        console.log("initProxy: State loaded from storage, targetState = ", targetState, "passwordValidated =", passwordValidated);

        // Check for undefined targetState and set a default if necessary
        if (typeof targetState === 'undefined') {
            console.log("initProxy: targetState is undefined. Setting default to 'disconnected'.");
            targetState = 'disconnected';
            chrome.storage.local.set({ targetState: targetState });
        }

        if (targetState === 'connected' && passwordValidated) {
            chrome.storage.local.set({ currentState: 'connecting' });
            setTimeout(toggleProxy, initializationDelay);
        } else {
            disableProxy();
        }
    });
}

function toggleProxy(){
    chrome.storage.local.get("targetState", ({ targetState }) => {
        console.log("toggleProxy: State loaded from storage, targetState = ", targetState);
        if (targetState === 'connected') {
            enableProxy();
        } else {
            disableProxy();
        }
    });
}

function enableProxy() {
    console.log("Enabling proxy...");

    chrome.storage.local.get(["passwordValidated", "username", "password", "authListenerSetTime"], function(items) {

        console.log("Attempting to enable proxy with credentials:", items);
        if (!items.passwordValidated || !items.username || !items.password) {
            console.log("Proxy cannot be enabled. Credentials missing or password not validated.");
            chrome.storage.local.set({ currentState: 'error' });
            // show login overlay?
            return;
        }

        chrome.storage.local.set({ currentState: 'connecting' });

        const currentTime = Date.now();
        const authListenerSetTime = items.authListenerSetTime || 0;
        const timeElapsed = currentTime - authListenerSetTime;

        if (timeElapsed < initializationDelay) {
            const remainingDelay = initializationDelay - timeElapsed;
            console.log(`enableProxy: Not enough time passed since Auth listener set. Waiting for ${remainingDelay} milliseconds.`);
            setTimeout(toggleProxy, remainingDelay);
            return;
        }

        chrome.proxy.settings.set({
            value: {
                mode: "fixed_servers",
                rules: {
                    singleProxy: {
                        scheme: "http",
                        host: "proxy.vpn-naoborot.online",
                        port: 2052
                    },
                    bypassList: ["airbnb.ru", "airbnb.com", "booking.com", "auth0.openai.com", "chat.openai.com", "platform.openai.com", "api.openai.com", "www.intel.com", "canva.com", "whatismyipaddress.com", "verstka.media", "shodan.io", "youtube.com", "208.67.222.222/32", "208.67.220.220/32", "8.8.8.8/32", "8.8.4.4/32", "1.1.1.1/32", "1.0.0.1/32", "195.82.64.0/19", "64.4.250.0/24", "13.107.42.0/24", "166.78.0.0/16", "192.0.64.0/18", "216.117.2.0/23", "107.162.154.0/24"]
                }
            },
            scope: 'regular'
        }, () => {
            if (chrome.runtime.lastError) {
                chrome.storage.local.set({ currentState: 'error' });
                console.error('enableProxy: Error setting proxy:', chrome.runtime.lastError.message);
            } else {
                chrome.storage.local.set({ currentState: 'connected' })
                incrementProxyConnectionCount();
                console.log("enableProxy: Proxy has been set successfully.");
            }
        });
    });
}

function disableProxy() {
    console.log("Disabling proxy...");
    chrome.proxy.settings.clear({ scope: 'regular' }, () => {
        if (chrome.runtime.lastError) {
            chrome.storage.local.set({ currentState: 'error' });
            console.error('disableProxy: Error clearing proxy settings:', chrome.runtime.lastError.message);
        } else {
            chrome.storage.local.set({ currentState: 'disconnected' });
            console.log("disableProxy: Proxy has been cleared successfully.");
        }
    });
}

addAuthListener()
updateIcon();
initProxy()

// Include the new file
importScripts('subscription.js');
initializeSubscriptionTimers();