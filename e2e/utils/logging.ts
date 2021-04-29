class Log4jsConfig {

  static Log(): any {
      var log4js: any = require("log4js");
      log4js.configure("e2e/utils/log4js.json");
      const logger: any = log4js.getLogger();
      // let log = log4js.getLogger("default");
      return logger;
  }
}

export const logger: any = Log4jsConfig.Log();