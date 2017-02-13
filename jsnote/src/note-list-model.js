(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.addNote = function(note) {
    this.list.push(note.text);
  };

  NoteList.prototype.createNote = function(text) {
    this.list.push(new Note(text));
  };

  NoteList.prototype.viewAll = function() {
      return this.list;
  };

  exports.NoteList = NoteList;
  exports.NoteList.addNote = NoteList.addNote;
  exports.NoteList.createNote = NoteList.createNote;
  exports.NoteList.viewAll = NoteList.viewAll;
})(this);
