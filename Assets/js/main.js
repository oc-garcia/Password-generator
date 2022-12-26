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

  for (let i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray[i].checked) {
      if (i == 0) {
        bar1.className = "strenght-bar-active";
        bar2.className = "strenght-bar";
        bar3.className = "strenght-bar";
        bar4.className = "strenght-bar";
        indicator.innerHTML = "VERY WEAK";
      } else if (i == 1) {
        bar1.className = "strenght-bar-active";
        bar2.className = "strenght-bar-active";
        bar3.className = "strenght-bar";
        bar4.className = "strenght-bar";
        indicator.innerHTML = "WEAK";
      } else if (i == 2) {
        bar1.className = "strenght-bar-active";
        bar2.className = "strenght-bar-active";
        bar3.className = "strenght-bar-active";
        bar4.className = "strenght-bar";
        indicator.innerHTML = "MEDIUM";
      } else if (i == 3) {
        bar1.className = "strenght-bar-active";
        bar2.className = "strenght-bar-active";
        bar3.className = "strenght-bar-active";
        bar4.className = "strenght-bar-active";
        indicator.innerHTML = "STRONG";
      } else if (checkboxArray[i] != checked) {
        bar1.className = "strenght-bar";
        bar2.className = "strenght-bar";
        bar3.className = "strenght-bar";
        bar4.className = "strenght-bar";
        indicator.innerHTML = "";
      }
    }
  }
  /*
  uppercase.checked = false;
  lowercase.checked = false;
  numbers.checked = false;
  symbols.checked = false;
  */

  console.log("teste");
}
