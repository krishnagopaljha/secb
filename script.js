// Check if user is already authenticated
window.onload = function() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userNameDisplay').textContent = userName;
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('authModal').style.display = 'none';
    } else {
        document.getElementById('authModal').style.display = 'block';
    }
};

// Function to authenticate user
function authenticateUser() {
    const userName = document.getElementById('usernameInput').value;
    if (userName.trim() !== '') {
        localStorage.setItem('userName', userName);
        document.getElementById('userNameDisplay').textContent = userName;
        document.getElementById('authModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('Please enter your name.');
    }
}

// Function to log out the user
function logoutUser() {
    localStorage.removeItem('userName'); // Clear the user name from local storage
    document.getElementById('userNameDisplay').textContent = 'Guest'; // Reset display name
    document.getElementById('mainContent').style.display = 'none'; // Hide main content
    document.getElementById('authModal').style.display = 'block'; // Show authentication modal
}

// Attach the logout function to the logout button
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.querySelector('.nav-links li:last-child a');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            logoutUser(); // Call the logout function
        });
    }
});
