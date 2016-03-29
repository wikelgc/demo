/**
 * Created by admin on 2016/3/29.
 */

var chess = document.getElementById("chess");
var context = chess.getContext("2d");

context.strokeStyle="#bfbfbf";

for(var i=0;i<25;i++){
    context.moveTo(15+i*30,15);
    context.lineTo(15+i*30,435);
    context.stroke();
    context.moveTo(15,15+i*30);
    context.lineTo(435,15+i*30);
    context.stroke();
}

context.beginPath();
context.arc(200,200,100,0,2*Math.PI);
context.closePath();

var gradient = context.createRadialGradient(200,200,50,200,200,20);
gradient.addColorStop(0,"#0a0a0a");
gradient.addColorStop(1,"#636766");

context.fillStyle=gradient;
context.fill();

//alert("sdf");
