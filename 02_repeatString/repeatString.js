
const repeatString = function(inStr, timesToRepeat) {

   if (timesToRepeat < 0) {
      return 'ERROR';
   }

   let outStr = '';

   for (let i=0; i<timesToRepeat; i++) {
      outStr += inStr;
   }

   return outStr;

};

// Do not edit below this line
module.exports = repeatString;
