import { resolve } from "path";
import { getJsonKey } from "../utils/getElement.utils";
import { getPageObject } from "../utils/yamlReader.utils";

// tslint:disable-next-line:no-console
// console.log(fs.statSync(resolve("e2e/utils")).isDirectory());

const pg = getPageObject(resolve("e2e/src/pop"))
console.log(getJsonKey(pg,"test"))