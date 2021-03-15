//Goals for JS to accomplish
//1. update pageviews and cost per month based on position in slider
//2. apply 25% discount to cost when mini-slider is activated

const slider = document.getElementById("myRange");
const pageviews = document.getElementById("pviews");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
  }