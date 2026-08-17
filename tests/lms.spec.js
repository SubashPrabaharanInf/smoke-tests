import {test} from "@playwright/test";
import LMS from '../pages/lms.js';
import loginPage from "../pages/loginPage.js";


test("@lms LMS dashboard",async({page})=>{
   
    const login = new loginPage(page);
    const lms = new LMS(page);
    await login.goto();
    await login.login('admin@auratrace.ai', 'admin');
    await lms.learningDashboard();
    
})
