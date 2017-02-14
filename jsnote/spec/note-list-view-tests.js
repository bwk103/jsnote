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

function takesAListWithOneItemAndReturnsHTMLString() {
  var todo = new NoteList();
  todo.addNote("Better Understand Javascript");
  var test = new NoteListView(todo);
  assert.isTrue(test.notesToHTML() === "<ul><li><div>Better Understand Javascript</div></li></ul>");
}

function takesAListWithMultipleItemAndReturnsHTMLString() {
  var todo = new NoteList();
  todo.addNote("Learn HTML");
  todo.addNote("Better Understand Javascript");
  var test = new NoteListView(todo);
  assert.isTrue(test.notesToHTML() === "<ul><li><div>Learn HTML</div></li><li><div>Better Understand Javascript</div></li></ul>");
}

noteListViewExists();
takesANoteListOnInitialization();
takesAListWithOneItemAndReturnsHTMLString();
takesAnEmptyListAndReturnsHTMLString();
takesAListWithMultipleItemAndReturnsHTMLString();
