const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerHeight;
canvas.setAttribute("width", w)
canvas.setAttribute("height", h)
import Rect from "./Rect.js"

let rect = new Rect(100,100,100,100)
let max = new Rect(0,0,w,h)

let target = max;
const update = () => {
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
  ctx.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

  rect.easeTo(target, 0.1);
  rect.draw(ctx)
  ctx.fill();

  requestAnimationFrame(update)
}

update();


let bDown = false;
window.addEventListener( "mousedown", () => bDown = true );
window.addEventListener( "mouseup", () => bDown = false );
let down 

window.addEventListener( "mousedown", (e) => {
  const {clientX:x , clientY: y} = e
  down = {x,y}
})
window.addEventListener("mousemove", e => {
  if(!bDown) return;
  const {clientX:x , clientY: y} = e
  target = new Rect(down.x, down.y, x - down.x, y- down.y)
})

window.addEventListener( "mouseup", (e) => {
  const {clientX:x , clientY: y} = e
  target.standardize();
  rect.standardize();
} )
