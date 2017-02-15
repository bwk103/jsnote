(function(exports) {
  var Note = function(text) {
    this.text = text;
  };

  Note.prototype.setID = function(id) {
    this.id = id;
  }

  Note.prototype.viewText = function() {
    return this.text;
  };

  Note.prototype.getID = function() {
    return this.id;
  }

  exports.Note = Note;
})(this);
