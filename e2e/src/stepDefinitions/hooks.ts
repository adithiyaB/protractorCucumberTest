import { After, AfterAll, Before, BeforeAll, Status } from "cucumber";
import { browser } from "protractor";
import { logger } from "../../utils/logging";

BeforeAll(async() => {
    await browser.manage().deleteAllCookies();
});

Before(async() => {
    logger.info("************************Invoking Application************************");
    browser.get("https://juliemr.github.io/protractor-demo/");
});

After(async (scenario: any) => {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot: any = await browser.takeScreenshot();
         scenario.attach(screenShot, "image/png");
         return true;
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});