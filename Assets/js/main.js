var slider = document.getElementById("lenght");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = slider.value;
};
