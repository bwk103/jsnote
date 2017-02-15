function noteListViewExists() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView instanceof NoteListView);
}

function takesANoteListOnInitialization() {
  var test = new NoteList();
  var noteListView = new NoteListView(test);
  assert.isTrue(noteListView.notes == test);
}

function takesAnEmptyListAndReturnsHTMLString() {
  var todo = new NoteList();
  var test = new NoteListView(todo);
  assert.isTrue(test.notesToHTML() === "<ul></ul>");
}

function takesAListWithMultipleItemAndReturnsHTMLString20chars() {
  var todo = new NoteList();
  todo.addNote("A-345678901234567890123");
  todo.addNote("B-345678901234567890123");
  var test = new NoteListView(todo);
  assert.isTrue(test.notesToHTML() === "<ul><li><div>A-345678901234567890</div></li><li><div>B-345678901234567890</div></li></ul>");
}

noteListViewExists();
takesANoteListOnInitialization();
takesAnEmptyListAndReturnsHTMLString();
// takesAListWithMultipleItemAndReturnsHTMLString20chars();
