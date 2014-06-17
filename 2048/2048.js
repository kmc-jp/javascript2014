$(function(){
  var _2048 = function(baseUrl){
    this.baseUrl = baseUrl || 'http://2048.semantics3.com';
    this.sessionId = undefined;
  }
  _2048.prototype.startGame = function(){
    if(!this.sessionId){
      self = this;
      var req_url = this.baseUrl+'/hi/start/json';
      $.getJSON(req_url).done(function(data){
        self.sessionId = data.session_id;
        self.makeGrid(data.grid);
      })
    }
  }
  _2048.prototype.makeGrid = function(grid){
    var self = this;
    var gridArea = $('#gridArea');
    gridArea.html('');
    grid.forEach(function(row,i){
      var rowDiv = $('<div>').addClass('row');
      row.forEach(function(tile,j){
        var tile = $('<span>').addClass('tile').text(tile).css({'background': self.getTileColor(tile)})
        rowDiv.append(tile);
      })
      gridArea.append(rowDiv).append('<br />');
    })
  }
  _2048.prototype.getTileColor = function(num){
    if(num <= 8){
      return '#ffffff';
    }else if(num <= 64){
      return '#f0e68c';
    }else if(num <= 256){
      return '#7fffd4';
    }else if(num === 512){
      return '#e6e6fa';
    }else if(num === 1024){
      return '#fff0f5';
    }else{
      return '#f08080';
    }
  }
  _2048.prototype.moveTilesEvents = function(event){
    if(event.type === 'keydown'){
      var direction = null;
      switch(event.keyCode){
      case 38: //up
        direction = 0;
        break;
      case 39: //right
        direction = 1;
        break;
      case 40: //down
        direction = 2;
        break;
      case 37: //left
        direction = 3;
        break;
      }
      if(direction){
        this.moveTiles(direction);
      }
    }else{
      this.moveTiles(event.value);
    }
  }
  _2048.prototype.moveTiles = function(direction){
    var req_url = this.baseUrl + '/hi/state/'+this.sessionId+'/move/'+direction+'/json';
    var self = this;
    $.getJSON(req_url).done(function(data){
      if(data.moved){
        self.makeGrid(data.grid);
      }
      if(data.over){
        alert('Game Over');
      }
    });
  }
  var game = null;
  $('#startBtn').on('click',function(){
    game = new _2048();
    game.startGame();
    $(window).on('keydown',game.moveTilesEvents.bind(game));
  });
})
