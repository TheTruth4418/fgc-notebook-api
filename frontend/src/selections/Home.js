import GGS from '../images/GGSMM.png'
import MK from '../images/MKMM.png'
import T7 from '../images/T7MM.png'
function Home(){
    let instructions = localStorage.token ? "Welcome! Navigate to your desired location!" : "Please Login or Signup to utilize!";
    return (
        <div>
            <h2 id="navInfo">{instructions}</h2>
            <img src={MK} alt="mk"/>
            <img src={GGS} alt="ggs"/>
            <img src={T7} alt="t7" />
        </div>
        
    )
}

export default Home