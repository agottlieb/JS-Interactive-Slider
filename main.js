//Goals for JS to accomplish
//1. update pageviews and cost per month based on position in slider
//2. apply 25% discount to cost when mini-slider is activated

const slider = document.getElementById("slider");
const views = document.getElementById("pageviews");
const toggle = document.getElementById("toggle");
const cost = document.getElementById("month-cost");

//"input" as the first argument refers to listening for events related to HMTL elements
slider.addEventListener("input", (e) => {
  const max = 4;
  const targetValue = e.target.value;
  const targetPerc = (targetValue / max) * 100;

  //adjusts the amount of slider showing
  e.target.style.background = `linear-gradient(90deg, 
    var(--Soft-Cyan) ${targetPerc}%, 
    var(--Light-Grayish-Blue) ${targetPerc}%)`;

  updatePrice(targetValue);
  
  //specify false--no discount yet--for a starting condition
  toggle.checked = false;

})

function updatePrice (targetValue) {
  if (targetValue === "0") {
    views.innerHTML = `10K`
    cost.innerHTML = `$8`
  } else if (targetValue==="1") {
    views.innerHTML = `50K`
    cost.innerHTML = `$12`
  }else if (targetValue==="2") {
    views.innerHTML = `100K`
    cost.innerHTML = `$16`
  }else if (targetValue==="3") {
    views.innerHTML = `500K`
    cost.innerHTML = `$24`
  } else {
    views.innerHTML = `1M`
    cost.innerHTML = `$36`
  }
}

//adjusts for discount 
toggle.addEventListener("click", (e) => {
  if (slider.value === "0") {
    if (e.target.checked) {
      views.innerHTML = `10K`;
      bill.innerHTML = `$${8 * 0.75}.00`;
    }
  } else if (slider.value === "1") {
    if (e.target.checked) {
      views.innerHTML = `50K`;
      bill.innerHTML = `$${12 * 0.75}.00`;
    }
  } else if (slider.value === "2") {
    if (e.target.checked) {
      views.innerHTML = `100K`;
      bill.innerHTML = `$${16 * 0.75}.00`;
    }
  } else if (slider.value === "3") {
    if (e.target.checked) {
      views.innerHTML = `500K`;
      bill.innerHTML = `$${24 * 0.75}.00`;
    }
  } else if (slider.value === "4") {
    if (e.target.checked) {
      views.innerHTML = `1M`;
      bill.innerHTML = `$${36 * 0.75}.00`;
    }
  }
});
