const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(20,20,350,300);
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,300,250);
// ctx.fillStyle = 'blue';
// ctx.fillRect('5,5,100,100');

   ctx.fillStyle='rgb(0,0,255)'; //Sets the color used for filling an area 
   ctx.fillRect(0,0,400,400);   //Fills a rectangle positioned at x and y, with a width and height of w and h.
   ctx.fillStyle='rgb(255,0,0)';  
   ctx.fillRect(50,50,300,300);    
   ctx.fillStyle='rgb(0,255,0)';  
   ctx.fillRect(100,100,200,200);
   ctx.fillStyle='rgb(100,100,100)';  
   ctx.fillRect(125,175,150,25);