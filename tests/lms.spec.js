import {test} from playwright/test;
import { lms } from '../pages/lms.js';


test("@lms LMS dashboard",async({page})=>{
    const lms = new lms(page);
    const login = new loginPage(page);
    await login.goto();
    await login.login('admin@auratrace.ai', 'admin');
    await lms.learningDashboard();
    
})
