var test = "adsfA1234cDVds56$%%";
// let onlyDigits = test.match(/\d/)
// console.log(onlyDigits[0])
// console.log(test.match(/\D+/g).join(""))
// console.log(test.match(/\c+/g).join(""))
// console.log(test.match(/[a-z]/g))
// console.log(test.match(/[a-z]/gi))
// console.log(test.match(/[0-9]/g))
// console.log(test.repeat(2))
// console.log(test.charAt(2))
// console.log(test.replace("ad","tt"))
// console.log(test.replace(/[a-z][/gi,"_"))
console.log(test.match(/\W+/)[0]);
// // Remove duplicate characters from a string
// let testStr="wonderwoman12345612378"
// console.log(Array.from(new Set(testStr.split(""))))
