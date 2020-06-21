const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(20,20,350,300);
ctx.fillStyle = 'green';
ctx.fillRect(10,10,300,250);
ctx.fillStyle = 'blue';
ctx.fillRect('5,5,100,100');