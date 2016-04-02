// window.js
define(['jquery','jqueryUI','idealforms'],function($,$UI,idealforms){
	//设置Window宽高的默认值
	function Signform(){
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
		}
	}

	Signform.prototype={
		SignIn:function(cfg){
			var CFG = $.extend(this.cfg,cfg);

			//设置面板
			var boundingBox=$(
				'<div class="Signform_SignInBox">'+
					//header
					'<div class="Signform_header">'+CFG.title+'</div>'+
					//body
					'<div class="Signform_body">'+
						'<form id="my-form" class="my-form">'+
							'<div><input id="username" name="username" type="text" placeholder="手机/邮箱/用户名"/></div>'+
							'<div><input id="pass" name="password" type="password" placeholder="密码"/></div>'+
							'<div><input id="submit" type="submit" value="登录"></div>'+
						'</form>'+
					'</div>'+
					//footer
					'<div class="Signform_footer"></div>'+
				'</div>'
			);


			var mask = null;
			if(CFG.hasMask){
				mask=$('<div class="window_mask"></div>');
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
				var closeBtn=$('<span class="Signform_closeBtn">X</span>');
				closeBtn.appendTo($(".Signform_header"));

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

		SignUp:function(cfg){
			var CFG = $.extend(this.cfg,cfg);

			//设置面板
			var boundingBox=$(
				'<div class="Signform_SignInBox">'+
					//header
				'<div class="Signform_header">'+CFG.title+'</div>'+
					//body
				'<div class="Signform_body">'+
				'<form id="my-form" class="my-form my-signUp-form">'+
				'<div><label for="username">用户名</label><input id="username" name="username" type="text" placeholder="请输入昵称"/></div>'+
				'<div><label for="pass">密码</label><input id="pass" name="password" type="password" placeholder="请输入密码"/></div>'+
				'<div><label for="password">确认密码</label><input id="password" name="password" type="password" placeholder="请再次输入密码"/></div>'+
				'<div><label for="email">邮箱</label><input id="email" name="email" type="email" placeholder="请输入邮箱"/></div>'+
				'<div><label></label><input id="verima" type="text" placeholder="请输入验证码"><input  class="get-varima" type="button" value="获取邮箱验证码"> </div>'+
				'<div><label></label><input id="signform-checkbox" type="checkbox"><label class="checkbox_label" for="signform-checkbox">我已阅读并同意相关服务条款和隐私政策</label></div>'+
				'<div><label></label><input id="submit" type="submit" value="提交注册"></div>'+
				'</form>'+
				'</div>'+
					//footer
				'<div class="Signform_footer"></div>'+
				'</div>'
			);


			var mask = null;
			if(CFG.hasMask){
				mask=$('<div class="window_mask"></div>');
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
				var closeBtn=$('<span class="Signform_closeBtn">X</span>');
				closeBtn.appendTo($(".Signform_header"));

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

			var $myform = $('#my-form').idealforms(options).data('idealforms');

			$('#reset').click(function(){ $myform.reset().fresh().focusFirst() });
			$myform.focusFirst();
		}
	};

	return{
		Signform:Signform
	}
});