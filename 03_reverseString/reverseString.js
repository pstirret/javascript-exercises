const reverseString = function(inStr) {

   let outStr = '';

   for (let i=inStr.length; i>=0; i--) {
      outStr += inStr.charAt(i);
   }

   return outStr;
};

// Do not edit below this line
module.exports = reverseString;
