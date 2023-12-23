function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username (email format)
    if (!isValidEmail(username)) {
        alert('Invalid email format for username');
        return false;
    }

    // Validate password
    if (!isValidPassword(password)) {
        alert('Invalid password format');
        return false;
    }

    // If both username and password are valid, allow form submission
    return true;
}

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Password must contain an uppercase letter, a number, and only @ as a special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;
    return passwordRegex.test(password);
}
