// import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
// import { logger } from "../utils/logging";


// describe("calculator scenarios", function(): void {
//     beforeEach(function(): void {
//         browser.get("https://juliemr.github.io/protractor-demo/");
//     });

//     it("verify title",async function(): Promise<void> {
//         expect((await browser.getTitle()).includes("Calculator"));
//     });

//     it("Add two numbers", function(): void {
//         element(by.model("first")).sendKeys("2");
//         // logger.debug("test logger");
//         element(by.xpath(`//select[@ng-model='operator']//option[text()='+']`));
//         element(by.model("second")).sendKeys("2");
//         element(by.id("gobutton")).click();
//     });
// });