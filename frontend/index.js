document.addEventListener('DOMContentLoaded', (x) => {
    console.log("DOM loaded up!")
});

let mode = "home"
const content = document.getElementById("content")
const nav = document.querySelectorAll('.nav button')
const p = document.getElementById("instructions")

function addNavSelectListener(){
    nav.forEach(button => {
        button.addEventListener("click", event => {
            mode = event.path[0].id;
            switchMode(mode);
        })
    })
}

function addChoiceSelectListener(choices){
    choices.forEach(button => {
        button.addEventListener("click", event => {
            return console.log(event.path[0].id);
        })
    })
}

function removeChildNodes(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function homeMode(){
    removeChildNodes(content);
    p.innerHTML = "Select From Nav which mode you want!"
}

function viewMode(){
    removeChildNodes(content);
    p.innerHTML = "You are now in view mode. Matchup Notes or Viewer Notes?"

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button1.innerText = "Character Notes";
    button2.innerText = "Matchup Notes";

    button1.id = "char"
    button2.id = "mu"

    content.append(button1, button2);

    const choices = document.querySelectorAll('#content button')
    addChoiceSelectListener(choices);
}

function createMode(){
    removeChildNodes(content);
    p.innerHTML = "You are now in Create mode. Matchup Notes or Viewer Notes?"

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button1.innerText = "Character Notes";
    button2.innerText = "Matchup Notes";

    button1.id = "char"
    button2.id = "mu"

    content.append(button1, button2);

    const choices = document.querySelectorAll('#content button');
    addChoiceSelectListener(choices);
}
// ___________________________________________________________________________________
addNavSelectListener();
switchMode(mode);

function switchMode(mode){
    switch(mode){
        case "home":
            homeMode();
            break;
        case "view":
            viewMode();
            break;
        case "create":
            createMode();
            break;
    }
}
