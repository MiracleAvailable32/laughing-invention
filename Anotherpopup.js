document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');  // Get the color from the button's data attribute

        // Send a message to the content script to change the background color
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeBackground', color: color, textColor: '#fff' }, (response) => {
                if (response.status === 'success') {
                    document.getElementById('status').textContent = `Background changed to ${color}`;
                } else {
                    document.getElementById('status').textContent = 'Failed to change background.';
                }
            });
        });
    });
});
