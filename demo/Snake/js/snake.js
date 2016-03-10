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

        this.colLength=20;
        this.rowLength=20;

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
        this.snakeArr[0]={"row":2,"col":2};
        this.snakeArr[1]={"row":2,"col":1};
        this.snakeArr[2]={"row":2,"col":0};

        this.show();
        //that.createFood();

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

    snake.prototype.show=function(){
        var that = this;

        //����ʾ
        for(var i=0;i<that.snakeArr.length;i++){
            that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","show");
        }

        that.createFood();
        setInterval(function(){

            //����ߵ�λ��
            for(var i=0;i<that.snakeArr.length;i++){
                that.data[that.snakeArr[i].row][that.snakeArr[i].col].setAttribute("class","");
            };

            //��ȡ��ͷ��λ��
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

            //�ж���һ���Ƿ���ʳ��
            if(that.data[temp.row][temp.col].getAttribute("class")=="food"){
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
        },800);

    };

    snake.prototype.createFood=function(){

        //�б�ʳ����������ڲ������
        do{
            var row = Math.floor(Math.random()*this.rowLength);
            var col = Math.floor(Math.random()*this.colLength);

        }while(this.data[row][col].getAttribute("class"));

        this.data[row][col].setAttribute("class","food");
    }
    window.Snake=snake;
}));