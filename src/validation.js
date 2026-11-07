// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS
}

module.exports = { validateEmail };
