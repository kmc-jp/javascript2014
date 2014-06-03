var welcome = document.getElementById('welcome');
welcome.addEventListener('click',function(){
  alert('welcome');
});
var timerMSec = document.getElementById('timerMSec');
var start = document.getElementById('timerBtn')
start.addEventListener('click',function(){
  alert(timerMSec.value+'秒経過');
})
