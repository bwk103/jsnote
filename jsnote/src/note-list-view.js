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
      htmlString += this.notes.list[i].getID();
      htmlString += "'>";
      htmlString += this.notes.list[i].viewText().substr(0,20);
      htmlString += "</a></div></li>";
      }
    htmlString += "</ul>";
    return htmlString;
  };


  exports.NoteListView = NoteListView;
})(this);
//
//
// <body>
//    <a href="#tiger">Tiger</a> |
//    <a href="#lion">Lion</a> |
//    <a href="#cheetah">Cheetah</a> |
//    <a href="#leopard">Leopard</a>
//
//    <div id="animal"></div>
//
//    <script>
//      makeUrlChangeShowAnimalForCurrentPage();
//
//      function makeUrlChangeShowAnimalForCurrentPage() {
//        window.addEventListener("hashchange", showAnimalForCurrentPage);
//      };
//
//      function showAnimalForCurrentPage() {
//        showAnimal(getAnimalFromUrl(window.location));
//      };
//
//      function getAnimalFromUrl(location) {
//        return location.hash.split("#")[1];
//      };
//
//      function showAnimal(animal) {
//        document
//          .getElementById("animal")
//          .innerHTML = animal;
//      };
