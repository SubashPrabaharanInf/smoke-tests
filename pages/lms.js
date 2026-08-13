import screenshotDesktop from "screenshot-desktop";



class lms {

    constructor(page){
    this.page = page;
    this.lmbtn = '//span[text()="Learning"]';
    this.myLrn = `//div//div//a[text()='My Learning Dashboard']`;
 }

  async learningDashboard() {
    await this.page.locator(this.lmbtn).click();
    await this.page.locator(this.myLrn).click();
    await screenshot({ filename: './screenshots-lms/lmsDashboard-page.jpg',fullpage: true });
    


  }

 
}