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
        let img1 = document.createElement("img")
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
            img1.src = `imgs/MK11/${charSelect.value}.png`
            img1.id = "charImg"
            cardImg.append(img1)
            api.fetchCharNotes(charSelect.value);
        });
    }

    muNotes(){
        let notesDiv = document.getElementById('notes')
        let label1 = document.createElement("label")
        let vs = document.createElement("label")
        let charSelect = document.createElement("select")
        let oppSelect = document.createElement("select")
        let img1 = document.createElement("img")
        let img1Div = document.createElement("div")
        let vsImg = document.createElement("img")
        let vsDiv = document.createElement("div")
        let img2 = document.createElement("img")
        let img2Div = document.createElement("div")
        let submit = document.createElement("input")
        submit.setAttribute("type", "submit");

        img1Div.classList="column"
        img2Div.classList="column"
        vsDiv.classList="column"
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
            img1.src = `imgs/MK11/VS ${charSelect.value}.png`
            img1.id = "charLeft"
            vsImg.src  = `imgs/MK11/VS.png`
            vsImg.id = "vs"
            img2.src = `imgs/MK11/VS ${oppSelect.value}.png`
            img2.id = "charRight"
            removeChildNodes(notesDiv)
            img1Div.append(img1)
            vsDiv.append(vsImg)
            img2Div.append(img2)
            cardImg.append(img1Div,vsDiv,img2Div)
            api.fetchMuNotes(charSelect.value, oppSelect.value);
        });
    }
}