var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.fibonacciSeries = function (num) {
        var fibbArray = [0, 1];
        for (var i = 1; i <= num; i++) {
            fibbArray.push(fibbArray[i - 1] + fibbArray[i]);
        }
        console.log(fibbArray);
    };
    return Test;
}());
var testObj = new Test();
testObj.fibonacciSeries(10);
