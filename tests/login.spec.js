import { test } from '@playwright/test';
import loginPage from '../pages/loginPage.js';
import screenshot from 'screenshot-desktop';

test('@login Login Test', async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.login('admin@auratrace.ai', 'admin');
});
