// class Vendor {
//   public reverseStr(str: string) {
//     const strArr: string[] = str.split("");
//     let reversedStr = "";
//     for (let i = strArr.length - 1; i >= 0; i--) {
//       reversedStr = reversedStr + strArr[i];
//     }
//     return reversedStr;
//   }
// }

// const shop = new Vendor();
// const str =
//   "We can reverse each % ^&& *() word of a string, & we can get all words in an array of long string aaBaaaaaaAaaaaAaaaSaaAaaAaaaaaAaaaaaa";
// const strArr = str.split(" ");
// let finalStr = "";
// for (let i = 0; i < strArr.length; i++) {
//   if (i == 0) {
//     finalStr = finalStr + shop.reverseStr(strArr[i]);
//   } else {
//     finalStr = finalStr + " " + shop.reverseStr(strArr[i]);
//   }
// }
// finalStr = finalStr.replace(/a/g, "_").replace(/A/g, "_");
// console.log(finalStr);
