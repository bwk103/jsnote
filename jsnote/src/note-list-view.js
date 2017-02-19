(function(exports) {

  var NoteListView = function(notelist) {
    this.notes = notelist;
  };

  NoteListView.prototype.notesToHTML = function() {
    var arrayLength = this.notes.list.length;
    var htmlString = "<ul>";
    for (var i = 0; i < arrayLength; i++) {
      htmlString += "<li><div>";
      htmlString += "<a href='#notes/";
      htmlString += this.notes.list[i].getId();
      htmlString += "'>";
      htmlString += this.notes.list[i].viewText().substr(0,20);
      htmlString += "</a></div></li>";
      }
    htmlString += "</ul>";
    return htmlString;
  };


  exports.NoteListView = NoteListView;
})(this);
