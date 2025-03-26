const palindromes = function (inStr) {
   
   //Convert input string to an array
   inStrArr = inStr.split("");

   //Filter out all the non-letters using a regex
   lettersOnly = inStrArr.filter(letter => /^[a-zA-Z0-9]+$/.test(letter));

   //Convert to lower case
   lettersOnly = lettersOnly.map(letter => letter.toLowerCase());

   for (let i = 0; i < lettersOnly.length; i++) {
      if (i >= (lettersOnly.length - 1 - i)) {
         return true;
      }
      if (lettersOnly[i] != lettersOnly[lettersOnly.length - 1 - i]) {
         return false;
      }
   }

};

// Do not edit below this line
module.exports = palindromes;
