/**
 * Created by admin on 2016/3/12.
 */
window.onload=function(){
    //console.log("hello world"+time.name);
    var name =document.getElementById("name");
    var btn =document.getElementById("btn");
    console.log(name.value);

    name.innerText=time.week[1].course[1].subject;
    //btn.onclick = function(){
    //    console.log(name.value);
    //    console.log(time.teacherName);
    //    if(name.value==time.teacherName){
    //        console.log("--myName is:"+time.teacherName)
    //    }
    //}
    //if(time.teacherName===cli.value){
    //    console.log("我是张三");
    //}
};