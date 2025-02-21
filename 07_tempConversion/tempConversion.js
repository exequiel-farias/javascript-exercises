const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  if (Number.isInteger(celsius)) {
    return celsius;
  }else return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp * 9 / 5 + 32;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  }else return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
