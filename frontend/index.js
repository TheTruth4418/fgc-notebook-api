document.addEventListener('DOMContentLoaded', (x) => {
    console.log("DOM loaded up!")
});

let mode = "home"
let p = document.getElementById("test")
document.body.append(p)
p.innerText = mode

function addModeSelectListener(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            mode = event.path[0].id;
            p.innerText = mode
        })
    })
}

addModeSelectListener();

function createForms(){
    console.log("hello")
}

createForms();

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
