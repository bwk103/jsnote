(function(exports) {
  var NoteList = function() {
    this.list = [];
  };

  NoteList.prototype.addNote = function(note) {
    this.list.push(note);
  };

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.addNote(note);
  };

  NoteList.prototype.viewAll = function() {
      return this.list;
  };

  exports.NoteList = NoteList;
})(this);
