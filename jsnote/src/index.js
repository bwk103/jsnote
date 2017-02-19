window.onload = (function(){
  noteList = new NoteList();
  noteList.addNote("This is a test"); // delete this!
  noteList.addNote("Hello, World!");
  noteList.addNote("Will this work?");
  noteList.addNote("Here's another test!");
  var noteListView = new NoteListView(this.noteList);
  controller = new NoteController(noteListView);
  controller.changeText();
  changeUrlForSingleNote();
});
