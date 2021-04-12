//Goals for JS 
//1. update pageviews and cost per month based on position in slider
//2. apply 25% discount to cost when mini-slider is activated

const slider = document.getElementById("slider");
const views = document.getElementById("pageviews");
const toggle = document.getElementById("toggle");
const cost = document.getElementById("month-cost");

//"input" as the first argument refers to listening for events related to HMTL elements (i.e. the slider)
slider.addEventListener("input", (e) => {
  const max = 4;
  const targetValue = e.target.value;
  const targetPerc = (targetValue / max) * 100;

  //adjusts the amount of slider showing
  e.target.style.background = `linear-gradient(90deg, 
    var(--Soft-Cyan) ${targetPerc}%, 
    var(--Light-Grayish-Blue) ${targetPerc}%)`;

  updatePrice(targetValue);

})

function updatePrice (targetValue) {
  if (targetValue === "0") {
    views.innerHTML = `10K`
    cost.innerHTML = `$8.00`
  } else if (targetValue==="1") {
    views.innerHTML = `50K`
    cost.innerHTML = `$12.00`
  }else if (targetValue==="2") {
    views.innerHTML = `100K`
    cost.innerHTML = `$16.00`
  }else if (targetValue==="3") {
    views.innerHTML = `500K`
    cost.innerHTML = `$24.00`
  } else {
    views.innerHTML = `1M`
    cost.innerHTML = `$36.00`
  }
}

//adjusts for discount
toggle.addEventListener("click", discountPrice) 

function discountPrice (value) {
  if (value=="1") {
    cost.innerHTML =.75*cost}
  else {
    cost.innerHTML=cost.innerHTML
  }
} 





