/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // regex to match extra char

  const regex = /[ ,!?.]/gi;
  const cleaned = str.replaceAll(regex, "");

  return (
    Array.from(cleaned).reverse().join("").toLowerCase() ===
    cleaned.toLowerCase()
  );
}
console.log(isPalindrome("level"));
module.exports = isPalindrome;
