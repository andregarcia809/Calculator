let calInputEl = document.querySelector('.calculator__input__area');
// Calculator Operatoration Buttons
let clearBtn = document.querySelector('.Calculator__all__clear__key');
let clearOneBtn = document.querySelector('.Calculator__clear__entry__key');
let plusNegativeBtn = document.querySelector('.Calculator__plus__negative__key');
let percentageBtn = document.querySelector('.Calculator__percentage__key');
let divideBtn = document.querySelector('.Calculator__divide__key');
let multiplyBtn = document.querySelector('.Calculator__multiply__key');
let subtractBtn = document.querySelector('.Calculator__minus__key');
let decimalBtn = document.querySelector('.Calculator__decimal__point__key');
let addBtn = document.querySelector('.Calculator__addition__key');
let equalsBtn = document.querySelector('.Calculator__equals__key');

// Calculator 0-9 Buttons
let zeroBtn = document.querySelector('.Calculator__0__key');
let oneBtn = document.querySelector('.Calculator__1__key');
let twoBtn = document.querySelector('.Calculator__2__key');
let threeBtn = document.querySelector('.Calculator__3__key');
let fourBtn = document.querySelector('.Calculator__4__key');
let fiveBtn = document.querySelector('.Calculator__5__key');
let sixBtn = document.querySelector('.Calculator__6__key');
let sevenBtn = document.querySelector('.Calculator__7__key');
let eightBrn = document.querySelector('.Calculator__8__key');
let nineBtn = document.querySelector('.Calculator__9__key');


// /* Homework!! */  Why window.onload gives me an error?
// Updates the numbers key  pressed  in to inputField setup
let inputField = '0';
let pendingVal;
let evalStringArray = [];

let calcNumBtns = document.querySelectorAll('.calc__btn__num');
let calcOperatorBtns = document.querySelectorAll('.calc__operator__btn')

let updateInputField = clickObj => {
  let btnClickedVal = clickObj.target.innerText;

  if (inputField === '0') {
    inputField = '';
  }
  inputField += btnClickedVal;
  calInputEl.innerText= inputField;
}

let performOperation = clickObj => {
  let operator = clickObj.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = inputField;
      inputField = '0';
      calInputEl.innerText= inputField;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;

    case '−':
      pendingVal = inputField;
      inputField = '0';
      calInputEl.innerText= inputField;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;

    case '×':
      pendingVal = inputField;
      inputField = '0';
      calInputEl.innerText= inputField;
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break;

    case '÷':
      pendingVal = inputField;
      inputField = '0';
      calInputEl.innerText= inputField;
      evalStringArray.push(pendingVal);
      evalStringArray.push('/');
      break;

    case '=':
      evalStringArray.push(inputField);
      let results = eval(evalStringArray.join(''));
      inputField = results + '';
      calInputEl.innerText= inputField;
      break;
  }
}

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateInputField);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation);
}

// clears all everything from calculator and resets it to 0
clearBtn.onclick = () => {
  inputField = "0";
  evalStringArray = [];
  calInputEl.innerText= inputField;
}
clearOneBtn.onclick = () => {
  let lengthOfInputfield = inputField.length;
  inputField = inputField.slice(0, lengthOfInputfield - 1);
  calInputEl.innerText= inputField;

  if (inputField === '') {
    inputField = '0';
    calInputEl.innerText= inputField;
  }
}

plusNegativeBtn.onclick = () => {
  inputField = -inputField;
  return calInputEl.innerText= inputField;
};

percentageBtn.onclick = () => {
  let percent = inputField / 100;
  return calInputEl.innerText = percent;
}

decimalBtn.onclick = () => {
  if (!inputField.includes('.')) {
    inputField += '.';
    calInputEl.innerText= inputField;
  }
}