/* Variables - START */

let previousScreen = document.querySelector('#previousscreen');
let currentScreen = document.querySelector('#currentscreen');


let clear = document.querySelector('#clear');
let decimal = document.querySelector('#decimal');
let equal = document.querySelector('#equal');


let numbers = document.querySelectorAll('#number');
let operand = document.querySelectorAll('#operator');

let userSelection;
let opSelection;
let currentValue = '';
let previousValue = '';

/* Variables - END */

  numbers.forEach((number) => number.addEventListener('click', function(e) {
    numChoice(e.target.textContent);
    currentScreen.textContent = currentValue;
  }));

  operand.forEach((operator) => operator.addEventListener('click', function(e) {
    opChoice(e.target.textContent);
    previousScreen.textContent = previousValue + ' ' + operate;
    currentScreen.textContent = currentValue;
    
  }));

  clear.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operate = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });

  equal.addEventListener('click', () => {
    calculate();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
  });

  decimal.addEventListener('click', () => {
    addDecimal();
    currentScreen.textContent = currentValue;
  });

  function numChoice(num) {
    if (currentValue.length <= 5){
    currentValue += num;
    }
  }

  function opChoice(op) {
    operate = op;
    previousValue = currentValue;
    currentValue = '';
  }

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operate === '+') {
    previousValue += currentValue;
  } else if (operate === '-') {
    previousValue -= currentValue;
  } else if (operate === '*') {
    previousValue *= currentValue;
  } else if (operate === '/') {
    previousValue /= currentValue;
  }
}

function addDecimal() {
  if (!currentValue.includes('.')) {
    currentValue += '.';
  }
}