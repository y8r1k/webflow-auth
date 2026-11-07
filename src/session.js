// Session management
function createSession(userId) {
    return {
        id: Math.random().toString(36),
        userId,
        createdAt: Date.now()
    };
}
