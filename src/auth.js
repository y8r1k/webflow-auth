// Authentication module
function login(username, password) {
    // TODO: Implement
}

function checkCredentials(username, password) {
    return username && password;
}

function login(username, password) {
    if (checkCredentals(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

module.exports = { login };
