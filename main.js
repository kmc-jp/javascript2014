//welcome alert
var welcome = document.getElementById('welcome');
welcome.addEventListener('click',function(){
	alert('welcome');
	welcome.value = '';
	var star = document.createElement('p'),
		text = document.createTextNode('I have prepared wonderful background images for you!');
	document.body.appendChild(star.appendChild(text));
});

//timer
var timer = document.getElementById('timerBtn');
timer.addEventListener('click',function(){
	var tm = document.getElementById('timerMSec').value;
	setTimeout(function(){
		alert(tm + " sec passed!");
	},tm*1000);
});

//select box
var img = document.getElementById('bgImageSelect');
whiteList = ['http://image.space.rakuten.co.jp/d/strg/ctrl/9/31311fe852f710aac67cf478a8ea8c4934ef7d37.72.2.9.2.jpeg','http://p.twpl.jp/show/large/j3BKm','http://f.st-hatena.com/images/fotolife/p/pema/20130327/20130327105952.gif'];
img.addEventListener('change',function(){
	document.body.style.background = 'url("' + whiteList[img.value] + '")'
})

