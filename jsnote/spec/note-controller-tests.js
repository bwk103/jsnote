function noteControllerExists() {
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController);
}

function noteControllerStartsWithNoteList() {
  var noteController = new NoteController();
  assert.isTrue(noteController.noteList instanceof NoteList);
}

function noteControllerStartsWithNoteListView() {
  var noteController = new NoteController();
  assert.isTrue(noteController.noteListView instanceof NoteListView);
}

function noteControllerStartsWithNoteListViewWith1Note() {
  var noteController = new NoteController();
  assert.isTrue(noteController.noteListView.notes.list.length === 1);

}

function noteControllerChangesText() {
  var noteController = new NoteController();
  document.getElementById = function(){
    return {};
  };
  noteController.changeText();
  assert.isTrue(noteController.elem.innerHTML === "<ul><li><div>This is a test</div></li></ul>");

}

noteControllerExists();
noteControllerStartsWithNoteList();
noteControllerStartsWithNoteList();
// noteControllerStartsWithNoteListViewWith1Note();
// noteControllerChangesText();
