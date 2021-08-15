import GGS from '../images/GGSMM.png'
import MK from '../images/MKMM.png'
import T7 from '../images/T7MM'
function Home(){
    return (
        <div>
            <h2 id="navInfo">Welcome! Navigate to your desired location!</h2>
            <img src={MK} alt="mk"/>
            <img src={GGS} alt="ggs"/>
            <img src={T7} alt="t7" />
        </div>
        
    )
}

export default Home