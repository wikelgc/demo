/**
 * Created by admin on 2016/4/13.
 */
$(function(){
    var col=['red','green','yellow','blue','gray'];
    var i=0;
    $('li').click(function(){
        $('.img').css('background-color',col[$(this).text()-1]);
    });

    (function setTime(){
        if(i>=5) i=0;
        $('.img').css('background-color',col[i++]);
        setTimeout(setTime,3000);
    })();
});
