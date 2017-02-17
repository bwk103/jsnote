(function(exports) {
  var Note = function(text) {
    this.text = text;
  };

  Note.prototype.setId = function(id) {
    this.id = id;
  };

  Note.prototype.viewText = function() {
    return this.text;
  };

  Note.prototype.getId = function() {
    return this.id;
  };

  exports.Note = Note;
})(this);
