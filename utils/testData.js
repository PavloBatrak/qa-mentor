// utils/testData.js
module.exports = {
    validUser: {
        email: 'testuser@example.com',
        password: 'password123',
    },
    invalidUser: {
        email: 'invalid@example.com',
        password: 'wrongpass',
    },
    article: {
        title: 'Playwright Test Article',
        description: 'Simple test article',
        body: 'This is a test article written with Playwright.',
        tags: 'playwright,test'
    }
};
