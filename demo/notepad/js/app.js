/**
 * Created by admin on 2016/4/14.
 */
$("#notenav_nav").live("pagecreate", function () {
    if(notepad.utils.getParam('bln_look')!=null){
        $.mobile.changePage("index.html",slideup);
    }else{
        var $count = $("#notenav_list a").length;
        $("#notenav_list a:not(:first-child)").hide();
        $("#notenav_icon li:first-child").addClass('on').html('1');
        $("#notenav_list a img").each(function(index){
            $(this).swipeleft(function(){
                if(index < $count -1){
                    var i = index + 1;
                    var¡¡£ó¡¡
                }
            })
        })
    }
})