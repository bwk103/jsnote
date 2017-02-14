(function(exports) {

  var NoteListView = function(notelist) {
    this.notes = notelist;
  };

  NoteListView.prototype.notesToHTML = function() {
    var arrayLength = this.notes.list.length;
    if (arrayLength === 0) {
      console.log("You currently have no notes!");
    }
  };


  exports.NoteListView = NoteListView;
})(this);
