const { expect } = require('@playwright/test');

class EditorPage {
    constructor(page) {
        this.page = page;
        this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
        this.descriptionInput = page.getByRole('textbox', { name: "What's this article about?" });
        this.bodyInput = page.getByRole('textbox', { name: 'Write your article (in' });
        this.tagsInput = page.getByRole('textbox', { name: 'Enter tags' });
        //this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.publishButton = page.locator('button:has-text("Publish Article")');
    }

    async goto() {
        await this.page.goto('https://conduit.mate.academy/editor');
    }

    async createArticle(article) {
        await expect(this.titleInput).toBeVisible({ timeout: 10000 });
        await this.titleInput.fill(article.title);

        await expect(this.descriptionInput).toBeVisible({ timeout: 10000 });
        await this.descriptionInput.fill(article.description);

        await expect(this.bodyInput).toBeVisible({ timeout: 10000 });
        await this.bodyInput.fill(article.body);

        await expect(this.tagsInput).toBeVisible({ timeout: 10000 });
        await this.tagsInput.fill(article.tags);

        await expect(this.publishButton).toBeVisible({ timeout: 10000 });

        // Czekaj na przekierowanie po kliknięciu
        //await Promise.all([
        //    this.page.waitForNavigation({ url: /\/article\//, timeout: 10000 }),
        //    this.publishButton.click(),
        //]);
        
        await this.publishButton.click();
        console.log('Clicked publish button');
        await this.page.waitForTimeout(3000); // daję czas na reakcję
        console.log('Current URL:', await this.page.url());
    }
}

module.exports = EditorPage;
