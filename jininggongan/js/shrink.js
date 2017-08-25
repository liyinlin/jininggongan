			var html = document.getElementsByTagName("html")[0];
var width = document.documentElement.clientWidth || document.body.clientWidth;
var f = (100 / 640) * width; //先有个比例这里用的20/520，的比例
html.style.fontSize = f + 'px';
document.body.style.display = 'block';
window.onresize = function() {
	var width = document.documentElement.clientWidth || document.body.clientWidth;
	var f = (100 / 640) * width; //先有个比例这里用的20/520，的比例
	html.style.fontSize = f + 'px';
}