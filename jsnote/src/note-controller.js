(function(exports) {

  var NoteController = function(noteListView) {
    // this.noteList = new NoteList();
    // this.noteList.addNote("This is a test"); // delete this!
    // this.noteList.addNote("Hello, World!");
    // this.noteList.addNote("Will this work?");
    // this.noteList.addNote("Here's another test!");
    this.noteListView = noteListView;
  };

  NoteController.prototype.changeText = function() {
    this.elem = document.getElementById('app');
    this.elem.innerHTML = this.noteListView.notesToHTML();
  };
  exports.NoteController = NoteController;
})(this);

  function changeUrlForSingleNote() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  }

  function showNote(id) {
    console.log(id);
    document.getElementById("app").innerHTML = noteList.list[id].viewText();
  }

  function checkWhetherFormSubmitted() {
    var form = document.getElementById('text');
    form.addEventListener("submit", function() {
      var text = document.getElementById("textarea");
      noteList.addNote(text.value);
      controller.changeText();
      console.log(text.value);
      console.log("You clicked it!!");
      preventDef();
    });
  }

  function preventDef(){
    event.preventDefault();
  }

  function addHandler() {
    var form = document.getElementById('text');
    form.addEventListener("submit",
    preventDef, false);
}

  // function showNoteForCurrentPage(){
  //   this.location = window.location.href ;
  //   var id = this.location.hash.split("#")[1];
  //   console.log(this.noteListView)
  //   var noteHtml = "ARGGGGH!";
  //   document.getElementById("app").innerHTML = noteHtml;
  // }

  // function showNote(id) {
  //   var noteHtml = "ARRRRRRGH!";
  // }

// window.addEventListener("hashchange", noteController.showNoteForCurrentPage);
