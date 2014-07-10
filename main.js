//profileを変更する
$('#name').on('click',function(){
	if ( $('#profile').css('display') === 'none' ){
		$('#profile').css('display','block');
		}else{
		$('#profile').css('display','none');
	}})

//<h2>を代入し、ボタンをクリックしたらそのボタン名に変えていくようにしたけど、nのまま代入しちゃうとボタン名はそのボタン名がクリックされた時のものになってしまうのでしまうので関数を作ってnを代入していく形式にした(今考えたら新しい変数を非グローバルで作ればいけたっぽい？)

function AddBtn(n){
		var buttonid = "#button" + n;
		$('#profile').append('<h2>うごいているよ</h2>\n<input type="button" id="button' + n + '" value="んんん">');
		//buttonについて
		$(buttonid).on('click',function(){
			$(buttonid).val("ぼたん" + n);
			})
		}

var n = 0
$('#welcome').on('click',function(){
		AddBtn(n);
		n = n + 1
		})

$('#clr').on('change',function(){
		$('#back').css('background-color',$('#clr').val());
		})
