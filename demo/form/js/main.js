// main.js

require.config({
	paths:{
		jquery:"./lib/jquery-2.2.2",
		jqueryUI:"lib/jquery-ui.min",
		idealforms:"lib/idealforms",
		window:"src/window",
		widget:"src/widget",
		signform:"src/signform"
	}
});

require(['jquery','window','signform'],function($,w,s){
	$("#signIn").click(function() {
		/* Act on the event */
		var sign = new s.signForm();
		sign.signIn({
			title:"登录"
		})
	});

	$("#signUp").click(function() {
		/* Act on the event */
		var sign = new s.signForm();
		sign.signUp({
			title:"用户注册",
			width:1000,
			height:1000
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
			alert("alert headler");
		}).on("close",function(){
			alert("close headler");
		})
	});
});