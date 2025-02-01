const convertToCelsius = function(inFahr) {

   let celsius = (inFahr - 32.0) * 5.0 / 9.0;
   return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(inCels) {

   let fahr = (inCels * 9.0 / 5.0) + 32.0;
   return Number(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
