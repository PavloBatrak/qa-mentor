const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const { validUser } = require('../utils/testData');

test('User can log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    // await expect(page.locator('text=Your Feed')).toBeVisible();
    // await expect(page.locator('nav >> text=Your Feed')).toBeVisible({ timeout: 10000 });
    // await expect(page.locator('a[href="#/editor"]')).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible({ timeout: 10000 });


});
