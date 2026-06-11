import { test } from '@playwright/test';
import loginPage from '../pages/loginPage.js';
import screenshot from 'screenshot-desktop';

test('@login Login Test', async ({ page }) => {
    // await page.setViewportSize({
    //     width: 1920,
    //     height: 1080
    // });

    const login = new loginPage(page);

    await login.goto();
    await screenshot({ filename: './screenshots/login-page.jpg',fullpage: true });

    await login.login('admin@auragxp.com', 'admin@12345');
    await page.waitForTimeout(5000);
    await screenshot({ filename: './screenshots/cred-page.jpg',fullpage: true });

});
