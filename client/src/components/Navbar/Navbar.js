import React from 'react'
import './Navbar.css'
import { FaSearch , FaAngleDown, FaUserCircle, FaGlobe} from 'react-icons/fa'


/*import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";*/
import { useNavigate} from "react-router-dom"
function Navbar() {
  let navigate = useNavigate();
  return (
    <div className='header'>
    
        <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
        
        />
        <div className='header__center'>
                <input type="text" />
                   <FaSearch/>
         </div>

         <div className='header__right'>
                <p>Become a host</p>
                <FaGlobe className='language'/>
                <FaAngleDown />
                <FaUserCircle  className='user__icon'
               onClick={() =>{
            navigate("/loginpage");
           }} />
                
            </div>
        

   
    
</div>
)
}

export default Navbar;
