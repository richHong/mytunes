// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('dequeue', function() {
      this.remove(this.at(0));

    });

    this.on('add', function() {
      if (this.at(1) === undefined){
        this.playFirst();
      } 
    });

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length > 0){
        this.playFirst();
      } 
    });
  }, 

  playFirst: function(){
    this.at(0).play();
  },

});