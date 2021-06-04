class API {
    constructor(){
      this.init = this.fetchChars()
    }
  
     fetchChars() {
      return fetch('http://127.0.0.1:3000/characters')
        .then(response => response.json())
        .then(data => {
            let x = 0
            this.characters = [];
            while (x < data.length){
                this.characters.push(data[x].name)
                x++
            }
        })
}
    

    fetchCharNotes(arg){
        let self = this
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
                    delNote.addEventListener("click",function(){api.deleteNote(note, 'char')})
                })
                ul.append(newNote)
                notesDiv.append(ul)
                newNote.addEventListener("click",function(){api.createNewNote(charNote,'char') })
                del.addEventListener("click",function(){api.deleteCharNote(charNote)})
                }); 
            } else {
                let p = document.createElement("p")
                p.innerHTML = data.message
                notesDiv.append(p)
            }
            });
    }

    fetchMuNotes(char, opp){
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
                delNote.addEventListener("click",function(){api.deleteNote(note, 'mu')})
              })
              ul.append(br,newNote)
              notesDiv.append(ul);
              newNote.addEventListener("click",function(){api.createNewNote(muNote, 'mu') })
              del.addEventListener("click",function(){api.deleteMuNote(muNote)})
            });} else {
              let p = document.createElement("p")
              p.innerHTML = data.message;
              notesDiv.append(p)
            } 
          })
    }

    submitNewNote(titleId, type, desc){
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
        api.fetchMuNotes(char, opp);
      } else {
        console.log(data)
        api.fetchCharNotes(char)
      };
    });
    }

    createNewNote(arg, type='char'){
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
            api.submitNewNote(titleId,type,desc.value)
        });
    }

    deleteNote(note,type){
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
              api.fetchMuNotes(char, opp);
            } else {
              api.fetchCharNotes(char);
            }
          });
        }
    }

    deleteCharNote(note){
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
            api.fetchCharNotes(char);
          });
        }
      }

      deleteMuNote(note){
        const noteId = note.id
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
            api.fetchMuNotes(char, opp);
          });
        }
      }

  }