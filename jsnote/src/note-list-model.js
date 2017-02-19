(function(exports) {
  var NoteList = function() {
    this.list = [];
    this.id = -1;
  };

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.list.push(note);
    note.setId(this.nextId());
    this.viewAll();
  };

  NoteList.prototype.nextId = function() {
    this.id++;
    return this.id;
  };

  NoteList.prototype.viewAll = function() {
    return this.list;
  };

  NoteList.prototype.getNoteById = function(id) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].getId() == id) {
        return this.list[i];
      }
    }
  };

  exports.NoteList = NoteList;
})(this);
