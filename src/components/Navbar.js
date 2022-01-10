import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
    } from "./NavElements.js";


    const Navbar = () => {
        return (
          <>
            <Nav>
              <NavLink to='/'>
                  Home
              </NavLink>
              <Bars />
              <NavMenu>
                <NavLink to='/about' activeStyle>
                  About
                </NavLink>
                <NavLink to='/services' activeStyle>
                  Services
                </NavLink>
                <NavLink to='/contact-us' activeStyle>
                  Contact Us
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                  Sign Up
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>
            </Nav>
          </>
        );
      };
      
      export default Navbar;

