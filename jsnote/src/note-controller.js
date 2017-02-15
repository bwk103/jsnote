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

  NoteController.prototype.changeUrlForSingleNote = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    console.log(this.noteListView);
    this.location = window.location.href ;
    var id = this.location.hash.split("#")[1];
    var noteHtml = this.noteList.getNoteById(id).viewText();
    document.getElementById("app").innerHTML = noteHtml;
    // this.showNote(this.getNoteFromUrl());
  };
  //
  // NoteController.prototype.getNoteFromUrl = function() {
  //   return this.location.hash.split("#")[1];
  // };

  NoteController.prototype.showNote = function(id) {
    var noteHtml = this.noteList.getNoteById(id).viewText();
  };

  exports.NoteController = NoteController;
})(this);

// window.addEventListener("hashchange", noteController.showNoteForCurrentPage);
