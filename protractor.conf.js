import reporter from "cucumber-html-reporter";
import { resolve } from "path";
import { browser } from "protractor";
import { getPageObject } from "../utils/yamlReader.utils";
import { reportOptions } from "./reportConfig";

// tslint:disable-next-line:typedef
export let config = {
  onPrepare: async () => {
    await browser.manage().window().maximize();
    // browser.manage().timeouts().implicitlyWait(10000);
  },
  onComplete: async() => {
    reporter.generate(reportOptions);
  },
  params: {
    username: "test",
    pageObject: getPageObject(resolve("e2e/src/pop"))
  },
  framework: "jasmine",
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: "chrome",
    // browserName: "MicrosoftEdge",

    shardTestFiles: false,
    maxInstances: 1

    // browserName: "firefox",
    // marionette: true,
    // acceptSSLCerts: true
  },
  specs: [''],
  seleniumAddress: "http://localhost:4444/wd/hub",
  // seleniumArgs: ['-Dwebdriver.edge.driver=C:/Users/adithiya./OneDrive - Wolters Kluwer/Documents/selenium driver/msedgedriver.exe'],
};
