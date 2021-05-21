document.addEventListener('DOMContentLoaded', (x) => {
    console.log("DOM loaded up!")
});

let mode = "home"

function addModeSelectListener(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            console.log(event.path[0].id);
            mode = event.path[0].id
        })
    })
}

function createForms(){

}

function pullUpNotes(){
    
}

class Note {
    constructor(character,title,notes) {
        this.character = character
        this.title = title
        this.notes = notes
    }
}

class View {

}
