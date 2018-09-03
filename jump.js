var yxy_jumpToApp = function(packageName, scheme){
	var loc = scheme;
	if (yxy_is_weixn_qq()) {
		loc = "https://a.app.qq.com/o/simple.jsp?pkgname=" + packageName + "&ios_scheme=" + encodeURIComponent(scheme);
	}
	window.location = loc;
}

function yxy_is_weixn_qq(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
	return "weixin";
	} else if (ua.match(/QQ/i) == "qq") {
	return "QQ";
	    }
	return false;
}