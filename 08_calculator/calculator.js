const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = (firstNum, secondNum) => {
   return firstNum - secondNum};

const sum = function(inArray) {
   arraySum = 0;
   inArray.forEach(element => {
      arraySum += element;
   });

   return arraySum;	
};

const multiply = function (numArray) {
   arrayProduct = numArray[0];
   numArray.slice(1).forEach (element => {
      arrayProduct = arrayProduct * element;
   });
   return arrayProduct;
};

const power = function (num, power) {
   // Check for something being raised to the 0 power
   if (power == 0) {
      return 1;
   } else if(power == 1) {
   // check for something being raised to the 1 power
      return num;
   }
   
   answer = num;
   for (let i = 1; i < power; i++) {
      answer = answer * num;
   }

   return answer;
};

const factorial = function(inNum) {
   // Base condition
   if (inNum == 0 || inNum == 1) {
      return 1;
   }

   return inNum * factorial(inNum - 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
