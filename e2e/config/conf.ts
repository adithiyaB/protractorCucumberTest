import { resolve } from "path";
import { browser } from "protractor";

// tslint:disable-next-line:typedef
export var config = {
  onPrepare: async () => {
    await browser.manage().window().maximize();
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: [resolve("dist/e2e/src/stepDefinitions/*.js")],
    format: `json:reports/tempReportFolder/result.json`,
    tags: ["@Smoke"]
  },
  capabilities: {
    browserName: "chrome",
    // browserName: "firefox",
    // marionette: true,
    // acceptSSLCerts: true
  },
  specs: [resolve("e2e/src/features/*.feature")],
  seleniumAddress: "http://localhost:4444/wd/hub",
};
