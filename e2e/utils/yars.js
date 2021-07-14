import * as yargs from "yargs";

const argv = yargs.options({
  getBrowser: {
    choices: ["chrome", "ie", "all"],
    demandOption: false,
    description: "",
    type: "string",
  },
  getVersion: {
    demandOption: false,
    description: "app environment",
    type: "string",
  },
  getEnv: {
    demandOption: false,
    description: "app environment",
    type: "string",
  },
  configDir: {
    demandOption: false,
    description: "app environment",
    type: "string",
  },
  local: {
    demandOption: false,
    description: "app environment",
    type: "boolean",
  },
  remote: {
    demandOption: false,
    description: "app environment",
    type: "string",
  },
  parallelInstance: {
    demandOption: false,
    description: "number of instance to be executed in parallel for chrome browser",
    type: "number",
  },
}).argv;

const getSeleniumAddressI = () => {
  let address;
  if (argv.local) {
    address = "http://localhost:4444/wd/hub";
  } else {
    address = argv.remote;
  }
  return address;
};



// export const browserName = argv.getBrowser.toLowerCase() || "chrome";
// export const environment= argv.getEnv.toLowerCase() || "r2";
// export const configDir= argv.configDir.toLowerCase();
// export const browserVersion = argv.getVersion || "any";
// export const getSeleniumAddress = getSeleniumAddressI();
// export const parallelInstance = argv.parallelInstance || 0;
