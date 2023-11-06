const add = function(num1, num2) {
	let product = num1 + num2;
  return product
};

const subtract = function(num1, num2) {
	let product = num1 - num2;
  return product
};

const sum = function(numbers) {
  let product = 0
  numbers.forEach(number => {product += number} );
  return product
};

const multiply = function(numbers) {
  let product = 1
  // let numbers = numbersArray.split (',')
  numbers.forEach(number => {product *= parseFloat(number)})
  return product
};

const power = function(num1, power) {
	let product = (num1 * (num1 * power + num1))
  return product
};

const factorial = function(num1) {
  let product = 1
	if (num1 === 0) {
    return 1
  }
  else {
    for (let i = num1; i > 0; i--) {
    product * i
    }
    return product
  }
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
