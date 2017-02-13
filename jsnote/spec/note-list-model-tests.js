// test notelist creates a new notelist object
// test that notelist stores an array of note models
// test that notelist.viewAll method returns all note models
function testNoteListExists() {
  var noteList = new NoteList();
  assert.isTrue(noteList instanceof NoteList);
};

function testNoteListStoresNotes() {
  var note1 = new Note("hello");
  var noteList = new NoteList();
  noteList.addNote(note1);
  assert.isTrue(noteList.list.includes("hello"));
};

function testNoteListReturnsAllNotes() {
  var note1 = new Note("hello");
  var note2 = new Note("hi");
  var noteList = new NoteList();
  noteList.addNote(note1);
  assert.isTrue(noteList.viewAll = ["hello", "hi"]);
};

function testNoteListCreatesNewNotes() {
  var noteList = new NoteList();
  noteList.createNote("hi there");
  assert.isTrue(noteList.viewAll = ["hi there"]);
}

testNoteListExists();
testNoteListStoresNotes();
testNoteListReturnsAllNotes();
testNoteListCreatesNewNotes();

// function testNoteContainsText() {
//   var note = new Note("My favourite language is JavaScript");
//   assert.isTrue(note.text === "My favourite language is JavaScript");
// };
//
// function testViewReturnsText() {
//   var note = new Note("My favourite language is JavaScript");
//   assert.isTrue(note.viewText() === "My favourite language is JavaScript");
// };
//
// testNoteIsNote();
// testNoteContainsText();
// testViewReturnsText();
