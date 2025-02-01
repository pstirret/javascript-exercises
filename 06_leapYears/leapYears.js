const leapYears = function(inYear) {
   /**
    * 
    * IF year is divisible by 4
    *    IF year not divisible by 100 OR year is divisible by 400
    *       RETURN true;
    *    ELSE
    *       RETURN false;
    * ELSE
    *    RETURN false
    * 
    */


   if (inYear % 4 == 0) {
      if (inYear % 100 != 0 || inYear % 400 == 0) {
         return true;
      }
      else {
         return false;
      }
   }

   return false;
};

// Do not edit below this line
module.exports = leapYears;
