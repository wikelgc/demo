/**
 * Created by admin on 2016/3/29.
 */


//获取棋盘id
var chess = document.getElementById("chess");
var context = chess.getContext("2d");

//设置棋盘的颜色
context.strokeStyle="#bfbfbf";

var chessBoard=[];
var me = true;

var white= 0,black=0;

//设置棋盘内的元素  0 - 无棋子 1 -白棋 2-黑棋
var initChess = function(){
    for(var i=0;i<15;i++){
        chessBoard[i]=[];
        for(var j=0;j<15;j++){
            chessBoard[i][j]=0;
        }
    }
}


//初始棋盘
var drawChessBoard = function(){

    //画棋盘
    for(var i=0;i<15;i++){
        context.moveTo(15+i*30,15);
        context.lineTo(15+i*30,435);
        context.stroke();
        context.moveTo(15,15+i*30);
        context.lineTo(435,15+i*30);
        context.stroke();
    }

    //初始化棋子
    initChess();

    white= 0,black=0;
};

//var cleanChessBoard = function(){
//    context.fillStyle="#FFF";
//    context.fillRect(0,0,450,450);
//
//}

//落子 参数 x轴 y轴 白/黑棋
var oneStep=function(i,j,me) {
    context.beginPath();
    //画棋子
    context.arc(15+i*30, 15+j*30, 13, 0, 2*Math.PI);
    context.closePath();

    var gradient = context.createRadialGradient(15+i*30+2, 15+j*30-2,13,15+i*30+2, 15+j*30-2,20);

    //棋子填充颜色
    if (me) {
        gradient.addColorStop(0, "#d1d1d1");  //白色
        gradient.addColorStop(1, "#F9f9f9");
        white++;
    } else {
        gradient.addColorStop(0, "#0a0a0a");
        gradient.addColorStop(1, "#636766");
        black++;
    }

    context.fillStyle = gradient;
    context.fill();
};







window.onload=function(){
    //context.drawImage(logo,0,0,450,450);
    drawChessBoard();

    //oneStep(0,0,true);
    //oneStep(1,1,false);

    document.getElementById("begin").onclick=function(){
        if(this.value == "开始游戏") {
            this.value="暂停";
            //context.clearRect(0, 0, 450, 450);

            drawChessBoard();

            ////随机落子
            //context.beginPath();
            //context.arc(317,313,13,0,2*Math.PI);
            //context.closePath();
            //
            ////颜色
            //var gradient = context.createRadialGradient(317,313,13,317,313,20);
            //gradient.addColorStop(0,"#0a0a0a");
            //gradient.addColorStop(1,"#636766");
            //
            ////填充颜色
            //context.fillStyle=gradient;
            //context.fill();

            chess.onclick = function (e) {

                //获取点击事件
                var x = e.offsetX;
                var y = e.offsetY;
                var i = Math.floor(x / 30);
                var j = Math.floor(y / 30);

                if (chessBoard[i][j] == 0) {
                    oneStep(i, j, me);
                    if (me) {
                        chessBoard[i][j] = 1;
                    } else {
                        chessBoard[i][j] = 2;
                    }
                    me = !me;
                }

                document.getElementById("whiteChessCount").innerText = white;
                document.getElementById("blackChessCount").innerText = black;


            };
        }else{
            this.value="开始游戏";
        }


    }

};
