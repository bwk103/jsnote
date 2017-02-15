(function(exports) {
  var NoteList = function() {
    this.list = [];
    this.id = -1;
  };

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.list.push(note);
    note.setID(this.nextID());
  };

  NoteList.prototype.nextID = function() {
    this.id++;
    return this.id;
  }

  NoteList.prototype.viewAll = function() {
      return this.list;
  };

  exports.NoteList = NoteList;
})(this);
