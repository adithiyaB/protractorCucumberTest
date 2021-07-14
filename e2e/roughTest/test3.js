var Palindrome = /** @class */ (function () {
    function Palindrome() {
    }
    Palindrome.prototype.isPalindrome = function (str) {
        var strLen = str.length;
        console.log();
        var j = strLen - 1;
        for (var i = 0; i < strLen / 2; i++) {
            console.log(str.charAt(i));
            console.log(str.charAt(j));
            if (str.charAt(i) !== str.charAt(j)) {
                return "Not a Palindrome";
            }
            j--;
        }
        return "Palindrome";
    };
    return Palindrome;
}());
var obj = new Palindrome();
console.log(obj.isPalindrome("momo"));
