/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length !== str2.length
  ) {
    return false;
  }
  const str1_sorted = Array.from(str1)
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLocaleLowerCase();
  const str2_sorted = Array.from(str2)
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLocaleLowerCase();

  return str1_sorted === str2_sorted;
}

console.log(isAnagram("Debit Card", "Bad Credit"));
module.exports = isAnagram;
