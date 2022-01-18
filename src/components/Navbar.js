import React from 'react';
//import { ReactDOM } from 'react';
//import { Link } from 'react-router-dom';
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
                  Univerisity of Windsor
              </NavLink>
              <Bars />
              <NavMenu>
                <NavLink to='/About' activeStyle>
                  About
                </NavLink>
                <NavLink to='/services' activeStyle>
                  Courses
                </NavLink>
                <NavLink to='/BlogHomePage' activeStyle>
                  Blog
                </NavLink>
                <NavLink to='/SignUpPage' activeStyle>
                  Sign Up
                </NavLink>
                
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/SignInPage'>Sign In</NavBtnLink>
              </NavBtn>
            </Nav>
          </>
        );
      };
      
      export default Navbar;

