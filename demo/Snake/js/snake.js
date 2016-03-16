/**
 * Created by admin on 2016/3/10.
 */
(function(global,factory){
    factory(global);
}(window,function(global){

    var snake=function(id){
        this.content = document.getElementById(id);
        this.data = [];//����
        this.snakeArr = [];//��
        this.dirctor = "right";
        this.score = 0;
        this.timer= "";//��ʱ��

        //��Ϸ�������
        this.colLength=20;
        this.rowLength=20;
    };

    //��Ϸ��ʼ��
    snake.prototype.init=function(){
        //��ȡsnake����
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

        //��ʼ����
        this.createSnake();
        this.show();
        this.showScore();

        //�¼��ص���this�¼����ñ���
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

    //��Ϸ��ʾ
    snake.prototype.show=function(){
        var that = this;
        //����ʾ
        for(var i=0;i<that.snakeArr.length;i++){
            that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","show");
        }
        //����ʳ��
        that.createFood();
        //������Ϸ
        //that.run();
    };

    //��Ϸ����
    snake.prototype.run=function(){
        var that=this;
        that.timer=setInterval(function(){
            //��ȡ��ͷ��λ��
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

            //�������̻��������Լ� ��Ϸ����
            if((temp.row<0||temp.row>that.rowLength-1||temp.col<0||temp.col>that.colLength-1)||(that.data[temp.row][temp.col].getAttribute("class")=="show")){
                that.gameOver();
                return;
            };
            //����ߵ�λ��
            for(var i=0;i<that.snakeArr.length;i++){
                that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","");
            };
            //�ж���һ���Ƿ���ʳ��
            if(that.data[temp.row][temp.col].getAttribute("class")=="food"){
                //��ӷ���
                that.showScore();
                that.snakeArr.push(temp);
                that.data[temp.row][temp.col].setAttribute("class","");
                that.createFood();
            };
            //�ƶ���
            for(var i=that.snakeArr.length-1;i>0;i--){
                that.snakeArr[i]=that.snakeArr[i-1];
            }
            //������ͷ
            that.snakeArr[0]=temp;
            //�����ߵ�λ��
            for(var i=0;i<that.snakeArr.length;i++){
                that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","show");
            }
        },200);
    };

    //��Ϸ��ͣ
    snake.prototype.stop=function(){
        clearInterval(this.timer);
    };

    //��Ϸ����
    snake.prototype.gameOver=function(){
        //ֹͣ��Ϸ
        this.stop();
        this.content.innerHTML="";
        this.init();
        alert("comeover");
    };

    //��ʼ��ʳ��
    snake.prototype.createFood=function(){

        //�б�ʳ����������ڲ������
        do{
            var row = Math.floor(Math.random()*this.rowLength);
            var col = Math.floor(Math.random()*this.colLength);

        }while(this.data[row][col].getAttribute("class"));

        this.data[row][col].setAttribute("class","food");
    };

    //��ʼ����
    snake.prototype.createSnake=function(){

        var row = Math.floor(Math.random()*(this.rowLength-6))+3;
        var col = Math.floor(Math.random()*(this.colLength-6))+3;
        for(var i=0;i<3;i++){
            this.snakeArr[i]={"row":row,"col":col-i};
        }
    };

    //��ʾ����
    snake.prototype.showScore=function(){
        var score = document.getElementById("score");
        score.innerText=this.score++;

    };

    //��ʼ
    window.Snake=snake;
}));