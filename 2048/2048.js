$(function(){
$('#start').on('click',function(){start();});
$(window).keydown(function(event){
    //上
    if(event.which == 38){
        $('#direction').text("↑");
        get(0);
    };
    //下
    if(event.which == 40){
        $('#direction').text("↓");
        get(2);
    };
    //左
    if(event.which == 37){
        $('#direction').text("←");
        get(3);
    };
    //右
    if(event.which == 39){
        $('#direction').text("→");
        get(1);
    };
});

var session;

var numColor = {0:"#BDBDBD",2:"#1C1C1C",4:"#151515",8:"#088A29",16:"#0101DF",32:"#088A29",64:"#FF0040",128:"#088A08",256:"#9A2EFE",512:"#5FB404",1024:"#FE2EF7",2048:"#DF7401"}

function start(){
    //get started
    $.ajax({
        url: 'http://2048.semantics3.com/hi/start/json',
        dataType: 'json',
        data: {},
        method: 'GET'
    }).done(function(data){
        for (var i=0; i<4 ; i++){
            for(var j=0; j<4; j++){
                $('#start').val('reset')
                id = '#tag' + String(i) + String(j)
                $(id).text(data['grid'][i][j]).css("color",numColor[data['grid'][i][j]])
                $('#score').text(data['score'])
            }
        }
        $('#game').css('display','block');
        ///get sessionid
        session = data['session_id'];
    });
};

function get(direction){
    //get grid
    $.ajax({
        url: 'http://2048.semantics3.com/hi/state/' + session + '/move/' + direction + "/json",
        dataType: 'json',
        data: {},
        method: 'GET'
    }).done(function(data){
        for (var i=0; i<4 ; i++){
            for(var j=0; j<4; j++){
                id = '#tag' + String(i) + String(j)
                $(id).text(data['grid'][i][j]).css("color",numColor[data['grid'][i][j]])
                $('#score').text(data['score'])
                if(data['over'] === true){
                    $('#score').append(" <<<<< over!!! >>>>>")
                    }
           }
        }
    });
};


});
