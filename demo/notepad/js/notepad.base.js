/**
 * Created by admin on 2016/4/14.
 */
var notepad={
    author:"wike",
    version:"1.0",
    website:"http:"
}

notepad.utils={
    setParam:function(name,value){
        localStorage.setItem(name,value);
    },
    getParam:function(name){
        return localStorage.getItem(name);
    }
}
