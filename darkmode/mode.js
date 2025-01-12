const inputEl = document.querySelector('.input');


const bodyEl = document.querySelector('body');


inputEl.checked = JSON.parse(localStorage.getItem("mode"));
//checking if the item is checked or not or getting it from local storage

updateBody();


function updateBody(){
  if(inputEl.checked){
    bodyEl.style.background = "black";
  }
  else{{
    bodyEl.style.background = "white";
  }}
}


inputEl.addEventListener('input',()=>{
  updateBody();
  updateLocalStorage();
})


function updateLocalStorage(){

  localStorage.setItem("mode",JSON.stringify(inputEl.checked)); //the condition at which the toggle is in is saved in local storage
}