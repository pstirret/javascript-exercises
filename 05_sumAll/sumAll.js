const sumAll = function(startNum, stopNum) {
   /**
    * Check for negative numbers
    *    if found, return error
    * Check to see if start and stop are reveresed
    *    if so, switch them
    * Create output variable
    * Create iteration variable
    * Set iteration variable equal to start value
    * WHILE iteration variable is greater than or equal to start
    *    variable AND less than or equal to stop variable
    *    Accumilate iteration variable into output variable
    *    Increment iteration variable
    * 
    * RETURN output variable
    */
   
   if (isNaN(startNum) || isNaN(stopNum)) {
      return 'ERROR';
   }
   else if (startNum < 0 || stopNum < 0) {
      return 'ERROR';
   }
   else if (!Number.isInteger(startNum) || !Number.isInteger(stopNum)) {
      return 'ERROR';
   }

   if (startNum > stopNum) {
      let tmp = startNum;
      startNum = stopNum;
      stopNum = tmp;
   }

   let retVal = 0;
   let iterVar = startNum;

   while (iterVar >= startNum && iterVar <= stopNum) {
      retVal += iterVar;
      iterVar++;
   }

   return retVal;

};

// Do not edit below this line
module.exports = sumAll;
