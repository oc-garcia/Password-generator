//Slider
var slider = document.getElementById("lenght");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = slider.value;
};

//Strenght bars
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let checkboxArray = [uppercase, lowercase, numbers, symbols];

for (i = 0; i < checkboxArray.length; i++) {
  checkboxArray[i].addEventListener("change", strenghtBar);
}

function strenghtBar() {
  let indicator = document.getElementById("strenght-indicator");
  let bar1 = document.getElementById("bar1");
  let bar2 = document.getElementById("bar2");
  let bar3 = document.getElementById("bar3");
  let bar4 = document.getElementById("bar4");

  let counter = 0;
  for (let i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray[i].checked) {
      counter++;
    }
    if (counter == 1) {
      bar1.className = "strenght-bar-active";
      bar2.className = "strenght-bar";
      bar3.className = "strenght-bar";
      bar4.className = "strenght-bar";
      indicator.innerHTML = "VERY WEAK";
    } else if (counter == 2) {
      bar1.className = "strenght-bar-active";
      bar2.className = "strenght-bar-active";
      bar3.className = "strenght-bar";
      bar4.className = "strenght-bar";
      indicator.innerHTML = "WEAK";
    } else if (counter == 3) {
      bar1.className = "strenght-bar-active";
      bar2.className = "strenght-bar-active";
      bar3.className = "strenght-bar-active";
      bar4.className = "strenght-bar";
      indicator.innerHTML = "MEDIUM";
    } else if (counter == 4) {
      bar1.className = "strenght-bar-active";
      bar2.className = "strenght-bar-active";
      bar3.className = "strenght-bar-active";
      bar4.className = "strenght-bar-active";
      indicator.innerHTML = "STRONG";
    } else if (counter == 0) {
      bar1.className = "strenght-bar";
      bar2.className = "strenght-bar";
      bar3.className = "strenght-bar";
      bar4.className = "strenght-bar";
      indicator.innerHTML = "";
    }
  }
}

let uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbolsArray = ["!", "#", "$", "%", "&", "*", "@"];

let submit = document.getElementById("submit");
submit.addEventListener("click", shuffleElementes);

function shuffleElementes() {
  const randomUppercase = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
  const randomLowercase = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
  const randomNumbers = parseFloat(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
  const randomSymbols = symbolsArray[Math.floor(Math.random() * symbolsArray.length)];

  let passwordField = document.getElementById("key");

  console.log(randomUppercase);
  console.log(randomLowercase);
  console.log(randomNumbers);
  console.log(randomSymbols);
}
