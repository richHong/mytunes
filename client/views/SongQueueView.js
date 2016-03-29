// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.addClass('songQueue')
    this.$el.html('<th>Song Queue</th>')
    // .append(
    //   this.collection.map(function(song){
    //     return new LibraryEntryView({model: song}).render();
    //   })
  },

  add: function(song){
    this.$el.html(song)
  }
  

});
