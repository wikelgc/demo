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

        this.colLength=20;
        this.rowLength=20;

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
        this.snakeArr[0]={"row":2,"col":2};
        this.snakeArr[1]={"row":2,"col":1};
        this.snakeArr[2]={"row":2,"col":0};

        this.show();
        //that.createFood();

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

    snake.prototype.show=function(){
        var that = this;

        //先显示
        for(var i=0;i<that.snakeArr.length;i++){
            that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","show");
        }

        that.createFood();
        setInterval(function(){

            //清掉蛇的位置
            for(var i=0;i<that.snakeArr.length;i++){
                that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","");
            };

            //获取蛇头的位置
            var temp;

            if(that.dirctor=="right"){
                temp={"row":that.snakeArr[0].row,"col":that.snakeArr[0].col+1};
            }else if(that.dirctor=="left"){
                temp={"row":that.snakeArr[0].row,"col":that.snakeArr[0].col-1};
                //console.log("left");
            }else if(that.dirctor=="up"){
                temp={"row":that.snakeArr[0].row-1,"col":that.snakeArr[0].col};
                //console.log("up");
            }else if(that.dirctor=="down"){
                temp={"row":that.snakeArr[0].row+1,"col":that.snakeArr[0].col};
                //console.log("down");
            }

            //判断下一步是否是食物
            if(that.data[temp.row][temp.col].getAttribute("class")=="food"){
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
        },800);

    };

    snake.prototype.createFood=function(){

        //判别食物出现在蛇内部的情况
        do{
            var row = Math.floor(Math.random()*this.rowLength);
            var col = Math.floor(Math.random()*this.colLength);

        }while(this.data[row][col].getAttribute("class"));

        this.data[row][col].setAttribute("class","food");
    }
    window.Snake=snake;
}));