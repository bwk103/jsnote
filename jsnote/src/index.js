$( document ).ready(function() {

  var showNoteForCurrentPage = function() {
    var location = window.location.href ;
    var id = location.split("#")[1];
    var noteHtml = noteController.noteListView.notes.getNoteById(id).viewText();
    document.getElementById("app").innerHTML = noteHtml;
  };

  var noteController = new NoteController();
  noteController.changeText();
  window.addEventListener("hashchange", showNoteForCurrentPage);
});
