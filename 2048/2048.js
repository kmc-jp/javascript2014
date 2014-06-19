$(function(){
$('#start').on('click',function(){start();setTimeout(function(){console.log(session)},1000)})

var session = null;

function start(){
	$.ajax({
		url: 'http://2048.semantics3.com/hi/start/json',
		dataType: 'json',
		data: {},
		method: 'GET'
	}).done(function(data){
		for (var i=0; i<4 ; i++){
			$('#2048').append(data['grid'][i] + "<br/>");
		}
		session = data['session_id']
	})
}

})



