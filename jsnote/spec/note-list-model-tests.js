// test notelist creates a new notelist object
// test that notelist stores an array of note models
// test that notelist.viewAll method returns all note models
function testNoteListExists() {
  var noteList = new NoteList();
  assert.isTrue(noteList instanceof NoteList);
}

function testNoteListReturnsAllNotes() {
  var noteList = new NoteList();
  noteList.addNote("hello");
  noteList.addNote("hi");
  assert.isTrue(noteList.viewAll = ["hello", "hi"]);
}

function testNoteListCreatesNewNotes() {
  var noteList = new NoteList();
  noteList.addNote("hi there");
  assert.isTrue(noteList.viewAll = ["hi there"]);
}

testNoteListExists();
testNoteListReturnsAllNotes();
testNoteListCreatesNewNotes();
