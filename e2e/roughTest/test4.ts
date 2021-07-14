// let test = "test123abc456"
// // console.log(test.match(/\d+/g))
// console.log(test.match(/\d+/))


// let test = "testing"
// let testArr = test.split("");
// let testArrStr = "";

// // tslint:disable-next-line:prefer-for-of
// for (let i=0;i<testArr.length;i++) {
//     // tslint:disable-next-line:prefer-for-of
//     for(let j=i+1;j<testArr.length;j++) {
//         if(testArr[i] === testArr[j]) {
//             testArr[i] = ""
//         }
//     }
// }
// console.log(testArr.join(""));

// let test = "testing"
// let initialArray = test.split("");
// const finalArray = Array.from(new Set(initialArray));
// console.log(finalArray.join(""))


const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
// let unique = [new Set(...names)];
console.log(...names);


