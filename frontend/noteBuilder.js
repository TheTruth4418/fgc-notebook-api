class NoteBuilder{
    constructor(note,type){
        this.note = note
        this.type = type
    }

    createNewNote(){
        let builder = this;
        if (document.getElementById("newNote")){
            document.getElementById("newNote").remove()
          }
          let titleId = this.note.id
          let form2 = document.createElement("form")
          form2.id = "newNote"
          let descLabel = document.createElement("label")
          let desc = document.createElement("input")
          let submit = document.createElement("input")
          let body ;
        
          descLabel.innerHTML = `Add to: ${this.note.title}`
          submit.setAttribute("type", "submit")
          form2.append(descLabel,desc,br,submit)
          document.getElementById("notes").append(form2)
        
          submit.addEventListener("click", function(event){ 
            event.preventDefault()
            builder.submitNewNote(titleId,this.type,desc.value)
        });
    }

    deleteNote(){
        const noteId = this.note.id
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

}