import screenshot from "screenshot-desktop";

class lms {

    constructor(page){
    this.page = page;
    this.lmbtn = '//span[text()="Learning"]';
    this.myLrn = `//div//div//a[text()='Course Management']`;
 }

  async learningDashboard() {
    await this.page.locator(this.lmbtn).click();
    await this.page.locator(this.myLrn).click();
    await this.page.waitForURL('https://dev-ph2.auratrace.ai/lms/courses');
    await screenshot({ filename: './screenshots/coursemanagement-page.jpg',fullpage: true });
    


  }

 
}

export default lms;