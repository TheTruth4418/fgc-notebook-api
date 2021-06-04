document.addEventListener('DOMContentLoaded', (x) => {
  console.log("DOM loaded up!")
});

let mode ;
const form = document.createElement('form')
const content = document.getElementById("content")
const nav = document.querySelectorAll('.nav button')
const p = document.getElementById("instructions")
const br = document.createElement("br")
homeMode();

nav.forEach(button => {
  button.addEventListener("click", event => {
      mode = event.path[0].id;
      switchMode(mode)
  })
})

function homeMode(){
  removeChildNodes(content);
  p.innerHTML = "Select From Nav which mode you want!"
}

function viewMode(){
  removeChildNodes(content);
  let notes = document.createElement("div")
  notes.id = "notes"
  document.body.append(notes)
  p.innerHTML = "You are now in view mode. Matchup Notes or Viewer Notes?"

  let button1 = document.createElement("button");
  let button2 = document.createElement("button");

  button1.innerText = "View Character Notes";
  button2.innerText = "View Matchup Notes";

  button1.id = "char"
  button2.id = "mu"
  let choice = "";
  content.append(button1, button2);

  const choices = document.querySelectorAll('#content button')

  choices.forEach(button => {
    button.addEventListener("click", event => {
        switchViewMode(event.path[0].id);
    });
});
}

function createMode(){
  removeChildNodes(content);
  if (document.getElementById('notes')){
    document.getElementById('notes').remove()
  }
  p.innerHTML = "You are now in Create mode. Matchup Notes or Viewer Notes?"

  let button1 = document.createElement("button");
  let button2 = document.createElement("button");

  button1.innerText = "Character Notes";
  button2.innerText = "Matchup Notes";

  button1.id = "char"
  button2.id = "mu"

  button1.classList = "choice"
  button2.classList = "choice"

  content.append(button1, button2);

  const choices = document.querySelectorAll('#content button');

  choices.forEach(button => {
      button.addEventListener("click", event => {
          new FormBuilder(event.path[0].id);
      });
  });
}

function viewMode(){
  removeChildNodes(content);
  let notes = document.createElement("div")
  notes.id = "notes"
  document.body.append(notes)
  p.innerHTML = "You are now in view mode. Matchup Notes or Viewer Notes?"

  let button1 = document.createElement("button");
  let button2 = document.createElement("button");

  button1.innerText = "View Character Notes";
  button2.innerText = "View Matchup Notes";

  button1.id = "char"
  button2.id = "mu"
  let choice = "";
  content.append(button1, button2);

  const choices = document.querySelectorAll('#content button')

  choices.forEach(button => {
    button.addEventListener("click", event => {
        new NoteView(event.path[0].id);
    });
});
}

function removeChildNodes(parent) {
  while (parent.firstChild){
      parent.removeChild(parent.firstChild)
  }
}

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
