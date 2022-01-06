import React, { Component } from 'react';
import { ReactDOM } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';


function App(){
  return(
    <>
      <Router>
        <Navbar/>
          <Routes>
          <Route path ='/About' element={<About/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
