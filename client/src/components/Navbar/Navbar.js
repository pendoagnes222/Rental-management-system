import React from 'react'
import './Navbar.css'
import { FaUserCircle, FaGlobe,FaSearch} from 'react-icons/fa'
import img from '../Images/Airbnb-logo.jpg' 

/*import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";*/
import { Link, useNavigate} from "react-router-dom"
function Navbar() {
  
  let navigate = useNavigate();
  return (
    <div className='header'>
        <Link to="/">
        <img
            className="header__icon"

            src={img}
           // src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="BandB Solutions"
        
        />
        </Link>
        <div className='header__center'>
        <button onClick={() => navigate('/searchpage')}
             variant='outlined'>Search<FaSearch className='icon'/>
            </button>
                {/*<input type="text" />
                   <FaSearch/>*/}
         </div>

         <div className='header__right'>
          <h1>apartments</h1>

                <FaGlobe className='language'/>
                {/*<button onClick={() =>{
                  navigate("/loginpage")
                }}> Post  apartment</button>*/}
              
                <FaUserCircle  className='user__icon'
               onClick={() =>{
            navigate("/loginpage");
           }} />
           
                
            
                
            </div>
        

   
    
</div>
)
}

export default Navbar;
