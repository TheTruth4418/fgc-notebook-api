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

  button1.innerText = "View Character Notes";
  button2.innerText = "View Matchup Notes";

  button1.id = "char"
  button2.id = "mu"
  let choice = "";
  content.append(button1, button2);

  const choices = document.querySelectorAll('#content button')
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

  button1.classList = "choice"
  button2.classList = "choice"

  content.append(button1, button2);

  const choices = document.querySelectorAll('#content button');

  choices.forEach(button => {
      button.addEventListener("click", event => {
          form = new Form(event.path[0].id);
      });
  });
}
// Create the forms via prototypes
function Form (type){
  this.type = type
  let formDiv = document.getElementById("formDiv")
  setupFormDiv(formDiv, "formDiv");
  switch(type){
      case "char":
          this.characterForm();
          break;
      case "mu":
          this.matchupForm();
          break;
  };
};

Form.prototype.characterForm = function() {  
  let div = document.createElement("div")
  let form = document.createElement('form');

  let label1 = document.createElement("label")
  let select1 = document.createElement("select")

  div.id = "formDiv"
  
  label1.innerHTML = "Character Name"

  fetch('http://127.0.0.1:3000/characters')
    .then((response) => {
        return response.json();
    }).then((characters) => { assignChars(characters).forEach(char => {
      let opti = document.createElement("option")
      opti.value = char
      opti.innerHTML = char
      select1.append(opti)
      });
    });

  document.body.append(div)
  div.append(form);
  form.append(label1, select1);
}

Form.prototype.matchupForm = function() {
  console.log("Mathcup Form");
  let form = document.createElement('form')
}

// ___________________________________________________________________________________
addNavSelectListener();


function switchForm(choice){
  switch(choice){
      case "char":
          createForm();
          break;
      case "mu":
          matchupForm();
          break;
      default:
          console.log("this case dosent match any valid ones please try again!")
          break;
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

function assignChars(arg) {
  let x = 0
  arr = [];
  while (x < arg.length){
      arr.push(arg[x].name)
      x++
  }
  return arr
}

function setupFormDiv(ele, divId){
  if (ele === null){
      let d = document.createElement("div")
      d.id = divId
      content.append(d)
      return ele = d
  } else {
      removeChildNodes(ele)
  }
}
