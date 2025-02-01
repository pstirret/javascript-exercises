const removeFromArray = function(inArray, ...varsToRemove) {
   /**
    * IF first input is not an array
    *    Return error message
    * 
    * Create the output array
    * 
    * FOR each element in the input array
    *    Check to see if it equals one of the items to remove
    *    IF it is not one of the elements to remove
    *       copy element to output array
    * 
    * Return output array
    */

   if (!Array.isArray(inArray)) {
      console.log("The first input to 'removeFromArray' must be an array.")
      return;
   }

   let retArray = [];
   let retArrayIdx = 0;
   let isCopyElement = true;

   for (let i=0; i<inArray.length; i++) {
      for (let item of varsToRemove) {
         if (item === inArray[i]) {
            isCopyElement = false;
            break;
         }
      }
      if (isCopyElement) {
         retArray[retArrayIdx] = inArray[i];
         retArrayIdx++;
      }
      else {
         isCopyElement = true;
      }
   }

   return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
