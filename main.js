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
  if (operator === document.querySelector('#add')) {
    return add(number1, number2);
  } else if (operator === document.querySelector('#subtract')) {
    return subtract(number1, number2);
  } else if (operator === document.querySelector('#multiply')) {
     return multiply(number1, number2);
  } else if (operator === document.querySelector('#divide')) {
    return divide(number1, number2);
  }
}

/* Operate Function - END */

/* Display Functionality - START */

const screen = document.querySelector('#screen');

let btns = document.querySelectorAll('button');

let userChoice = 0;

let screenDisplay = btns.forEach(btn => {
  btn.addEventListener('click', (ev) => {
    userChoice = ev.target.textContent;
    let para = document.createElement('p');
    para.textContent = userChoice;
    screen.appendChild(para);
    console.log(userChoice);
  });
});

// function button(ev) {
//   let id = ev.currentTarget.getAttribute('id');
//   let val = ev.currentTarget.value;
//   let btn = document.querySelector('id');
//   let para = document.createElement('p');
//   para.textContent = this.textContent;
//   if (id === 'add') {
//     return false;
//   } else if (id === 'subtract') {
//     return false;
//   } else if (id === 'multiply') {
//     return false;
//   } else if (id === 'decimal') {
//     return false
//   } else if (id === 'sum') {
//     return false;
//   } else if (id === 'divide') {
//     return false;
//   } else if (id === 'percent') {
//     return false;
//   } else if (id === 'positive') {
//     return false;
//   } else if (id === 'clear') {
//     return false;
//   }
//   screen.appendChild(para);
// }


/* Display Functionality - END */

/* Functional Calculator - START */

let total = document.querySelector('#sum');
let result = total.addEventListener('click', () => {
  operate();
});

function calculate() {
  
}