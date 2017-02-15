
(function(exports) {

  var NoteView = function(note) {
    this.note = note;
  };

  NoteView.prototype.noteToHTML = function() {
    var htmlString = "<div>";
    htmlString += this.note.viewText();
    htmlString += "</div>";
    return htmlString;
  };

  exports.NoteView = NoteView;
})(this);
