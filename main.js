var welcome = document.getElementById('welcome');
welcome.addEventListener("click",function(){
	alert('welcome');
});
var setfnc = function(){
	alert(timersc.value + "びょう経ちました")
};
var timersc = document.getElementById('timerMSec');
var timerBtn = document.getElementById('timerBtn');
timerBtn.addEventListener("click",function(){
	console.log(timersc.value + "秒後に〜〜〜〜");
	setTimeout(setfnc,1000*Number(timersc.value));
});
var img = document.getElementById('bgImageSelect');
var whiteList = ['http://blog-imgs-42-origin.fc2.com/c/r/a/craft89/130508_01.jpg','http://f.st-hatena.com/images/fotolife/p/pema/20130529/20130529144433.jpg','http://blogs.c.yimg.jp/res/blog-de-53/komeijisatorichireiden/folder/513683/68/10272268/img_0?1377428661']
img.addEventListener('change',function(){
	document.body.style.background = 'url("' + whiteList[img.value] + '")'

})