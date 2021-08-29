import MatchupNoteList from "./MatchupNoteList";
import vs from "../images/vs.png"

function MatchupNoteCard(props){
    let note = props.note
    let game =  window.location.pathname.split("/")[3].split("%20").join(" ")
    let notesArr = []
    let char = note.char;
    let opp = note.opp;
    //notesArr = note.notes.map((ele, index) => (<MatchupNoteList muNote={ele} key={index} char={props.character} opp={props.opponent}/> ))
    console.log(note)

  return (
      <p>jo</p>
       /*  <div className="noteCard">
            <h1 className="characters">{`${char} vs. ${opp}`}</h1>
            <div className="cardImg">
                <img src={require(`../images/${game}/${char}.png`).default} alt=""/>
            </div>

            <div className="cardImg">
                <img src={vs} alt="" id="vs2"/>
            </div>

            <div className="cardImg">
                <img src={require(`../images/${game}/${opp}.png`).default} alt=""/>
            </div>
            {notesArr.length === 0 ? <h3>{`No notes found for ${char} vs ${opp}`}</h3>: <p>hi</p> }
        </div> */
    ) 
  }

export default MatchupNoteCard