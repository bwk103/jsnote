function noteListViewExists() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView instanceof NoteListView);
}

function takesANoteListOnInitialization() {
  var test = new NoteList();
  var noteListView = new NoteListView(test);
  assert.isTrue(noteListView.notes == test);

}



noteListViewExists();
takesANoteListOnInitialization();
