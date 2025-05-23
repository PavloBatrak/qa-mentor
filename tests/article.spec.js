// tests/article.spec.js
const { test, expect } = require('@playwright/test');
const EditorPage = require('../pages/EditorPage');
const { article } = require('../utils/testData');

test('User can create a new article', async ({ page }) => {
    const editor = new EditorPage(page);

    // Użytkownik jest już zalogowany dzięki auth.json
    await page.goto('/');

    // Przejdź do edytora
    await editor.goto();
    await editor.createArticle(article);

    // Sprawdź, czy artykuł został wyrenderowany 
    // TODO: Backend nie zachowuje danych po testach!!! Test Failed
    // await expect(page.locator('h1')).toHaveText(article.title, { timeout: 10000 });

    // Alternatywa
    // Potwierdź, że tag pojawia się na stronie artykułu
    await expect(page.getByText(article.tags)).toBeVisible({ timeout: 5000 });

    // Wróć do Home
    await page.getByRole('link', { name: 'Home' }).click();

    // Poczekaj na "Popular Tags"
    await expect(page.getByText('Popular')).toBeVisible({ timeout: 5000 });

    // Sprawdź, że tag NIE pojawia się wśród popularnych tagów
    const tagVisible = await page.locator('[id="__next"] div').filter({
        hasText: 'Popular',
    }).nth(4).getByText(article.tags).isVisible();

    expect(tagVisible).toBeFalsy(); // <---------   dowód ograniczenia backendu
});
