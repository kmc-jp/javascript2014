//welcome alert
var welcome = document.getElementById('welcome');
welcome.addEventListener('click',function(){
	alert('welcome');
});

//timer
var timer = document.getElementById('timerBtn');
timer.addEventListener('click',function(){
	var tm = document.getElementById('timerMSec').value;
	setTimeout(function(){
		alert(tm + " sec passed!");
	},tm*1000);
});

/*
//select box
var box = document.getElementById('bgImageSelect');
box.addEventListener('change',function(){
	var v = document.getElementById('bgImageSelect').value
	if(v === 1){
		alert("あなたはtypeBを選択している");
	}
});
*/