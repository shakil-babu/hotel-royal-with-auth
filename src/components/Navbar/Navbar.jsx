import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../images/icons/logo.png' ;
import './Navbar.css';;
const Navbar = () => {

    const activeDesign = {
        borderLeft:'5px solid #f44336',
        paddingLeft:'3px'
    }
    return (
        <>
            <nav className="nav">
               <div className="container nav-flex">
               <NavLink style={{textDecoration:'none'}} to='/'><img className="logo" src={logo} alt=""/></NavLink>
                <ul className='nav-items'>
                    <li>
                        <NavLink exact activeStyle ={activeDesign} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle ={activeDesign} to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle ={activeDesign} className="btn-book" to="/rooms">Rooms</NavLink>
                    </li>
                </ul>
               </div>
            </nav>   
        </>
    )
}

export default Navbar
