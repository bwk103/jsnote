function Note(text) {
  this.text = text;
}

Note.prototype.viewText = function() {
  return this.text;
}


// function(exports) {
//   var text = text
//   function viewText() {
//     return text;
//   };
//   exports.viewText = viewText;
// }(this));
