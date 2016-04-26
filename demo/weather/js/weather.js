var urlCity = "https://api.heweather.com/x3/weather?cityid=CN101200101&key=ead00e8e8c2540c9a87af54bb35002cf";
var _strCity = {};
var flag = false;
var _strCitys = {"HeWeather data service 3.0":[{"aqi":{"city":{"aqi":"67","co":"1","no2":"54","o3":"37","pm10":"68","pm25":"48","qlty":"良","so2":"4"}},"basic":{"city":"武汉","cnty":"中国","id":"CN101200101","lat":"30.573000","lon":"114.279000","update":{"loc":"2016-04-26 20:57","utc":"2016-04-26 12:57"}},"daily_forecast":[{"astro":{"mr":"22:28","ms":"08:30","sr":"05:43","ss":"18:57"},"cond":{"code_d":"307","code_n":"101","txt_d":"大雨","txt_n":"多云"},"date":"2016-04-26","hum":"91","pcpn":"13.3","pop":"99","pres":"1010","tmp":{"max":"24","min":"15"},"vis":"5","wind":{"deg":"344","dir":"无持续风向","sc":"微风","spd":"10"}},{"astro":{"mr":"23:18","ms":"09:18","sr":"05:42","ss":"18:58"},"cond":{"code_d":"101","code_n":"101","txt_d":"多云","txt_n":"多云"},"date":"2016-04-27","hum":"53","pcpn":"3.8","pop":"62","pres":"1009","tmp":{"max":"24","min":"14"},"vis":"10","wind":{"deg":"337","dir":"无持续风向","sc":"微风","spd":"5"}},{"astro":{"mr":"null","ms":"10:09","sr":"05:41","ss":"18:59"},"cond":{"code_d":"101","code_n":"101","txt_d":"多云","txt_n":"多云"},"date":"2016-04-28","hum":"41","pcpn":"0.0","pop":"0","pres":"1015","tmp":{"max":"25","min":"16"},"vis":"10","wind":{"deg":"52","dir":"无持续风向","sc":"微风","spd":"0"}},{"astro":{"mr":"00:06","ms":"11:04","sr":"05:40","ss":"18:59"},"cond":{"code_d":"100","code_n":"100","txt_d":"晴","txt_n":"晴"},"date":"2016-04-29","hum":"39","pcpn":"0.0","pop":"0","pres":"1015","tmp":{"max":"26","min":"19"},"vis":"10","wind":{"deg":"176","dir":"无持续风向","sc":"微风","spd":"3"}},{"astro":{"mr":"00:52","ms":"12:01","sr":"05:39","ss":"19:00"},"cond":{"code_d":"101","code_n":"101","txt_d":"多云","txt_n":"多云"},"date":"2016-04-30","hum":"43","pcpn":"0.0","pop":"0","pres":"1010","tmp":{"max":"27","min":"17"},"vis":"10","wind":{"deg":"205","dir":"无持续风向","sc":"微风","spd":"4"}},{"astro":{"mr":"01:37","ms":"13:01","sr":"05:38","ss":"19:01"},"cond":{"code_d":"305","code_n":"101","txt_d":"小雨","txt_n":"多云"},"date":"2016-05-01","hum":"62","pcpn":"0.1","pop":"2","pres":"1006","tmp":{"max":"26","min":"19"},"vis":"10","wind":{"deg":"191","dir":"无持续风向","sc":"微风","spd":"8"}},{"astro":{"mr":"02:19","ms":"14:03","sr":"05:37","ss":"19:01"},"cond":{"code_d":"101","code_n":"101","txt_d":"多云","txt_n":"多云"},"date":"2016-05-02","hum":"47","pcpn":"0.0","pop":"16","pres":"1005","tmp":{"max":"28","min":"20"},"vis":"10","wind":{"deg":"239","dir":"无持续风向","sc":"微风","spd":"7"}}],"hourly_forecast":[{"date":"2016-04-26 22:00","hum":"92","pop":"15","pres":"1010","tmp":"21","wind":{"deg":"342","dir":"西北风","sc":"微风","spd":"13"}}],"now":{"cond":{"code":"300","txt":"阵雨"},"fl":"19","hum":"100","pcpn":"0","pres":"1011","tmp":"18","vis":"7","wind":{"deg":"30","dir":"西北风","sc":"3-4","spd":"11"}},"status":"ok","suggestion":{"comf":{"brf":"舒适","txt":"白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。"},"cw":{"brf":"较适宜","txt":"较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"},"drsg":{"brf":"较舒适","txt":"建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。"},"flu":{"brf":"较易发","txt":"昼夜温差较大，较易发生感冒，请适当增减衣服。体质较弱的朋友请注意防护。"},"sport":{"brf":"较适宜","txt":"天气较好，户外运动请注意防晒。推荐您进行室内运动。"},"trav":{"brf":"适宜","txt":"天气较好，但丝毫不会影响您出行的心情。温度适宜又有微风相伴，适宜旅游。"},"uv":{"brf":"弱","txt":"紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"}}}]}
var timer = 0;


$(document).on("pagebeforeshow", "#page1", function(){
	if(timer++ == 0){
		initLoaction(1);
	}
	$(".select").on("click", function(){
		$(".selectDown").css("display", "block");
		return false;
	});

	//$("#homePage").click=function(){
	//	window.location.reload();
	//	timer=0;
	//};

	$(".location").on("click", function(){
		$(".selectDownLocation").css("display", "block");
		return false;
	});
	$(document).on("click", function(){
		$(".selectDown").css("display", "none");
	});
	$(".refresh").on("tap", function(){
		window.location.reload();
		//initLoaction(1);
	});
});

/*页面二*/
$(document).on("pagebeforeshow", "#page2", function(){
	initLoaction(2);
});

/*页面三*/
$(document).on("pagebeforeshow", "#page3", function(){
	var _city=["BeiJing","ShangHai","GuangZhou","ShenZhen","WuHan","XiaMen"];
	$("#search-submit").click(function(){
		//window.location.href="./index.html";
		var city = $("#search-city").val().trim();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	});

	$("#btn"+_city[0]).click(function(){
		//alert(_city[i]);
		var city =_city[0].toLocaleLowerCase();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	})
	$("#btn"+_city[1]).click(function(){
		//alert(_city[i]);
		var city =_city[1].toLocaleLowerCase();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	})
	$("#btn"+_city[2]).click(function(){
		//alert(_city[i]);
		var city =_city[2].toLocaleLowerCase();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	})
	$("#btn"+_city[3]).click(function(){
		//alert(_city[i]);
		var city =_city[3].toLocaleLowerCase();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	})
	$("#btn"+_city[4]).click(function(){
		//alert(_city[i]);
		var city =_city[4].toLocaleLowerCase();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	})
	$("#btn"+_city[5]).click(function(){
		//alert(_city[i]);
		var city =_city[5].toLocaleLowerCase();
		var _url = "https://api.heweather.com/x3/weather?city="+city+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(1,_url);
	})


});

//初始化地理位置
function initLoaction(number){
	//1.判断设备

	//2.如果是移动设备,则获取设备上的GPRS定位


	//3.如果是pc设备,则获取设备的IP地址来定位
	getLocation(number);
}

function getLocation(number){
	var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_='+Math.random();
	$.getJSON(url, function(data){
		var _url = "https://api.heweather.com/x3/weather?cityip="+data.Ip+"&key=ead00e8e8c2540c9a87af54bb35002cf";
		getAjax(number,_url);
	});
}


function getAjax(number,cityUrl){
	var oAjax;
	if (window.XMLHttpRequest) {
		 oAjax=new XMLHttpRequest;
	}
	else{
		 oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}

	//flag == false
	if(flag == false) {
		oAjax.open('GET', cityUrl, true);
		oAjax.send(null);
		oAjax.onreadystatechange = function () {
			if (oAjax.readyState == 4) {
				if (oAjax.status == 200) {
					_strCity = JSON.parse(oAjax.responseText);
					//flag = true;
					if (number == 1) {
						showOneDetail();
					} else if (number == 2) {
						showTwoDetail();
					}
				} else {
					if (oAjax.status == 0) {
						//alert("请求失败！没有网络连接...");
						_strCity = _strCitys
					}
				}
			}
		}
	}
	else if(flag == true){
		if(number == 1){
			showOneDetail();
		}else if(number == 2){
			showTwoDetail();
		}
	}
}


function showOneDetail() {
	$(".refresh p").html(_strCity["HeWeather data service 3.0"][0]["basic"]["update"]["loc"].substring(11) + '更新');
	$(".page1_pos span").html(_strCity["HeWeather data service 3.0"][0]["basic"]["city"]);
	$(".aqi .aqi_l").html(_strCity["HeWeather data service 3.0"][0]["aqi"]["city"]["aqi"]);
	$(".aqi .aqi_r").html('&nbsp;&nbsp;&nbsp;&nbsp;' + _strCity["HeWeather data service 3.0"][0]["aqi"]["city"]["qlty"]);
	$(".aqi .pm25_r").html('&nbsp;&nbsp;&nbsp;&nbsp;' + _strCity["HeWeather data service 3.0"][0]["aqi"]["city"]["pm25"]);
	$(".basic .tmp").html(_strCity["HeWeather data service 3.0"][0]["now"]["tmp"] + '℃');
	$(".basic .basic_txt").html(_strCity["HeWeather data service 3.0"][0]["now"]["cond"]["txt"]);
	$(".basic .basic_max").html(_strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["tmp"]["max"] + '℃');
	$(".basic .basic_min").html('&nbsp;&nbsp;&nbsp;&nbsp;' + _strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["tmp"]["min"] + '℃');
	$(".basic .basic_hum").html('&nbsp;&nbsp;&nbsp;&nbsp;' + _strCity["HeWeather data service 3.0"][0]["now"]["hum"] + '%');
	$(".basic .basic_dir").html(_strCity["HeWeather data service 3.0"][0]["now"]["wind"]["dir"]);
	$(".basic .basic_sc").html('&nbsp;&nbsp;&nbsp;&nbsp;' + _strCity["HeWeather data service 3.0"][0]["now"]["wind"]["sc"] + '级');
	$(".basic .basic_sr").html('日出' + _strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["astro"]["sr"]);
	$(".basic .basic_ss").html('&nbsp;&nbsp;&nbsp;&nbsp;' + '日落' + _strCity["HeWeather data service 3.0"][0]["daily_forecast"][0]["astro"]["ss"]);
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


function showTwoDetail(){
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





//ajax