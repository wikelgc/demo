/**
 * Created by admin on 2016/3/12.
 */
//window.onload=function(){
//    //console.log("hello world"+time.name);
//    var name =document.getElementById("name");
//    var btn =document.getElementById("btn");
//    console.log(name.value);
//
//    name.innerText=time.week[1].course[1].subject;
//    //btn.onclick = function(){
//    //    console.log(name.value);
//    //    console.log(time.teacherName);
//    //    if(name.value==time.teacherName){
//    //        console.log("--myName is:"+time.teacherName)
//    //    }
//    //}
//    //if(time.teacherName===cli.value){
//    //    console.log("我是张三");
//    //}
//};

(function(global,factory){
    factory(global);
}(window,function(global){
    var table=function(id){
        this.table = document.getElementById(id);
        //console.log(this.table);
        this.show();
    };

    table.prototype.show=function(){
        var that = this;
        for(var i=1;i<=6;i++){
            for(var j=1;j<=7;j++){
                that.table.rows[i].cells[j].innerText=time.week[j-1].course[i-1].subject;
            }
        }

    };
    window.Table=table;
}));