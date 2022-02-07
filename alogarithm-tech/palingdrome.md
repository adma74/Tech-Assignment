function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("x"));   
console.log(isPalindrome("abba"));                  
console.log(isPalindrome("101"));
console.log(isPalindrome("taco cat"));
console.log(isPalindrome("kodok"));
console.log(isPalindrome("ab"));
console.log(isPalindrome("abaa"));