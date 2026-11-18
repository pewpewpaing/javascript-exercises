const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
