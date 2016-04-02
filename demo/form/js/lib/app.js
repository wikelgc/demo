// app.js
// $("#agree").toggle(
// 	function(){
// 		$("#imagess").attr("src","./css/images/radio-flase.png");
// 		$("#submit").attr({
// 			// class: ''
// 			class: 'disable',
// 			disable:"none"
// 		});
// 	},
// 	function() {
// 	 Act on the event 
// 		var path='./css/images/radio-true.png';

// 		$("#imagess").attr("src","./css/images/radio-true.png");
// 		$("#submit").attr({
// 			class: 'submit',
// 			// disable: '',
// 			disable:""
// 		});
// 	}
// );


// $(){

// }

// $("#agree").click(function(){
// 	/* Act on the event */

// 	if()
// 	$("#images").attr(
// 		src:'./css/images/radio-true.png'
// 	);
// });

// $("p:before")

$(document).ready(function(){
	var path_true="./css/images/radio-true.png",
	    path_false="./css/images/radio-false.png";

	 var flag=true;
	//将img添加到a标签中
	var img="<img src='./css/images/radio-false.png' class='radio_true'>";
	$("#agree_box .checked").prepend(img);

	//给a标签添加属性
	$("#agree").click(function() {
		/* Act on the event */
		// var flag=true;
		if(flag===true){
			$("#agree img").attr({
				src:path_true
			});

			$("#submit").removeClass("disable").addClass('submit').removeAttr('disabled');

			flag=false;
		}else{
			$("#agree img").attr({
				src:path_false
			});
			$("#submit").removeClass("submit").addClass('disable').attr({disabled:"disabled"});


			flag=true;
		}
	});
});