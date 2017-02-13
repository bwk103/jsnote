// function Note(text) {
//   this.text = text;
// }
//
// Note.prototype.viewText = function() {
//   return this.text;
// }
//

(function(exports) {
  function Note(text) {
    this.text = text;
  }

  Note.prototype.viewText = function() {
    return this.text;
  };

  exports.Note = Note;
  exports.Note.viewText = Note.viewText;
})(this);
