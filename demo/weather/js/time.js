/**
 * Created by admin on 2016/4/28.
 */


$(document).on("pagebeforeshow", "#page2", function() {

    var time = $(".time-weeks");

    $.each(time,function(i){
        $(this).text(weeks[i].name);
    });

    //
    for(var i=0 ;i<5;i++){
        var course_am = $(".course:eq("+i+") .time-course-am");
        $.each(course_am,function(j){
            $(this).text(weeks[i].am.subject[j]);
        });

        var course_pm = $(".course:eq("+i+") .time-course-pm");
        $.each(course_pm,function(j){
            $(this).text(weeks[i].pm.subject[j]);
        });

        var course_ng = $(".course:eq("+i+") .time-course-ng");
        $.each(course_ng,function(j){
            $(this).text(weeks[i].ng.subject[j]);
        });
    }

    //
    $(".course li").on("click", "a", function(){
        //获取学科名
        var subjecName= $(this).text().trim();
        for(var i=0;i<subject.length;i++){
            if(subject[i].cname == subjecName){
                //alert("老师:"+subject[i].teacher+"上课地点");
                var Items = "";
                Items = "<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right'>关闭</a>"+
                        "<p>课程名:"+subject[i].cname+"</p>"+
                        "<p>教师:"+subject[i].teacher+"</p>"+
                        "<p>上课地点:"+subject[i].location+"</p>";

                    $("#tip").html(Items);
            }
        }

        //获取学科

    });
});

$(".select").on("click", function(){
    var selectDown = $(".selectDown");
    if(selectDown.css("display") == "block"){
        selectDown.css("display", "none");
    }else{
       selectDown.css("display", "block");
    }
    return false;
});

$(document).on("click", function(){
    $(".selectDown").css("display", "none");
});
