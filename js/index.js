/**
 * Created by admin on 2016/3/10.
 */
$(document).ready(function(){
    $("#accordian h3").click(function(){

        $("#accordian ul ul").slideUp();

        if(!$(this).next().is(":visible")){
            $(this).next().slideDown();
        }
    })

})