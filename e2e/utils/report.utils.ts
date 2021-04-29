import fs, { existsSync } from "fs";
import { resolve } from "path";

export function reportFolderNameReplace(): void {
  const dt: Date = new Date();
  const timeNow: string =
    "Report" +
    dt.getFullYear().toString() +
    (dt.getMonth() + 1).toString() +
    dt.getDate().toString() +
    dt.getHours().toString() +
    dt.getMinutes().toString() +
    dt.getSeconds().toString();

  if (!fs.existsSync(resolve(`reports/${timeNow}`))) {
    fs.mkdirSync(resolve(`reports/${timeNow}`));
  } else {
    fs.unlinkSync(resolve(`reports/${timeNow}`));
    fs.mkdirSync(resolve(`reports/${timeNow}`));
  }

  let configContext: string = fs
    .readFileSync(resolve("dist/e2e/config/conf.js"))
    .toString();
  configContext = configContext.replace("tempReportFolder", timeNow);
  fs.writeFile(resolve("dist/e2e/config/conf.js"), configContext, (err) => {
    if (err) {
      throw err;
    }
  });

  let reportConfigContext: string = fs
    .readFileSync(resolve("dist/e2e/config/reportConfig.js"))
    .toString();
  reportConfigContext = reportConfigContext.replace(
    "tempReportFolder",
    timeNow
  );
  reportConfigContext = reportConfigContext.replace(
    "tempReportFolder",
    timeNow
  );
  fs.writeFile(
    resolve("dist/e2e/config/reportConfig.js"),
    reportConfigContext,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
}

reportFolderNameReplace();
