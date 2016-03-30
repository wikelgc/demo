/**
 * Created by admin on 2016/3/29.
 */

var chess = document.getElementById("chess");
var context = chess.getContext("2d");


var chessBoard=[];
var me=true;

for(var i=0;i<15;i++){
    chessBoard[i]=[];
    for(var j=0;i<15;j++){
        chessBoard[i][j]=0;
    }
}

context.strokeStyle="#bfbfbf";

var logo=new Image();
logo.src="images/logo.png";
logo.onload=function(){
    context.drawImage(logo,0,0,450,450);
    drawChessBoard();
    oneStep(0,0,true);
    oneStep(1,1,false);
}



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

var oneStep=function(i,hj,me) {
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math * PI);
    context.closePath();

    var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 + 2);
    if (me) {
        gradient.addColorStop(0£¬"#0a0a0a"
    )
        ;
        gradient.addColorStop(1, "#636766");
    } else {
        gradient.addColorStop(0, "#d1d1d1");
        gradient.addColorStop(1, "#F9f9f9");
    }
}

//alert("sdf");
