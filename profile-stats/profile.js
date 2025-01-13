const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl=>{

  counterEl.innerText = '0';

  updateNumber();


function updateNumber(){
let currentNum = +counterEl.innerText;
const dataCeil = counterEl.getAttribute("data-ceil"); 

const increment = dataCeil /15;
currentNum = Math.ceil(currentNum + increment);


if(currentNum < dataCeil){

counterEl.innerText = currentNum;
  setTimeout(updateNumber,70);
}
else{

  counterEl.innerText = dataCeil;
}



}

})


