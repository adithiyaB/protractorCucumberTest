import reporter from "cucumber-html-reporter";
import { resolve } from "path";
import { browser } from "protractor";
import { getPageObject } from "../utils/yamlReader.utils";
import { reportOptions } from "./reportConfig";

// tslint:disable-next-line:typedef
export let config = {
  onPrepare: async () => {
    await browser.manage().window().maximize();
  },
  onComplete: async() => {
    reporter.generate(reportOptions);
  },
  params: {
    username: "test",
    pageObject: getPageObject(resolve("e2e/src/pop"))
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: [resolve("dist/e2e/src/stepDefinitions/*.js")],
    format: `json:reports/tempReportFolder/result.json`,
    // tags: ["@Smoke"]
  },
  capabilities: {
    browserName: "chrome",

    shardTestFiles: false,
    maxInstances: 1

    // browserName: "firefox",
    // marionette: true,
    // acceptSSLCerts: true
  },
  specs: [resolve("e2e/src/features/juliemrCalculator.feature")],
  seleniumAddress: "http://localhost:4444/wd/hub",
};
