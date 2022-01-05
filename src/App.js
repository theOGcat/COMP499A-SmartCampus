import React, { Component } from 'react';
import { ReactDOM } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';


function App(){
  return(
    <>
 
      <Router>
      <Navbar/>
      <Footer/>
        <Routes>
          <Route path ="/" exact/>
        </Routes> 
      </Router>
    </>
  );


}

export default App;
