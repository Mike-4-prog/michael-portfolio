// public/tabs.js
function switchTab(tabName, event) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show the selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to the clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Initialize tabs when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName, event);
        });
    });
    
    // Ensure the first tab is active by default
    const defaultTab = document.querySelector('.tab-button.active');
    if (defaultTab) {
        const defaultTabName = defaultTab.getAttribute('data-tab');
        switchTab(defaultTabName);
    }
});