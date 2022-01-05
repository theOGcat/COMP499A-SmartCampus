import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <div className='container'>
                    <Link to ="/" className="navbar-brand">University of Windsor </Link>
                <div className='navbar-nav'>
                        <div>
                        <Link to ="/" className="nav-links">Home</Link>
                        <Link to ="/" className="nav-links">Page1</Link>
                        <Link to ="/" className="nav-links">Blog</Link>
                        <Link to ="/" className="nav-links">About</Link>
                        <Link to ="/" className="nav-links">Login</Link>
                        </div>
                </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar
