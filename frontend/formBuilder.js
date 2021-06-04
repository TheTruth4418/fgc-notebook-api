const api = new API()

class FormBuilder{
    constructor(type){
      this.type = type
      this.init = this.formMode(type);
    }
  
    formMode(type){
      removeChildNodes(form);
      switch(type){
        case "char":
          this.charForm();
          break;
        case "mu":
          this.muForm();
          break;
      }
    }
  
    charForm(){
      let self = this
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
  
      api.characters.forEach(char => {
        let opti = document.createElement("option")
        opti.value = char
        opti.innerHTML = char
        select1.append(opti)
        });
  
      content.append(form)
      form.append(label1,select1,br.cloneNode(),title,titleInput,br,submit)
      submit.addEventListener("click", function(event){ 
        event.preventDefault()
        self.submitCharForm(select1.value, titleInput.value)
      });
    }
  
    submitCharForm(char, charNote){
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
      .then(response => response.json())
      .then(data => alert(data.message));
    }
  
    muForm(){
      let self = this
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
      form.append(charLabel,charSelect,br,oppLabel,oppSelect,br.cloneNode(), title, titleInput, br.cloneNode(), submit)
      submit.addEventListener("click", function(event){ 
        event.preventDefault()
        self.submitMuForm(charSelect.value,oppSelect.value,titleInput.value)
      });
    }

    submitMuForm(char, opp, title){
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

  }