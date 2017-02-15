(function(exports) {

  var NoteController = function() {
    this.noteList = new NoteList();
    this.noteList.addNote("This is a test");
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeText = function() {
    this.elem = document.getElementById('app');
    this.elem.innerHTML = this.noteListView.notesToHTML();
  };

  exports.NoteController = NoteController;
})(this);




//
// var element = document.getElementById('app');
//
// console.log(element);
// content = element.innerHTML;
// console.log(content);
//
// element.innerHTML = "Howdy"
