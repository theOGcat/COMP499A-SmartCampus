import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
       
            <nav className='navbar'>
                <div className='container'>
                    <Link to ="/" className="navbar-brand">University of Windsor </Link>
                <div className='navbar-nav'>
                        <div>
                        <Link to ="/HomeContent" className="nav-links">Home</Link>
                        <Link to ="/" className="nav-links">Course</Link>
                        <Link to ="/" className="nav-links">Blog</Link>
                        <Link to ="/About" className="nav-links">About</Link>
                        <Link to ="/" className="nav-links">Login</Link>
                        </div>
                </div>
                </div>
            </nav>
        
    );
}

export default Navbar
