(function(exports) {

  var NoteController = function() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeText = function() {
    var html = this.noteListView.notesToHTML();
    var element = document.getElementById('app');
    element.innerHTML = html;
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
