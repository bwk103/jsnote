(function(exports) {

  var NoteController = function() {
    this.noteList = new NoteList();
    this.noteList.addNote("This is a test"); // delete this!
    this.noteList.addNote("Hello, World!");
    this.noteList.addNote("Will this work?");
    this.noteList.addNote("Here's another test!");
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeText = function() {
    this.elem = document.getElementById('app');
    this.elem.innerHTML = this.noteListView.notesToHTML();
  };

  exports.NoteController = NoteController;
})(this);
