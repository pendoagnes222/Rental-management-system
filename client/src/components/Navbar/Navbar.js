import React from 'react'
import './Navbar.css'
import '../Navbar/SearchPage'
import { FaUserCircle, FaGlobe, FaSearch } from 'react-icons/fa'
import img from '../Images/Airbnb-logo.jpg'
import { useAuth, logout } from '../auth'

/*import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";*/
import { Link, useNavigate } from "react-router-dom"



const LoggedInLink = () => {
  const navigate = useNavigate();
  return (

    <div className='header__right'>
      <Link to='/logout'>
        <small onClick={() => logout()}>Log Out</small>
      </Link>

      <FaGlobe className='language' />
      {/*<button onClick={() =>{
              navigate("/loginpage")
            }}> Post  apartment</button>*/}

      <FaUserCircle className='user__icon'
        onClick={() => {
          navigate("/");
        }} />

    </div>
  )
}


const LoggedOutLinks = () => {

  const navigate = useNavigate();

  return (

    <div className='header__right'>
      <h1>apartments</h1>

      <FaGlobe className='language' />
      {/*<button onClick={() =>{
              navigate("/loginpage")
            }}> Post  apartment</button>*/}

      <FaUserCircle className='user__icon'
        onClick={() => {
          navigate("/loginpage");
        }} />
        

    </div>
  )
}


function Navbar() {


  const [logged] = useAuth();
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


      <div className='header__right'>

        {logged ? <LoggedInLink /> : <LoggedOutLinks />}
        <div />




      </div>




    </div>
  )
}

export default Navbar;
