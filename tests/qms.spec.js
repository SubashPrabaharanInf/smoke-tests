import {test} from "@playwright/test";
import QMS from "../pages/qms";
import loginPage from '../pages/loginPage.js';

test('QMS Dashboard', async ({page}) => {
    const login = new loginPage(page);
    await login.goto();
    await login.login('admin@auratrace.ai', 'admin');
    const qms = new QMS(page);
    await qms.qmsDashboard();
})