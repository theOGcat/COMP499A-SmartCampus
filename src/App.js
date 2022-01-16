import React from 'react';
//import { ReactDOM } from 'react';
import './App.css'
import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import About from './components/pages/About';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App(){
  return(
    
    <>
      <Router>
      <Layout>
          <Routes>
          <Route path ='/Homepage' element={<Homepage/>}/>
          <Route path ='/About' element={<About/>}/>
          <Route path ='/SignIn' element={<SignIn/>}/>
          <Route path ='/SignUp' element={<SignUp/>}/>
          
          <Route exact path="/" element={<Navigate to ='/Homepage' replace />}/>  
          
          </Routes>
          </Layout>
      </Router>
      <Footer />
    </>
    
  );
}
export default App;
