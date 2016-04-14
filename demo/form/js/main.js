// main.js

require.config({
	paths:{
		jquery:"./lib/jquery-2.2.2",
		jqueryUI:"lib/jquery-ui",
		validation:"lib/jquery.validate",
		window:"src/window",
		widget:"src/widget",
		signForm:"src/signForm"
	}
});

require(['jquery','window','signForm'],function($,w,s){
	$("#signIn").click(function() {
		/* Act on the event */
		var sign = new s.signForm();
		sign.signIns({
			title:"登录",
			width:500,
			height:500
		})
	});

	$("#signUp").click(function() {
		/* Act on the event */
		var sign = new s.signForm();
		sign.signUp({
			title:"用户注册",
			width:500,
			height:500
		})
	});

	$("#b").click(function(){
		var win = new w.window();
		win.alert({
			title: "提示",
			content:"hello world",
			width:300,
			height:180
		}).on("alert",function(){
			alert("alert handler");
		}).on("close",function(){
			alert("close handler");
		})
	});
});