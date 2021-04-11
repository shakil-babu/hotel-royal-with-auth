import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="header-info-box">
            <div className="title-container">
                <h5>The most</h5>
                <h1>trusted</h1>
                <h3>booking system</h3>
                <div className="underline"></div>

                <p>The online booking global icon of Arabian luxury. <br/>
                Book Your Travel − growing together.</p>

                <Link style={{textDecoration:'none'}} to='/rooms'><button className="get-started">get started</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Header;