// todo starting my project of pin matcher day 01:

//todo creating random pin genaretor
const randomDisplay = document.querySelector("#random-pin-display");
const randomButton = document.querySelector("#random-pin-btn");

randomButton.addEventListener("click", (e) => {
  let randomNumbers = "";
  for (i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 10);

    randomNumbers += randomNumber;
  }
  randomDisplay.value = randomNumbers;
});
