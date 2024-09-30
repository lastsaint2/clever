import pic from '../assets/alex.png';
import '../assets/home.css'




const Home =()=>{
    return(
        <>
         <div className="main">
            <h1><span class='hello'>H</span>ello.</h1>
            <h1><span class='me'>I</span>'m <span class='a'>A</span>lex <span class='s'>S</span>ibomana</h1>
            <h3><span class='back'>Backend Developer</span>.I have Two Years of Experience</h3>
            
        </div>
        <div className="container">
         <img src={pic} alt="logo" />
        
        </div>
       
        
        </>
    )
}
export default Home