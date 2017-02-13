// function testNoteModel() {
function testNoteIsNote() {
  var note = new Note();
  assert.isTrue(note instanceof Note);
};

function testNoteContainsText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

function testViewReturnsText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.viewText() === "My favourite language is JavaScript");
};

testNoteIsNote();
testNoteContainsText();
testViewReturnsText();
