(function(exports) {
  var NoteList = function() {
    this.list = [];
  };

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.list.push(note);
  };

  NoteList.prototype.viewAll = function() {
      return this.list;
  };

  exports.NoteList = NoteList;
})(this);
