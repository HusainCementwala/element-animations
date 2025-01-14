const kits = ["crash","kick","snare","tom"];
const containerEl = document.querySelector(".container");


kits.forEach(kit=>{

const btnEl = document.createElement("button");
btnEl.classList.add("btn");
btnEl.innerText = kit;
btnEl.style.backgroundImage = "url(images/" + kit + ".png)";


containerEl.appendChild(btnEl); //creating buttons dynamically

const audioEl = document.createElement("audio");
audioEl.src = "sounds/" + kit + ".mp3";
containerEl.appendChild(audioEl);



btnEl.addEventListener("click",()=>{

audioEl.currentTime = 0; //immediately restarts audio when clicked
audioEl.play();  //playing the concerned audio
});

window.addEventListener("keydown",(event)=>{

if(event.key === kit.slice(0,1)){
  audioEl.currentTime = 0;
  audioEl.play();

  btnEl.style.transform = "scale(0.9)";


  setTimeout(()=>{

    btnEl.style.transform = "scale(1)";

  },100);
  //the button on being presed by key will shrink to 0.9x and tthen after a set timeout return to it original size 1x.
}

});

});