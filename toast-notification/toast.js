let toastBox = document.getElementById("toastBox");
let successMessage = '<i class="fa-solid fa-circle-check"></i>Sucessfully submitted';

let errorMessage = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';

let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i>invalid input, check again';


function showToast(message){

  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = message; 

  toastBox.appendChild(toast);

  if(message.includes('error')){

    toast.classList.add("error");//to change icon color we chack if the text is present in the message , ex if error there icon should be red using class error
  }
  if(message.includes('invalid')){

    toast.classList.add("invalid");
  }


  setTimeout(()=>{
    toast.remove();
  },3000);  //to remmove the toast element after a set period


}