import { resolve } from "path";

export const reportOptions: any = {
        theme: "bootstrap",
        jsonFile: resolve(`reports/tempReportFolder/result.json`),
        output: resolve(`reports/tempReportFolder/cucumber_report.html`),
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        Type: "smokeReport",
        storeScreenshots: true,
        screenshotsDirectory: "screenshots",
        noInlineScreenshots: true,
        metadata: {
            "Test Environment": "Test",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
