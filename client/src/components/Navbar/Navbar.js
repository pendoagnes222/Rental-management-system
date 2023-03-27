import React from 'react'
import './Navbar.css'
import { FaUserCircle, FaGlobe,FaSearch} from 'react-icons/fa'

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
            src="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=031752648e&attid=0.1&permmsgid=msg-a:r-4915435381907925310&th=1872298e500a24d1&view=att&disp=safe&realattid=1872298b2df31cdc09a1&saddbat=ANGjdJ-Au7fk9n-cm9BiZgTdxIkcfSElolSXeRk8JpIY8uoW7xV70TWG4PSYpWNDRY_NbG845S_Lp20j0B_amndJoKQDUXulLJHPMS3QwO8MPqInBvjYHldOFg3fxNp8OLNF9FEElK2KQREPsRI9Yi3T1c4efG-tdKq-qOTL_qmdg2pHDlXx1O4BcgXw0Wg6K-HG4N0XWS3WqRymbkJgM5C-h1D0qDMU21qMH_McAXdT9WxyQGAHGVu8eMsTOWQtU6umFRkL9_4fKEvEZcuEZN_66pvysQE5cxNTawCuAGGfYOIwCN43XOC04gH-PS80Bg81WOTTXLGFyVGJie9caEN8RjyVCTAQzu795VsEnCcvbsRwmUIpeej0eJWBPgujvOSDoHCozc518tLgbV2bNWKxtD4y93w4vgzDgOqSYE9QRkB8RXZcqcZxXDjBZ3tv9OX2HFOzSZ3Rzs8Wp3Rofpq2DlV-SCaHLXorGW6XgeyUajBT-Y61Rge9k7s7HtCIe72K8hlG8VJGF3YVnflaw2qjY2wghHoZBs9ROA7lYegYlCw8_nErss-n97rqgEp0v6SrhdRQ8uV6Lk71IHnXKt2N7KetSBb2QxkVOgaWjbTdgJEqQNQtII480Tvq-BBTqV08fSDkZgPK5UnaWRzzBwBxgyDhvxHit3v-k5cOlLNzSq2PsfpD2RWHyzKmKC1ewX96LxV-FRB3Iw_3S1G-Ky8R7mnen471dc_3zkRpi6Rewax5kLr3a6e2hzdQLIxVOhq1-zEqbmO_PtMDQHRwnHJ0hzPAnXJpiVoEoMswzDSytm8QsLZGbE1N8_IWfuGMHnTTkdsWCXQq4uxbkEaPuT-XyfM-kNbMNKQMew_CiHCml9GwWDq1S5TbivGgstCZdKy_RIwGqP8_GKt__moeG6RX2i-jUqXmTMWBopVwnvLvuEs0ybjypJX-DtefEc3fzLsFkgsn1CNUs5zeUpkHFp2MX1jLzjX8y67wY2qPG1YDaEw5O_3o_CnAyxPIcIhtGrqg9sdV2Z1q_ZtAxAhI2ejCOPFD77QA1EvxKC-AwAKfBROl7nQVsoaR31e4Q1_nyiBB-nJ_Wy0DLRwyjsEK"
            alt=""
        
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
          <h1>Airbnb your home</h1>

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
