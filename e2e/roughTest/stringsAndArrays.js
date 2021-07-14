var number1 = [1, 2, 3, 4, 5];
var number2 = [6, 7];
var number3 = number1.concat(number2, [0, 0]);
number1.shift();
console.log(number1);
