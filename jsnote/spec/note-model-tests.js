function testNoteModel() {
  var note = new Note();

    if (!(note instanceof Note)) {
      throw new Error("note is not a Note!");
    }
  }

//   if (note.viewText() !== note.text) {
//     throw new Error("Circle size is not 10");
//   }
// };
//
// testCircleRadiusDefaultsTo10();
