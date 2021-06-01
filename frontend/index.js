document.addEventListener('DOMContentLoaded', (x) => {
    console.log("DOM loaded up!")
  });
  
let mode = "home"
const form = document.createElement('form')
const content = document.getElementById("content")
const nav = document.querySelectorAll('.nav button')
const p = document.getElementById("instructions")
const br = document.createElement("br")

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

function viewCharNotes(){
  let notesDiv = document.getElementById('notes')
  let charSelect = document.createElement("select")
  let submit = document.createElement("input")
  submit.setAttribute("type", "submit");

  charSelect.name = "char"
  submit.value = "Search"

  fetch('http://127.0.0.1:3000/characters')
    .then((response) => {
        return response.json();
    }).then((characters) => { assignChars(characters).forEach(char => {
        let option = document.createElement("option")
        option.value = char
        option.innerHTML = char
        charSelect.append(option)
        });
    });

  content.append(form)
  form.append(charSelect,submit)
  submit.addEventListener("click", function(event){ 
    event.preventDefault();
    removeChildNodes(notesDiv)
    searchAndListCharNotes(charSelect.value);
  });
}

function searchAndListCharNotes(arg){
  let notesDiv = document.getElementById('notes')
  return fetch( 'http://127.0.0.1:3000//characters/:id/character_notes/:id', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        arg
      } )
    } )
    .then((response) => {
        return response.json();
    }).then((data) => {
      console.log(data)
      if (data.character_notes){
      data.character_notes.forEach(charNote => {
        const ul = document.createElement("ul")
        ul.innerHTML = charNote.title
        const newNote = document.createElement("button")
        newNote.innerHTML = "Add a Note "
        const del = document.createElement("button")
        del.innerHTML = "Delete title"
        ul.append(del)
        charNote.notes.forEach(note => {
          const delNote = document.createElement("button")
          delNote.innerHTML = "Delete Note"
          const li = document.createElement("li")
          li.innerHTML = note.description
          ul.append(li,delNote) 
          delNote.addEventListener("click",function(){deleteNote(note, 'char')})
        })
        ul.append(newNote)
        notesDiv.append(ul)
        newNote.addEventListener("click",function(){ createNewNote(charNote,'char') })
        del.addEventListener("click",function(){deleteCharNote(charNote)})
      }); 
    } else {
      let p = document.createElement("p")
      p.innerHTML = data.message
      notesDiv.append(p)
    }
    });
}

function viewMuNotes() {
  console.log("Viewing Matchup Notes")
  let notesDiv = document.getElementById('notes')
  let charSelect = document.createElement("select")
  let oppSelect = document.createElement("select")
  let submit = document.createElement("input")
  submit.setAttribute("type", "submit");

  charSelect.name = "char"
  oppSelect.name = "opp"
  submit.value = "Search"

  fetch('http://127.0.0.1:3000/characters')
    .then((response) => {
        return response.json();
    }).then((characters) => { assignChars(characters).forEach(char => {
        let option = document.createElement("option")
        let option2 = document.createElement("option")
        option.value = char
        option.innerHTML = char
        option2.value = char
        option2.innerHTML = char
        charSelect.append(option)
        oppSelect.append(option2)
        });
    });

content.append(form)
  form.append(charSelect,oppSelect,submit)
  submit.addEventListener("click", function(event){ 
    event.preventDefault();
    removeChildNodes(notesDiv)
    searchAndListMuNotes(charSelect.value, oppSelect.value);
  });
}

function searchAndListMuNotes(char, opp){
  let notesDiv = document.getElementById('notes')
  return fetch( 'http://127.0.0.1:3000//characters/:id/matchup_notes/:id', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        char,
        opp
      } )
    } )
    .then((response) => {
        return response.json();
    }).then((data) => {
      console.log(data)
      if (data.matchup_notes) {
       data.matchup_notes.forEach(muNote => {
        const ul = document.createElement("ul")
        ul.innerHTML = muNote.title;
        const newNote = document.createElement("button")
        newNote.innerHTML = "Add a Note "
        const del = document.createElement("button")
        del.innerHTML = "Delete title"
        ul.append(del)
        muNote.notes.forEach(note => {
          const delNote = document.createElement("button")
          delNote.innerHTML = "Delete Note"
          const li = document.createElement("li")
          li.innerHTML = note.description
          ul.append(li, delNote) 
          delNote.addEventListener("click",function(){deleteNote(note, 'mu')})
        })
        ul.append(br,newNote)
        notesDiv.append(ul);
        newNote.addEventListener("click",function(){ createNewNote(muNote, 'mu') })
        del.addEventListener("click",function(){ deleteMuNote(muNote)})
      });} else {
        let p = document.createElement("p")
        p.innerHTML = data.message;
        notesDiv.append(p)
      } 
    })
}

function createNewNote(arg, type = 'char'){

  if (document.getElementById("newNote")){
    document.getElementById("newNote").remove()
  }
  let titleId = arg.id
  let form2 = document.createElement("form")
  form2.id = "newNote"
  let descLabel = document.createElement("label")
  let desc = document.createElement("input")
  let submit = document.createElement("input")
  let body ;

  descLabel.innerHTML = `Add to: ${arg.title}`
  submit.setAttribute("type", "submit")
  form2.append(descLabel,desc,br,submit)
  document.getElementById("notes").append(form2)

  submit.addEventListener("click", function(event){ 
    event.preventDefault()
    submitNewNote(titleId,type,desc.value)
});
}

function submitNewNote(titleId, type, desc){
  let notes = document.getElementById("notes")
  let char =  document.getElementsByName("char")[0].value

   return fetch( 'http://127.0.0.1:3000/notes/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        titleId,
        type,
        desc
      } )
    } )
    .then((response) => {
        return response.json();
    }).then((data) => {
      removeChildNodes(notes);
      if (type === 'mu'){
        console.log(data)
        let opp = document.getElementsByName("opp")[0].value
        searchAndListMuNotes(char, opp);
      } else {
        console.log(data)
        searchAndListCharNotes(char)
      };
    });
}

function deleteNote(note,type){
  const noteId = note.id
  let choice = confirm("Are you sure you want to delete this note?")
  if(choice === true){
    return fetch( `http://127.0.0.1:3000/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    } )
    .then((response) => {
      let char =  document.getElementsByName("char")[0].value
      removeChildNodes(document.getElementById("notes"))
      if (type === 'mu'){
        let opp = document.getElementsByName("opp")[0].value
        searchAndListMuNotes(char, opp);
      } else {
        searchAndListCharNotes(char);
      }
    });
  }
}

function deleteCharNote(note){
  let noteId = note.id
  let choice = confirm("Are you sure you want to delete this note?")
  if(choice === true){
    return fetch( `http://127.0.0.1:3000/character_notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    } )
    .then((response) => {
      let char =  document.getElementsByName("char")[0].value
      removeChildNodes(document.getElementById("notes"))
      searchAndListCharNotes(char);
    });
  }
}

function deleteMuNote(note){
  const noteId = note.id
  console.log(noteId)
  let choice = confirm("Are you sure you want to delete this note?")
  if(choice === true){
    return fetch( `http://127.0.0.1:3000/matchup_notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    } )
    .then((response) => {
      let char =  document.getElementsByName("char")[0].value
      let opp = document.getElementsByName("opp")[0].value
      removeChildNodes(document.getElementById("notes"))
      searchAndListMuNotes(char, opp);
    });
  }
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
          switchFormMode(event.path[0].id);
      });
  });
}

function charForm() {
  const label1 = document.createElement("label")
  const select1 = document.createElement("select")
  const title = document.createElement("label")
  const titleInput = document.createElement("input")
  const submit = document.createElement("input")
  let br = document.createElement("br")

  
  title.innerHTML = "Title of Note:"
  titleInput.setAttribute("type", "text");
  titleInput.name = "character[character_note]"
  titleInput.placeholder = "Title of Note"
  select1.name = "character"
  submit.setAttribute("type", "submit");

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
  form.append(label1,select1,br.cloneNode(),title,titleInput,br,submit)
  submit.addEventListener("click", function(event){ 
      event.preventDefault()
      submitCharForm(select1.value, titleInput.value)
  });
}

function submitCharForm(char, charNote){
  return fetch( 'http://127.0.0.1:3000/characters/:id/character_note/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        char,
        charNote
      } )
    } )
    .then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message)
    });
}

function muForm() {
  const charLabel = document.createElement("label")
  const charSelect = document.createElement("select")
  const oppLabel = document.createElement("label")
  const oppSelect = document.createElement("select")
  const title = document.createElement("label")
  const titleInput = document.createElement("input")
  const submit = document.createElement("input")
  const br = document.createElement("br")

  title.innerHTML = "Title of Note:"
  titleInput.setAttribute("type", "text");
  titleInput.name = "character[matchup_note]"
  titleInput.placeholder = "Title of Note"
  charLabel.innerHTML = "Character"
  oppLabel.innerHTML = "Opponent"
  charSelect.name = "character"
  oppSelect.name = "opponent"
  submit.setAttribute("type", "submit");

  fetch('http://127.0.0.1:3000/characters')
    .then((response) => {
        return response.json();
    }).then((characters) => { assignChars(characters).forEach(char => {
        let option = document.createElement("option")
        let option2 = document.createElement("option")
        option.value = char
        option.innerHTML = char
        option2.value = char
        option2.innerHTML = char
        charSelect.append(option)
        oppSelect.append(option2)
        });
    });

content.append(form)
form.append(charLabel,charSelect,br,oppLabel,oppSelect,br.cloneNode(), title, titleInput, br.cloneNode(), submit)
  submit.addEventListener("click", function(event){ 
      event.preventDefault()
      submitMuForm(charSelect.value,oppSelect.value,titleInput.value)
  });
}

function submitMuForm(char, opp, title){
  return fetch( 'http://127.0.0.1:3000/characters/:id/matchup_note/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        char,
        opp,
        title
      } )
    } )
    .then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message)
    });
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

function switchViewMode(view){
  removeChildNodes(form);
  removeChildNodes(document.getElementById("notes"))
  switch(view){
    case "char":
      viewCharNotes();
      break;
    case "mu":
      viewMuNotes();
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
function testFetch(link){
return fetch(link)
  .then(resp => resp.json())
  .then(json => console.log(json))
}  
addNavSelectListener();
function hi() {
  console.log("hi")
}