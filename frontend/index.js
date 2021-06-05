document.addEventListener('DOMContentLoaded', (x) => {
  console.log("DOM loaded up!")
});

let mode ;

/* Section initializers */
const form = document.createElement('form')
const content = document.getElementById("content")
const nav = document.querySelectorAll('.nav a')
const p = document.getElementById("instructions")
const br = document.createElement("br")
const cardDiv = document.createElement("div")
const cardImg = document.createElement('div')
const notes = document.createElement("div")

homeMode();

cardDiv.id = "infoCard"
notes.id = "notes"
cardImg.id = "charImg"

notes.classList = "left"
cardImg.classList = "right"

nav.forEach(link => {
  link.href=""
  link.addEventListener("click", event => {
      event.preventDefault()
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
  removeChildNodes(notes);
  removeChildNodes(cardImg);
  cardDiv.remove();
  document.body.append(cardDiv)
  cardDiv.append(notes,cardImg)
  p.innerHTML = "You are now in view mode. Matchup Notes or Viewer Notes?"

  let ul = document.createElement("ul")
  let li = document.createElement("li")
  let li2 = document.createElement("li")
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");

  li.append(button1)
  li2.append(button2)

  button1.innerText = "View Character Notes";
  button2.innerText = "View Matchup Notes";

  button1.id = "char"
  button2.id = "mu"
  let choice = "";
  ul.append(li,li2)
  content.append(ul);

  const choices = document.querySelectorAll('#content button')

  choices.forEach(button => {
    button.addEventListener("click", event => {
      removeChildNodes(cardImg);
      new NoteView(event.path[0].id);
    });
});
}

function createMode(){
  removeChildNodes(content);
  cardDiv.remove();
  notes.remove();
  p.innerHTML = "You are now in Create mode. Matchup Notes or Viewer Notes?"

  let ul = document.createElement("ul")
  let li = document.createElement("li")
  let li2 = document.createElement("li")
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");

  li.append(button1)
  li2.append(button2)

  button1.innerText = "Character Notes";
  button2.innerText = "Matchup Notes";

  button1.id = "char"
  button2.id = "mu"

  button1.classList = "choice"
  button2.classList = "choice"

  ul.append(li,li2)
  content.append(ul);

  const choices = document.querySelectorAll('#content button');

  choices.forEach(button => {
      button.addEventListener("click", event => {
          new FormBuilder(event.path[0].id);
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
