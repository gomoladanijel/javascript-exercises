const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArr) {
	return numArr.reduce((total, current) => total + current, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((total, current) => total * current, 1);
};

const power = function(n, e) {
	return n ** e;
};

const factorial = function(n) {
  let fact = 1;

	if (n === 0 || n === 1) {
    fact;
  } else {
    for (let i = n; i >= 1; i--) {
      fact *= i;
    }
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
