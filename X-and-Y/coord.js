/*const bodyEl = document.querySelector("body");
const xPixel = document.querySelector(".x-position");
const yPixel = document.querySelector(".y-position");

bodyEl.addEventListener("mousemove",(event)=>{


const xPos = event.offsetX;
const yPos = event.offsetY;

xPixel.innerText = xPos;
yPixel.innerText = yPos;



});*/


const containerEl = document.querySelector(".container");

window.addEventListener("mousemove",()=>{

  containerEl.innerHTML = `
  <div class="x-cor">
    <label>Mouse-X Position(px)</label>
    <h1 class="x-position">${event.clientX}</h1>
  </div>
  <div class="y-cor">
    <label>Mouse-Y Position(px)</label>
    <h1 class="y-position">${event.clientY}</h1>
  </div>`;
})

//this part generates its own html as soon as mouse moves on screen , the above commented out code needs an html base to call the listener