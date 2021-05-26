document.addEventListener('DOMContentLoaded', (x) => {
    console.log("DOM loaded up!")
  });
  
  let mode = "home"
  const form = document.createElement('form')
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
            switchFormMode(event.path[0].id);
        });
    });
  }
  
  function charForm() {
    form.action = 'http://127.0.0.1:3000/characters/:id/character_note'
    let label1 = document.createElement("label")
    let select1 = document.createElement("select")
  
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
  
    content.append(form)
    form.append(label1,select1)
  }
  
  function muForm() {
    form.action = 'some other action'
    let label1 = document.createElement("label")
    let select1 = document.createElement("select")
  
  
  }
  
  function switchFormMode(mode) {
    removeChildNodes(form);
    switch(mode){
      case "char":
        charForm();
        break;
      case "mu":
        muForm();
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
  addNavSelectListener();