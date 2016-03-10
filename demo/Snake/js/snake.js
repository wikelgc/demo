/**
 * Created by admin on 2016/3/10.
 */
(function(global,factory){
    factory(global);
}(window,function(global){
    var snake=function(id){
        this.content = document.getElementById(id);
        this.data = [];//∆Â≈Ã
        this.snake = [];//…ﬂ

        this.content.setAttribute("class","snake");

        for(var i=0;i<50;i++){
            var row = [];
            for(var j=0;j<30;j++){
                row[j]=document.createElement("div");
                this.content.appendChild(row[j]);
            }
            this.data[i] = row;
        }


        //≥ı ºªØ…ﬂ
    };
    window.Snake=snake;
}));