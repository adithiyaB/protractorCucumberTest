// import { resolve } from "path";
// import { getJsonKey } from "../utils/getElement.utils";
// import { getPageObject } from "../utils/yamlReader.utils";
// import { SummaryFormatter } from "cucumber";
// import { browser } from "protractor";
// // tslint:disable-next-line:no-console
// // console.log(fs.statSync(resolve("e2e/utils")).isDirectory());
// const pg = getPageObject(resolve("e2e/src/pop"))
// console.log(getJsonKey(pg,"test"))
// console.log(browser.getCapabilities());
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.Sum = function (A) {
        var result = 0;
        for (var i = 0; i < A.length; i++) {
            if (A[i] === 6) {
                for (var j = i; j < A.length; j++) {
                    if (A[j] !== 9) {
                        A[j] = 0;
                    }
                    else {
                        A[j] = 0;
                        break;
                    }
                }
            }
        }
        for (var _i = 0, A_1 = A; _i < A_1.length; _i++) {
            var num = A_1[_i];
            result = result + num;
        }
        return result;
    };
    return Addition;
}());
var Ad = new Addition();
console.log(Ad.Sum([4, 5, 6, 15, 12, 9, 3]));
console.log(Ad.Sum([1, 3, 5]));
console.log(Ad.Sum([2, 1, 6, 9, 11]));
console.log(Ad.Sum([2, 1, 6, 9, 11, 6, 19, 12, 9, 2]));
