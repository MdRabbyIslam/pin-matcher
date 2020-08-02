// todo starting my project of pin matcher day 01:

//todo 01. creating random pin genaretor
const randomDisplay_input = document.querySelector("#random-pin-display");
const randomButton_button = document.querySelector("#random-pin-btn");

randomButton_button.addEventListener("click", (e) => {
  let randomNumbers = "";
  for (i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    randomNumbers += randomNumber;
  }
  randomDisplay_input.value = randomNumbers;
});

//todo 02. creating calculator
const calculator_div = document.querySelector("#calculator");
const calculatorDisplay_input = document.querySelector("#calculator-display");

calculator_div.addEventListener("click", (e) => {
  const key_div = e.target;
  const keys = key_div.matches("div[class]");
  if (keys) {
    const action = key_div.dataset.action;
    const displayedNumber = key_div.textContent;
    //* for number key
    if (!action) {
      calculatorDisplay_input.value += displayedNumber;
    }
    //* for backspace key
    if (action === "clear") {
      const value = calculatorDisplay_input.value;
      calculatorDisplay_input.value = value.slice(0, value.length - 1);
    }
    //* for clear all key
    if (action === "clearAll") {
      console.log("clear-All clicked");
      calculatorDisplay_input.value = "";
    }
  }
});
