class Palindrome {
  public isPalindrome(str: string) {
    const strLen = str.length;
    let j = strLen - 1;
    for (let i: number = 0; i < strLen / 2; i++) {
      if (str.charAt(i) !== str.charAt(j)) {
        return "Not a Palindrome";
      }
      j--;
    }
    return "Palindrome";
  }
}

const obj = new Palindrome();
console.log(obj.isPalindrome("momo"));
