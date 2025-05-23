const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const { invalidUser } = require('../utils/testData');

test('User cannot log in with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(invalidUser.email, invalidUser.password);

    // Zakładamy, że pojawi się komunikat błędu
    await expect(page.getByText(/email or password/i)).toBeVisible({ timeout: 5000 });
});
