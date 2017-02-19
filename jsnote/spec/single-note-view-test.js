
function takesANoteAndReturnsAHTMLString() {
  var note = new Note("Favourite drink: seltzer");
  var noteView = new NoteView(note);
  assert.isTrue(noteView.noteToHTML() === "<div>Favourite drink: seltzer</div>");
}

takesANoteAndReturnsAHTMLString();
