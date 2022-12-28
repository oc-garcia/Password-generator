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

function returnSelected(prmt) {
  return prmt.checked;
}

let submit = document.getElementById("submit");
submit.addEventListener("click", shuffleElementes);

function shuffleElementes() {
  let passwordField = document.getElementById("key");

  let password = "";

  let counter = 0;

  if (
    uppercase.checked == false &&
    lowercase.checked == false &&
    numbers.checked == false &&
    symbols.checked == false
  ) {
    alert("Select at least one criteria");
  } else {
    while (counter < slider.value) {
      if (returnSelected(uppercase)) {
        password += uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
      }
      if (returnSelected(lowercase)) {
        password += lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
      }
      if (returnSelected(numbers)) {
        password += numbersArray[Math.floor(Math.random() * numbersArray.length)];
      }
      if (returnSelected(symbols)) {
        password += symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
      }
      counter++;
    }
  }
  passwordField.innerHTML = password.substring(0, slider.value);
}

function copyText(htmlElement) {
  if (htmlElement.innerHTML == "Password") {
    return;
  }

  let elementText = htmlElement.innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  document.body.removeChild(inputElement);
  alert("Passwords copied successfully!");
}

document.querySelector("#copy-btn").onclick = function () {
  copyText(document.querySelector("#key"));
};
