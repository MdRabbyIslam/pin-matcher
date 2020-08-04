const randomDisplay_input = document.querySelector("#random-pin-display");
const randomButton_button = document.querySelector("#random-pin-btn");
const calculator_div = document.querySelector("#calculator");
const calculatorDisplay_input = document.querySelector("#calculator-display");
const submitbtn_button = document.querySelector("#submit");

const randomNumberGenaretor = () => {
  let randomNumbers = "";
  for (i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    randomNumbers += randomNumber;
  }
  return randomNumbers;
}

const visualUpdate = (notifySign1, notifySign2, displayStyle) => {
  const sign1 = document.querySelector(notifySign1);
  const sign2 = document.querySelector(notifySign2);
  if (displayStyle === "none") {
    sign1.style.display = "none";
    sign2.style.display = "none";
  }
  if (displayStyle === "blockNone") {
    sign1.style.display = "block";
    sign2.style.display = "none"
  }
}

const tryLeftUpdate = () => {
  const tryLeft = calculator_div.dataset.tryLeftNum;
  let tryLeftNum = parseInt(tryLeft);
  tryLeftNum += 1;
  calculator_div.dataset.tryLeftNum = tryLeftNum;
  const tryLeftDisplay = document.querySelector("#try-left");
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
  }
}

randomButton_button.addEventListener("click", (e) => {
  randomDisplay_input.value = randomNumberGenaretor();
  visualUpdate(".ok", ".cross", "none");
  document.querySelector("#try-left").textContent = "3 try left";
  document.querySelector("#submit").removeAttribute("disabled", "");
  calculatorDisplay_input.value = "";
  calculator_div.dataset.tryLeftNum = 0;
});

calculator_div.addEventListener("click", (e) => {
  const key_div = e.target;
  const action = key_div.dataset.action;
  const displayedNumber = key_div.textContent;
  const calculatorValue = calculatorDisplay_input.value;
  if (!key_div.matches("div[class]")) return;
  if (!action) return calculatorDisplay_input.value += displayedNumber;
  if (action === "clear") return calculatorDisplay_input.value = calculatorValue.slice(0, calculatorValue.length - 1);
  if (action === "clearAll") return calculatorDisplay_input.value = "";
});

submitbtn_button.addEventListener("click", (e) => {
  const randomValue = randomDisplay_input.value;
  const calculatorValue = calculatorDisplay_input.value;
  if (randomValue === calculatorValue && randomValue !== "") {
    visualUpdate(".ok", ".cross", "blockNone");
    document.querySelector("#random-pin-display").value = "";
    document.querySelector("#calculator-display").value = "";
  } else {
    visualUpdate(".cross", ".ok", "blockNone");
    document.querySelector("#calculator-display").value = "";
    tryLeftUpdate()
  }
});