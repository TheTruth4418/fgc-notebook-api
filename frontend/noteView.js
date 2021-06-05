class NoteView{
    constructor(type){
        this.type = type
        this.init = this.viewType(type)
    }

    viewType(type){
        removeChildNodes(form);
        removeChildNodes(document.getElementById("notes"))
        switch(type){
            case "char":
            this.charNotes();
            break;
            case "mu":
            this.muNotes();
            break;
        }
    }

    charNotes(){
        let notesDiv = document.getElementById('notes')
        let label1 = document.createElement("label")
        let charSelect = document.createElement("select")
        let submit = document.createElement("input")
        submit.setAttribute("type", "submit");

        label1.innerHTML = "CHARACTER "
        charSelect.name = "char"
        submit.value = "Search"

        api.characters.forEach(char => {
            let opti = document.createElement("option")
            opti.value = char
            opti.innerHTML = char
            charSelect.append(opti)
        });

        content.append(form)
        form.append(label1,charSelect,submit)
        submit.addEventListener("click", function(event){ 
            event.preventDefault();
            removeChildNodes(notesDiv)
            api.fetchCharNotes(charSelect.value);
        });
    }

    muNotes(){
        let notesDiv = document.getElementById('notes')
        let label1 = document.createElement("label")
        let vs = document.createElement("label")
        let charSelect = document.createElement("select")
        let oppSelect = document.createElement("select")
        let submit = document.createElement("input")
        submit.setAttribute("type", "submit");

        charSelect.name = "char"
        oppSelect.name = "opp"
        submit.value = "Search"
        label1.innerHTML="CHARACTER "
        vs.innerHTML="VS."

        api.characters.forEach(char => {
            let option = document.createElement("option")
            let option2 = document.createElement("option")
            option.value = char
            option.innerHTML = char
            option2.value = char
            option2.innerHTML = char
            charSelect.append(option)
            oppSelect.append(option2)
        });

        content.append(form)
        form.append(label1,charSelect,vs,oppSelect,submit)
            submit.addEventListener("click", function(event){ 
            event.preventDefault();
            removeChildNodes(notesDiv)
            api.fetchMuNotes(charSelect.value, oppSelect.value);
        });
    }
}