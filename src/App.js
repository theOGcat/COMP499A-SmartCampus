import React from 'react';
//import { ReactDOM } from 'react';
import './App.css'
import Layout from './components/Layout';
import HomeContent from './components/HomeContent';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import About from './components/pages/About';



function App(){
  return(
    <>
      <Router>
      <Layout>
          <Routes>
          <Route path ='/HomeContent' element={<HomeContent/>}/>
          <Route path ='/About' element={<About/>}/>
          <Route exact path="/" element={<Navigate to ='/HomeContent' replace />}/>  
          </Routes>
          </Layout>
      </Router>

    </>
  );
}
export default App;
