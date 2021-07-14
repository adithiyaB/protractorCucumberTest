// import { browserName } from './../../utils/yargsUtils';
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  HookScenarioResult,
  Status,
} from "cucumber";
import { browser } from "protractor";
import { logger } from "../../utils/logging.utils";
// import { args } from "../../utils/yargsUtils";

BeforeAll(async () => {
  await browser.manage().deleteAllCookies();
});

Before(async () => {
  logger.info(
    "************************Invoking Application************************"
  );
  console.log(browser.params.username)
  // console.log(await browser.getCapabilities());
  // console.log(args[1]);
  // console.log(args[0]);
  await browser.get("https://juliemr.github.io/protractor-demo/");
});

// After(async (scenario: any) => {
//     if (scenario.result.status === Status.FAILED) {
//         // screenShot is a base-64 encoded PNG
//          const screenShot: any = await browser.takeScreenshot();
//          scenario.attach(screenShot, "image/png");
//          return true;
//     }
// });

After(async function(scenario: HookScenarioResult) {
    const self: any = this;
  if (scenario.result.status === Status.FAILED) {
    // const dt: Date = new Date();
    // const timeNow: string =
    //   "Screenshot" +
    //   dt.getFullYear().toString() +
    //   (dt.getMonth() + 1).toString() +
    //   dt.getDate().toString() +
    //   dt.getHours().toString() +
    //   dt.getMinutes().toString() +
    //   dt.getSeconds().toString();

    const screenShotFail  = await browser.takeScreenshot();
    self.attach(new Buffer(screenShotFail, 'base64'), 'image/png');
    //   fs.writeFile(resolve(`screenshots/${timeNow}.png`), new Buffer(screenShotFail, 'base64'), (err) => {
    //   if (err) {
    //     throw err;
    //   }
    // });



    // const scrsht= new Buffer(screenShotFail.replace(/^data:image\/png;base64,/,''), 'base64');
    // self.attach(scrsht, 'image/png');

    // const img = Buffer.alloc(screenShotFail.length, screenShotFail, 'base64');
    // this.attach(img, 'image/png');
    // scenario.attach(screenShotFail,"image/png");
    // scenario.attach(new Buffer(screenShotFail, 'base64'), "image/png");
    // this.attach(new Buffer(screenShotFail, 'base64'), "image/png");
    // return true;

  }

  //     const ss = await browser.takeScreenshot();
  //   const img = Buffer.alloc(ss.length, ss, 'base64');
  //   this.attach(img, 'image/png');
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  await browser.quit();
});
