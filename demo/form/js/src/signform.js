// window.js
define(['jquery','jqueryUI','validation'],function($,$UI,validate){
	//设置Window宽高的默认值
	function signForm(){
		//表单默认配置项
		this.cfg={
			hasCloseBtn:true,
			isDraggable:true,
			title:"系统消息",
			width:400,
			height:250,
			handler:null,
			handler4SubmitBtn:null,
			handler4CloseBtn:null,
			hasMask:true,
			signUp:{},


		}
	}

	signForm.prototype={
		signIn:function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			//html
			//设置面板
			var boundingBox=$(
				'<div class="signForm-box">'+
					//header
				'<div class="signForm-header">'+CFG.title+'</div>'+
					//body
				'<div class="signForm-body">'+
				'<form id="my-form" class="my-form">'+
				'<div><input id="username" name="username" type="text" placeholder="手机/邮箱/用户名"/></div>'+
				'<div><input id="pass" name="password" type="password" placeholder="密码"/></div>'+
				'<div><input id="submit" type="submit" value="登录"></div>'+
				'</form>'+
				'</div>'+
					//footer
				'<div class="signForm-footer"></div>'+
				'</div>'
			);


			//css
			var mask = null;
			if(CFG.hasMask){
				mask=$('<div class="window-mask"></div>');
				mask.appendTo("body");
			}

			boundingBox.appendTo("body");


			//设置默认样式
			boundingBox.css({
				width:CFG.width+"px",
				height:CFG.height+"px",
				left:(CFG.left||(window.innerWidth-CFG.width)/2)+"px",
				top :(CFG.top ||(window.innerHeight-CFG.height)/2)+"px"
			});

			//js
			//事件监听
			//登录
			$("#submit").click(function() {
				CFG.handler4SubmitBtn&&CFG.handler4SubmitBtn();
				boundingBox.remove();
				mask&&mask.remove();
			});

			//关闭窗口
			if(CFG.hasCloseBtn){
				//如果设置了配置项，则添加关闭按钮(默认开启)
				var closeBtn=$('<span class="signForm-closeBtn">X</span>');
				closeBtn.appendTo($(".signForm-header"));

				closeBtn.click(function(){
					CFG.handler4CloseBtn&&CFG.handler4CloseBtn();
					boundingBox.remove();
					mask&&mask.remove();
				})
			}

			//设置拖拽
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle})
				}else {
					boundingBox.draggable();
				}
			}
		},


		signIns:function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			//html
			//设置面板


			var boundingBox=$(
				'<div class="signForm-box">'+
					//header
				'<div class="signForm-header">'+CFG.title+'</div>'+
					//body
				'<div class="signForm-body">'+
					'<form action="" method="get" id="login">'+
					'<ul><li><input id="email" name="email" class="text required email" type="text" placeholder="手机/邮箱/用户名"></li>'+
						'<li><input id="password" name="password" type="password" class="text required"  minlength="6" maxlength="20" placeholder="密码"></li>'+
						'<li class="sss"><label for="nextTime" >下次自动登录</label><input id="nextTime" class="checkboxs" type="checkbox"><label class="right">登录遇到问题</label></li>'+
					'<li><input type="submit" class="submits" value="登录"></li></ul>'+
					'<div class="clear"></div>'+
					'</form>'+
				'</div>'+
					//footer
				'<div class="signForm-footer"></div>'+
				'</div>'
			);


			//css
			var mask = null;
			if(CFG.hasMask){
				mask=$('<div class="window-mask"></div>');
				mask.appendTo("body");
			}

			boundingBox.appendTo("body");


			//设置默认样式
			boundingBox.css({
				width:CFG.width+"px",
				height:CFG.height+"px",
				left:(CFG.left||(window.innerWidth-CFG.width)/2)+"px",
				top :(CFG.top ||(window.innerHeight-CFG.height)/2)+"px"
			});

			//js
			//事件监听
			//登录
			$("#submit").click(function() {
				CFG.handler4SubmitBtn&&CFG.handler4SubmitBtn();
				boundingBox.remove();
				mask&&mask.remove();
			});

			//关闭窗口
			if(CFG.hasCloseBtn){
				//如果设置了配置项，则添加关闭按钮(默认开启)
				var closeBtn=$('<span class="signForm-closeBtn">X</span>');
				closeBtn.appendTo($(".signForm-header"));

				closeBtn.click(function(){
					CFG.handler4CloseBtn&&CFG.handler4CloseBtn();
					boundingBox.remove();
					mask&&mask.remove();
				})
			}

			//设置拖拽
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle})
				}else {
					boundingBox.draggable();
				}
			}

			$(function() {
				// highlight
				var elements = $("input[type!='submit'], textarea, select");
				elements.focus(function() {
					$(this).parents('li').addClass('highlight');
				});
				elements.blur(function() {
					$(this).parents('li').removeClass('highlight');
				});

				$("#forgotpassword").click(function() {
					$("#password").removeClass("required");
					$("#login").submit();
					$("#password").addClass("required");
					return false;
				});

				$("#login").validate(
					{
						rules:{
							email:{
								require:true,
								email:true
							},
							password:{
								require:true,
								password:true
							},
							messages:{
								email:"我都打发士大夫."
							}
						}
					}
				)
			});
		},


		signUp:function(cfg){
			var CFG = $.extend(this.cfg,cfg);

			//设置面板
			var boundingBox=$(
				'<div class="signForm-box">'+
					//header
					'<div class="signForm-header">'+CFG.title+'</div>'+
					//body
					'<div class="signForm-body">'+
					'<form id="my-form" class="my-form my-signUp-form">'+
						'<div><label for="username">用户名</label><input id="username" name="username" type="text" placeholder="请输入昵称"/></div>'+
						'<div><label for="pass">密码</label><input id="pass" name="password" type="password" placeholder="请输入密码"/></div>'+
						'<div><label for="password">确认密码</label><input id="password" name="password" type="password" placeholder="请再次输入密码"/></div>'+
						'<div><label for="email">邮箱</label><input id="email" name="email" type="email" placeholder="请输入邮箱"/></div>'+
						'<div><label></label><input id="verima" type="text" placeholder="请输入验证码"><input  class="get-varima" type="button" value="获取邮箱验证码"> </div>'+
						'<div><label></label><input id="submit" type="submit" value="提交注册"></div>'+
					'</form>'+
					'</div>'+
						//footer
					'<div class="signForm-footer"></div>'+
				'</div>'
			);


			var mask = null;
			if(CFG.hasMask){
				mask=$('<div class="window-mask"></div>');
				mask.appendTo("body");
			}

			boundingBox.appendTo("body");


			//设置默认样式
			boundingBox.css({
				width:CFG.width+"px",
				height:CFG.height+"px",
				left:(CFG.left||(window.innerWidth-CFG.width)/2)+"px",
				top :(CFG.top ||(window.innerHeight-CFG.height)/2)+"px"
			});


			//事件监听
			//登录
			$("#submit").click(function() {
				CFG.handler4SubmitBtn&&CFG.handler4SubmitBtn();
				boundingBox.remove();
				mask&&mask.remove();
			});

			//关闭窗口
			if(CFG.hasCloseBtn){
				//如果设置了配置项，则添加关闭按钮(默认开启)
				var closeBtn=$('<span class="signForm-closeBtn">X</span>');
				closeBtn.appendTo($(".signForm-header"));

				closeBtn.click(function(){
					CFG.handler4CloseBtn&&CFG.handler4CloseBtn();
					boundingBox.remove();
					mask&&mask.remove();
				})
			}

			//设置拖拽
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle})
				}else {
					boundingBox.draggable();
				}
			}

			var options = {

				onFail: function() {
					alert( $myform.getInvalid().length +' invalid fields.' )
				},
				inputs: {
					'password': {
						filters: 'required pass'
					},
					'username': {
						filters: 'required inSet',
						data: {
							regex:"^asd$|^bbs$"
							//ajax: { url:'validate.php' }
						},
						errors:{
							inSet:"aaa"
						}
					},
					'file': {
						filters: 'extension',
						data: { extension: ['jpg'] }
					},

					'comments': {
						filters: 'min max',
						data: { min: 50, max: 200 }
					},
					'states': {
						filters: 'exclude',
						data: { exclude: ['default'] },
						errors : {
							exclude: 'Select a State.'
						}
					},
					'langs[]': {
						filters: 'min max',
						data: { min: 2, max: 3 },
						errors: {
							min: 'Check at least <strong>2</strong> options.',
							max: 'No more than <strong>3</strong> options allowed.'
						}
					}
				}
			};

			//var $myform = $('#my-form').idealforms(options).data('idealforms');
            //
			//$('#reset').click(function(){ $myform.reset().fresh().focusFirst() });
			//$myform.focusFirst();
		}
	};

	return{
		signForm:signForm
	}
});