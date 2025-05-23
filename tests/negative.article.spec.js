const { test, expect } = require('@playwright/test');
const EditorPage = require('../pages/EditorPage');
const { article } = require('../utils/testData');

test('User cannot publish article without title', async ({ page }) => {
    const editor = new EditorPage(page);
    await editor.goto();

    // Wypełnij tylko opis (brak tytułu)
    await page.getByRole('textbox', { name: "What's this article about?" }).fill('No title');
    await page.locator('button:has-text("Publish Article")').click();

    // Sprawdź, czy pojawia się komunikat o braku tytułu
    await expect(page.getByText('Article title cannot be empty')).toBeVisible({ timeout: 5000 });

    // I że nadal jesteśmy na stronie edytora
    await expect(page).toHaveURL('https://conduit.mate.academy/editor');
});
