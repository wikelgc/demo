/**
 * Created by admin on 2016/3/10.
 */
(function(global,factory){
    factory(global);
}(window,function(global){

    var snake=function(id){
        this.content = document.getElementById(id);
        this.data = [];//棋盘
        this.snakeArr = [];//蛇
        this.dirctor = "right";
        this.score = 0;
        this.timer= "";//定时器

        //游戏容器面积
        this.colLength=20;
        this.rowLength=20;
    };

    //游戏初始化
    snake.prototype.init=function(){
        //获取snake对象
        var that = this;

        this.content.setAttribute("class","snake");

        for(var i=0;i<this.colLength;i++){
            var row = [];
            for(var j=0;j<this.rowLength;j++){
                row[j]=document.createElement("div");
                this.content.appendChild(row[j]);
            }
            this.data[i]=row;
        }

        //初始化蛇
        this.createSnake();
        this.show();
        this.showScore();

        //事件回调，this事件调用本身
        document.onkeydown=function(event){
            //console.log(event.keyCode);
            if(event.keyCode==83&&that.dirctor!="up"){
                that.dirctor="down";
            }else if(event.keyCode==65&&that.dirctor!="right"){
                that.dirctor="left";
            }else if(event.keyCode==68&&that.dirctor!="left"){
                that.dirctor="right";
            }
            else if(event.keyCode==87&&that.dirctor!="down"){
                that.dirctor="up";
            }
        }

    };

    //游戏显示
    snake.prototype.show=function(){
        var that = this;
        //先显示
        for(var i=0;i<that.snakeArr.length;i++){
            that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","show");
        }
        //创建食物
        that.createFood();
        //运行游戏
        //that.run();
    };

    //游戏运行
    snake.prototype.run=function(){
        var that=this;
        that.timer=setInterval(function(){
            //获取蛇头的位置
            var temp;
            if(that.dirctor=="right"){
                temp={"row":that.snakeArr[0].row,"col":that.snakeArr[0].col+1};
            }else if(that.dirctor=="left"){
                temp={"row":that.snakeArr[0].row,"col":that.snakeArr[0].col-1};
            }else if(that.dirctor=="up"){
                temp={"row":that.snakeArr[0].row-1,"col":that.snakeArr[0].col};
            }else if(that.dirctor=="down"){
                temp={"row":that.snakeArr[0].row+1,"col":that.snakeArr[0].col};
            };

            //超出棋盘或者碰到自己 游戏结束
            if((temp.row<0||temp.row>that.rowLength-1||temp.col<0||temp.col>that.colLength-1)||(that.data[temp.row][temp.col].getAttribute("class")=="show")){
                that.gameOver();
                return;
            };
            //清掉蛇的位置
            for(var i=0;i<that.snakeArr.length;i++){
                that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","");
            };
            //判断下一步是否是食物
            if(that.data[temp.row][temp.col].getAttribute("class")=="food"){
                //添加分数
                that.showScore();
                that.snakeArr.push(temp);
                that.data[temp.row][temp.col].setAttribute("class","");
                that.createFood();
            };
            //移动蛇
            for(var i=that.snakeArr.length-1;i>0;i--){
                that.snakeArr[i]=that.snakeArr[i-1];
            }
            //设置蛇头
            that.snakeArr[0]=temp;
            //重现蛇的位置
            for(var i=0;i<that.snakeArr.length;i++){
                that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","show");
            }
        },200);
    };

    //游戏暂停
    snake.prototype.stop=function(){
        clearInterval(this.timer);
    };

    //游戏结束
    snake.prototype.gameOver=function(){
        //停止游戏
        this.stop();
        this.content.innerHTML="";
        this.init();
        alert("comeover");
    };

    //初始化食物
    snake.prototype.createFood=function(){

        //判别食物出现在蛇内部的情况
        do{
            var row = Math.floor(Math.random()*this.rowLength);
            var col = Math.floor(Math.random()*this.colLength);

        }while(this.data[row][col].getAttribute("class"));

        this.data[row][col].setAttribute("class","food");
    };

    //初始化蛇
    snake.prototype.createSnake=function(){

        var row = Math.floor(Math.random()*(this.rowLength-6))+3;
        var col = Math.floor(Math.random()*(this.colLength-6))+3;
        for(var i=0;i<3;i++){
            this.snakeArr[i]={"row":row,"col":col-i};
        }
    };

    //显示分数
    snake.prototype.showScore=function(){
        var score = document.getElementById("score");
        score.innerText=this.score++;

    };

    //开始
    window.Snake=snake;
}));