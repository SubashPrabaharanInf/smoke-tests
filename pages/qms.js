import screenshot from "screenshot-desktop";

class qms {
    constructor(page) {
        this.page = page;
        this.qmsBtn = '//div[@class="relative h-fit w-fit"]//button//span[text()="Quality"]';
        this.qualityMan = `//span[text()='Document Management']`;
        //this.docManagement = this.page.getByText(`Document Management`);
        this.documentControlBtn = this.page.getByRole(`link`, { name: `Document Control` });
    }

    async qmsDashboard() {
        await this.page.locator(this.qmsBtn).click();
        await this.page.locator(this.qualityMan).click();
        // await this.page.pause();
        await this.documentControlBtn.click();
        await this.page.waitForURL('https://dev-ph2.auratrace.ai/quality/document-control');
        await screenshot({ filename: './screenshots/quality-documentcontrol-page.jpg', fullpage: true });

    }


}


export default qms;