class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('https://conduit.mate.academy/user/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}

module.exports = LoginPage;
