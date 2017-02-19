window.onload = (function(){
  noteList = new NoteList();
  noteList.addNote("Why is this showing up then?");
  noteListView = new NoteListView(this.noteList);
  controller = new NoteController(noteListView);
  controller.changeText();
  changeUrlForSingleNote();
  checkWhetherFormSubmitted();
});
