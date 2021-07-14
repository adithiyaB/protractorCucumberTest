var PrimeNumbers = /** @class */ (function () {
    function PrimeNumbers() {
    }
    PrimeNumbers.prototype.isPrime = function (num) {
        if (num === 0 || num === 1) {
            return "Not a Prime";
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return "Not a Prime";
            }
        }
        return "Is Prime";
    };
    return PrimeNumbers;
}());
var ob = new PrimeNumbers();
console.log(ob.isPrime(3));
