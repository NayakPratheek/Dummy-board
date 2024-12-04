const canvas = document.getElementById('blackboard');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false; 
let brushColor = 'white'; 
let brushSize = 5; 


function startDrawing(event) {
  painting = true;
  draw(event); 
}


function stopDrawing() {
  painting = false;
  ctx.beginPath();
}


function draw(event) {
  if (!painting) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;

  
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
}


canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);


function changeColor(color) {
  brushColor = color;
}


function changeSize(size) {
  brushSize = size;
}


function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


window.addEventListener('resize', () => {
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');


  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  tempCtx.drawImage(canvas, 0, 0);
 
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(tempCanvas, 0, 0);
});
