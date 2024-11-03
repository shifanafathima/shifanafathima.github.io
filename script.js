// Store user data in local storage for persistence across sessions
function saveUserData(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
}

// Handle sign up
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the username already exists
    const existingUser = users.find(user => user.username === newUsername);
    if (existingUser) {
        document.getElementById('signup-message').innerText = "Username already exists.";
    } else {
        // Save new user
        saveUserData(newUsername, newPassword);
        document.getElementById('signup-message').innerText = "Sign up successful! Redirecting to login page...";
        
        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000); // Redirect after 2 seconds
    }
});

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check for valid credentials
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Redirect to welcome page if login is successful
        window.location.href = "welcome.html";
    } else {
        // Display an error message if login fails
        document.getElementById('login-message').innerText = "Invalid username or password.";
    }
});
