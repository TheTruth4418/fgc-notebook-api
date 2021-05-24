
function Form (type){
    this.type = type
}

Form.prototype.characterForm = function() {
    console.log("Character Form");
}

Form.prototype.matchupForm = function() {
    console.log("Mathcup Form");
}

/* function Character() {
    Form.call(this, 'character ')
}
Character.prototype = Object.create(Form.prototype) */

console.log(character)
//class Note {
 //   constructor(character,title,notes) {
  //      this.character = character
   //     this.title = title
   //     this.notes = notes
  //  }
//}