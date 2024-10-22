// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'changeBackground') {
        // Change the background color of the body or a specific element
        document.body.style.backgroundColor = request.color;  // Set the background color

        // Optionally, change the text color for better visibility
        document.body.style.color = request.textColor || '#fff'; // Default to white if no text color is given

        sendResponse({ status: 'success' });
    }
});
