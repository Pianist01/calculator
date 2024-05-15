/* Add Function - START */

function add(number1, number2) {
  return number1 + number2;
}

/* Add Function - END */

/* Subtract Function - START */

function subtract(number1, number2) {
  return number1 - number2;
}

/* Subtract Function - END */

/* Multiply Function - START */

function multiply(number1, number2) {
  return number1 * number2;
}

/* Muliply Function - END */

/* Divide Function - START */

function divide(number1, number2) {
  return number1 / number2;
}

/* Divide Function - END */

/* Variables - START */

let number1 = 0;

let number2 = 0;

let operator = '';

/* Variables - END */

/* Operate Function - START */

function operate(number1, number2, operator) {
  if (operator === 'add') {
    return add(number1, number2);
  } else if (operator === 'subtract') {
    return subtract(number1, number2);
  } else if (operator === 'multiply') {
     return multiply(number1, number2);
  } else if (operator === 'divide') {
    return divide(number1, number2);
  }
}

/* Operate Function - END */

