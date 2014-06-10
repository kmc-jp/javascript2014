var welcome = document.getElementById('welcome');
welcome.addEventListener("click",function(){
	alert('welcome');
});
var setFnc = function(){
	alert(timerSc.value + "びょう経ちました")
};
var timerSc = document.getElementById('timerMSec');
var timerBtn = document.getElementById('timerBtn');
timerBtn.addEventListener("click",function(){
	console.log(timerSc.value + "秒後に〜〜〜〜");
	setTimeout(setFnc,1000*Number(timerSc.value));
});
var img = document.getElementById('bgImageSelect');
var imgList = ['http://blog-imgs-42-origin.fc2.com/c/r/a/craft89/130508_01.jpg','http://f.st-hatena.com/images/fotolife/p/pema/20130529/20130529144433.jpg','http://blogs.c.yimg.jp/res/blog-de-53/komeijisatorichireiden/folder/513683/68/10272268/img_0?1377428661']
img.addEventListener('change',function(){
	document.body.style.background = 'url("' + img[img.value] + '")'

})
