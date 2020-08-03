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
  document.querySelector("#try-left").textContent = "3 try left";
  document.querySelector("#submit").removeAttribute("disabled", "");
  calculator_div.dataset.tryLeftNum = 0;
  document.querySelector(".cross").style.display = "none"
  document.querySelector(".ok").style.display = 'none';
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
      calculatorDisplay_input.value = "";
    }
  }
});

//* task 03. matching

const submitbtn_button = document.querySelector("#submit");
calculator_div.dataset.tryLeftNum = "0"
submitbtn_button.addEventListener("click", (e) => {
  const randomValue = randomDisplay_input.value;
  const calculatorValue = calculatorDisplay_input.value;

  if (randomValue === calculatorValue && randomValue !== "") {
    document.querySelector(".ok").style.display = 'block';
    document.querySelector(".cross").style.display = "none";

    document.querySelector("#random-pin-display").value = "";
    document.querySelector("#calculator-display").value = "";

  } else {
    document.querySelector(".cross").style.display = "block"
    document.querySelector(".ok").style.display = 'none';

    document.querySelector("#calculator-display").value = "";

    const tryLeft = calculator_div.dataset.tryLeftNum;
    let tryLeftNum = parseInt(tryLeft);
    tryLeftNum += 1;
    console.log(tryLeftNum)
    calculator_div.dataset.tryLeftNum = tryLeftNum;
    const tryLeftDisplay = document.querySelector("#try-left");
    const submitBtn = document.querySelector("#submit");
    switch (tryLeftNum) {
      case 1:
        tryLeftDisplay.textContent = "2 try left";
        break;
      case 2:
        tryLeftDisplay.textContent = "1 try left";
        break;
      case 3:
        tryLeftDisplay.textContent = "0 try left"
        document.querySelector("#submit").setAttribute("disabled", "");
        document.querySelector("#random-pin-display").value = "";
        break;
    }
  }
});