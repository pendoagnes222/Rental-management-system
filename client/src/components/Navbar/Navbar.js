import React, { Component } from 'react'
import './Navbar.css'
import {MenuItems } from './MenuItems'
import logo from '../Images/Airbnb-logo.jpg' 
import { Button } from '../Button'


class Navbar extends Component {
    state = { clicked: false}
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <img className='navbar-logo' src={logo} alt=''/>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                 {item.titles}   
                                </a>
                             </li>  
                        )

                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar