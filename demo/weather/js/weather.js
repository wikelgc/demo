$(document).on("pagebeforeshow", "#page1", function(){
	var urlCity = "https://api.heweather.com/x3/weather?cityid=CN101200101&key=ead00e8e8c2540c9a87af54bb35002cf";
	var _strCity = {};
	showDetail();

	//dom事件
	$(".select").on("click", function(event){
		alert("hello");
		$(".selectDown").css("display", "block");
		return false;
	});
	$(".location").on("click", function(event){
		$(".selectDownLocation").css("display", "block");
		return false;
	});
	$(document).on("click", function(){
		$(".selectDown").css("display", "none");
	});
	$(".refresh").on("tap", function(){
		window.location.reload();
		showDetail();
	});

	//locationQuery();

	//地理位置查询
	//function locationQuery(){
	//	var location = {
	//		lat:"",
	//		lon:""
	//	};
	//	if(navigator.geolocation){
    //
	//		navigator.geolocation.getCurrentPosition(function(position){
	//				location.lat = position.coords.latitude;
	//				location.lon = position.coords.longitude;
	//			}
	//			,function(error){
	//				window.open('/mweather/'+areaid+'.shtml','_self');
	//			},{
	//				maximumAge:60*1000*3,
	//				timeout:4000
	//			});
	//	}
	//	else{
	//		location.lat = CN101200101;
	//		//location.lon = position.coords.longitude;
	//	}
    //
	//	alert(location.lat+location.lon);
	//	return location;
	//}


	//根据IP地址查询
	//function
	//var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_='+Math.random();
	//$.getJSON(url, function(data){
	//	Ip = data.Ip;
	//	alert(Ip);
	//	getloaction(Ip);
	//});

	//ajax
	function showDetail(){
		if (window.XMLHttpRequest) {
			var oAjax=new XMLHttpRequest;
		}
		else{
			var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
		}
		oAjax.open('GET', urlCity, true);
		oAjax.send(null);
		oAjax.onreadystatechange=function(){
			if (oAjax.readyState==4) {
				if (oAjax.status==200) {
					_strCity = JSON.parse(oAjax.responseText);
					$(".refresh p").html(_strCity["HeWeather data service 3.0"][0]["basic"]["update"]["loc"].substring(11)+'更新');
					$(".page1_pos span").html(_strCity["HeWeather data service 3.0"][0]["basic"]["city"]);
					$(".aqi .aqi_l").html(_strCity["HeWeather data service 3.0"][0]["aqi"]["city"]["aqi"]);
					$(".aqi .aqi_r").html('&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["aqi"]["city"]["qlty"]);
					$(".aqi .pm25_r").html('&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["aqi"]["city"]["pm25"]);
					$(".basic .tmp").html(_strCity["HeWeather data service 3.0"][0]["now"]["tmp"]+'℃');
					$(".basic .basic_txt").html(_strCity["HeWeather data service 3.0"][0]["now"]["cond"]["txt"]);
					$(".basic .basic_max").html(_strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["tmp"]["max"] + '℃');
					$(".basic .basic_min").html('&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["tmp"]["min"] + '℃');
					$(".basic .basic_hum").html('&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["now"]["hum"] + '%');
					$(".basic .basic_dir").html(_strCity["HeWeather data service 3.0"][0]["now"]["wind"]["dir"]);
					$(".basic .basic_sc").html('&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["now"]["wind"]["sc"]+'级');
					$(".basic .basic_sr").html('日出'+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["astro"]["sr"]);
					$(".basic .basic_ss").html('&nbsp;&nbsp;&nbsp;&nbsp;'+'日落'+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["astro"]["ss"]);
					$(".comf span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["comf"]["brf"]);
					$(".drsg span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["drsg"]["brf"]);
					$(".uv span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["uv"]["brf"]);
					$(".cw span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["cw"]["brf"]);
					$(".trav span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["trav"]["brf"]);
					$(".flu span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["flu"]["brf"]);
					$(".sport span").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["sport"]["brf"]);
					$("#comf p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["comf"]["txt"]);
					$("#drsg p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["drsg"]["txt"]);
					$("#uv p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["uv"]["txt"]);
					$("#cw p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["cw"]["txt"]);
					$("#trav p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["trav"]["txt"]);
					$("#flu p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["flu"]["txt"]);
					$("#sport p").html(_strCity["HeWeather data service 3.0"][0]["suggestion"]["sport"]["txt"]);

					var hourly_forecast = _strCity["HeWeather data service 3.0"][0]["hourly_forecast"];
					var trContent1 = "";
					var trContent2 = "";
					var trContent3 = "";
					var trContent4 = "";
					for (var i = 0; i < hourly_forecast.length; i++) {
						trContent1 += '<td>' + hourly_forecast[i]["date"].substring(11) + '</td>';
						trContent2 += '<td>' + hourly_forecast[i]["tmp"] + '℃</td>';
						trContent3 += '<td>' + hourly_forecast[i]["wind"]["dir"] + '</td>';
						trContent4 += '<td>' + hourly_forecast[i]["wind"]["sc"] + '</td>';
					}
					document.getElementsByTagName("table")[0].innerHTML = '<tr>' + trContent1 + '</tr>';
					document.getElementsByTagName("table")[0].innerHTML += '<tr>' + trContent2 + '</tr>';
					document.getElementsByTagName("table")[0].innerHTML += '<tr>' + trContent3 + '</tr>';
					document.getElementsByTagName("table")[0].innerHTML += '<tr>' + trContent4 + '</tr>';
				}
			}
		};
	}

});
/*页面二*/
$(document).on("pagebeforeshow", "#page2", function(){
	var urlCity = "https://api.heweather.com/x3/weather?cityid=CN101200101&key=ead00e8e8c2540c9a87af54bb35002cf";
	var urlCityId = "https://api.heweather.com/x3/citylist?search=allchina&key=ead00e8e8c2540c9a87af54bb35002cf";
	var _strCity = {};
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest;
	}
	else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	oAjax.open('GET', urlCity, true);
	oAjax.send(null);
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				_strCity = JSON.parse(oAjax.responseText);
				var a = document.getElementsByClassName("collap-title-left");
				for (var i = 2; i < a.length; i++) {
					a[i].innerHTML=_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["date"].substring(5);
				}
				var b = document.getElementsByClassName("pic_ds");
				for (var i = 0; i < b.length; i++) {
					b[i].src="http://files.heweather.com/cond_icon/"+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["cond"]["code_d"]+".png";
				}
				var c = document.getElementsByClassName("pic_ns");
				for (var i = 0; i < c.length; i++) {
					c[i].src="http://files.heweather.com/cond_icon/"+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["cond"]["code_n"]+".png";
				}
				var d = document.getElementsByClassName("pic_d");
				for (var i = 0; i < d.length; i++) {
					d[i].src="http://files.heweather.com/cond_icon/"+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["cond"]["code_d"]+".png";
				}
				var e = document.getElementsByClassName("pic_n");
				for (var i = 0; i < e.length; i++) {
					e[i].src="http://files.heweather.com/cond_icon/"+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["cond"]["code_n"]+".png";
				}
				var f = document.getElementsByClassName("collap-title-right");
				for (var i = 0; i < f.length; i++) {
					f[i].innerHTML='<span>' + _strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["tmp"]["max"] + '℃/' + _strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["tmp"]["min"] + '℃</span>';
				}
				var g = document.getElementsByClassName("collap-content-bottom");
				for (var i = 0; i < g.length; i++) {
					g[i].innerHTML=_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["wind"]["dir"]+'&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["wind"]["sc"]+'级';
				}
				var h = document.getElementsByClassName("sunrise");
				for (var i = 0; i < h.length; i++) {
					h[i].innerHTML='日出&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["astro"]["sr"];
				}
				var j = document.getElementsByClassName("sundown");
				for (var i = 0; i < j.length; i++) {
					j[i].innerHTML='日落&nbsp;&nbsp;&nbsp;&nbsp;'+_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["astro"]["ss"];
				}
				var k = document.getElementsByClassName("left");
				for (var i = 0; i < k.length; i++) {
					k[i].innerHTML=_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["cond"]["txt_d"];
				}
				var l = document.getElementsByClassName("right");
				for (var i = 0; i < l.length; i++) {
					l[i].innerHTML=_strCity["HeWeather data service 3.0"][0]["daily_forecast"][i]["cond"]["txt_n"];
				}
			}
			else{
				if (oAjax.status == 0) {
					alert("请求失败！没有网络连接...");
				}
			}
		}
	}
});