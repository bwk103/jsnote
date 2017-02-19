function noteControllerExists() {
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController);
}

function noteControllerStartsWithNoteList() {
  var noteController = new NoteController();
  assert.isTrue(noteController.noteList instanceof NoteList);
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
// noteControllerStartsWithNoteListViewWith1Note();
// noteControllerChangesText();
