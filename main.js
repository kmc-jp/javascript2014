$('#name').on('click',function(){
	if ( $('#profile').css('display') === 'none' ){
		$('#profile').css('display','block');
		}else{
		$('#profile').css('display','none');
	}})

n = 0

$('#welcome').on('click',function(){
	$('#profile').append('<h2>うごいているよ</h2>\n<input type="button" id="button' + n + '" value="んんん">')
	n = n + 1
})

var test = function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElemen    t(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
		}}

document.getElementById('twitter').addEventListener('click',test(document,'script','twitter-wjs'))
