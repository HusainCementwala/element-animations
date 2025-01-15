const counterEl = document.querySelector(".counter");

const frontBar = document.querySelector(".loading-bar-front");

let index = 0 ;

updateNum();

function updateNum(){

  counterEl.innerText = index + "%";
frontBar.style.width = index + "%";
index++;
if(index <50){

  setTimeout(updateNum,70);

}

else if(index <85){

  setTimeout(updateNum,200);
}

else if(index < 99){

  setTimeout(updateNum,300);
}

else if(index < 101){

  setTimeout(updateNum,1200);
}
else{
  

  window.location.href = "nextpage.html";
}

//the else if staements are only yo create the illusion of real loading bars that slow down in progression

}