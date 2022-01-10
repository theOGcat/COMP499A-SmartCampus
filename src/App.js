import React, { Component } from 'react';
import { ReactDOM } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import About from './components/About';
import HomeContent from './components/HomeContent';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';


function App(){
  return(
    <>
      <Router>
        <Navbar/>
          <Routes>
          <Route path ='/HomeContent' element={<HomeContent/>}/>
          {/* <Route path ='/About' element={<About/>}/> */}
          <Route exact path="/" element={<Navigate to ='/HomeContent' replace />}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}
//suck my d
export default App;
