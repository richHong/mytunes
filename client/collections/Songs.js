// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

});
var newSongM = new SongModel();
console.log('this is the SongModel', newSongM);