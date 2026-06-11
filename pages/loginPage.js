class loginPage{

    constructor(page){

    this.page = page;
    this.credentials = page.locator('//button[normalize-space()="Continue with Credentials"]');
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
    this.selOrg = page.getByRole('combobox').filter({ hasText: 'Select Organization' });
    this.opt = page.getByRole('option', { name: 'auragxp (agxp)' });
    this.proceed = page.getByRole('button', { name: 'Proceed' });
    }

    async goto(){
        await this.page.goto('https://auragxp-uat.auratrace.ai/');
        await this.page.waitForLoadState('networkidle');

    }


        async login(username, password){
            await this.credentials.click();
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.page.waitForTimeout(3000);
            await this.loginButton.click();
            await this.selOrg.click();
            await this.opt.click();
            await this.proceed.click();
        }



}

export default loginPage;