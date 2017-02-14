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
  assert.isTrue(noteController.noteListView.notes.list.length === 0);

}

// function noteControllerChangesText() {
//   var noteController = new NoteController();
//   noteController.noteListView.notes.createNote("This is a test");
//   console.log('')
//   noteController.changeText();
//   var element = document.getElementById('app');
//   console.log(element.innerHTML);
//   assert.isTrue(element.innerHTML === "This is a test");
//
// }

noteControllerExists();
noteControllerStartsWithNoteList();
noteControllerStartsWithNoteList();
noteControllerStartsWithNoteListViewWith1Note();
noteControllerChangesText();
