import screenshot from 'screenshot-desktop';

class loginPage{

     constructor(page) {
    this.page = page;
    this.credentials = page.locator('//button[normalize-space()="Continue with Credentials"]');
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
    this.selOrg = page.locator('button[role="combobox"]');
    this.opt = page.getByRole('option', { name: 'auratrace' });
    this.proceed = page.getByRole('button', { name: 'Proceed' });
  }

    async goto(){
        await this.page.goto('https://dev-ph2.auratrace.ai/');
        await this.page.waitForLoadState('networkidle');
        await screenshot({ filename: './screenshots-login/login-page.jpg',fullpage: true });

    }


     async login(username, password) {
    await this.credentials.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await screenshot({ filename: './screenshots-login/cred-page.jpg',fullpage: true });
    await this.loginButton.click();
    await this.selOrg.click();
    await this.opt.click();
    await this.proceed.click();
    await this.page.waitForTimeout(5000)
    await screenshot({filename : './screenshots-login/home-page.jpg',fullpage:true});
    


  }


}

export default loginPage;