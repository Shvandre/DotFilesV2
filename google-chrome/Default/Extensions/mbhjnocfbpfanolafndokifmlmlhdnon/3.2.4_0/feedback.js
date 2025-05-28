// FEEDBACK
function setFeedbackProvided() {
    chrome.storage.local.set({ 'feedbackProvided': true });
}

function needToRequestFeedback(connectionCount, callback) {
    chrome.storage.local.get('feedbackProvided', (result) => {

        let feedbackProvided = result.feedbackProvided || false;
        let feedbackMilestones = [1, 2, 3, 5, 8, 13, 21, 34, 55];

        if (!feedbackProvided && feedbackMilestones.includes(connectionCount)) {
            callback(true);
        } else {
            callback(false);
        }
    });
}

function checkAndShowFeedbackOverlay() {
    chrome.storage.local.get('connectionCount', (result) => {
        needToRequestFeedback(result.connectionCount, (shouldShowOverlay) => {
            if (shouldShowOverlay) {
                console.log("checkAndShowFeedbackOverlay: Showing feedback overlay at connectionCount =", result.connectionCount);
                document.getElementById("feedbackOverlay").style.display = "flex";
            }
        });
    });
}

function initFeedbackOverlays() {
    // FEEDBACK OVERLAYS
    document.getElementById("positiveFeedback").addEventListener("click", function() {
        document.getElementById("feedbackOverlay").style.display = "none";
        document.getElementById("positiveOverlay").style.display = "flex";
    });
    
    document.getElementById("negativeFeedback").addEventListener("click", function() {
        document.getElementById("feedbackOverlay").style.display = "none";
        document.getElementById("negativeOverlay").style.display = "flex";
    });

    // Event listener for the positive feedback button
    document.querySelector("#positiveOverlay button").addEventListener("click", function() {
        setFeedbackProvided();
        // Optionally close the overlay after clicking
        document.getElementById("positiveOverlay").style.display = "none";
    });

    // Event listener for the negative feedback button
    document.querySelector("#negativeOverlay button").addEventListener("click", function() {
        setFeedbackProvided();
        // Optionally close the overlay after clicking
        document.getElementById("negativeOverlay").style.display = "none";
    });

    const version = chrome.runtime.getManifest().version;
    const versionFormatted = version.split('.').join('-');
    
    const negativeFeedbackLink = document.querySelector('#negativeOverlay a');
    if (negativeFeedbackLink) {
        const baseUrl = "https://noteforms.com/forms/kak-vam-vpn-naoborot-zuhsev?ed88b3fb-ea49-4b6f-9e40-1a3ff19e2901=chrome-extension";
        negativeFeedbackLink.href = `${baseUrl}-${versionFormatted}`;
    }

    const allowPublicFeedbackForFreeUsers = true

    if (!allowPublicFeedbackForFreeUsers) {
        chrome.storage.local.get('isPaid', (result) => {
            if (result.isPaid) { // Keeping the original public link for paid users
                return
            } else { // else replacing with private feedback link
                const positiveFeedbackLink = document.querySelector('#positiveOverlay a');
                if (positiveFeedbackLink) {
                    const baseUrl = "https://noteforms.com/forms/kak-vam-vpn-naoborot-zuhsev?ed88b3fb-ea49-4b6f-9e40-1a3ff19e2901=chrome-extension"; 
                    positiveFeedbackLink.href = `${baseUrl}-${versionFormatted}`;
                }
            }
        });
    }
}


