import React from 'react';
//import { ReactDOM } from 'react';
import './App.css'
import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import About from './components/pages/About';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';

import FoodBlog from './components/Blogs/FoodBlog';
import ShoppingBlog from './components/Blogs/ShoppingBlog';
import GameBlog from './components/Blogs/GameBlog';
import BlogHomePage from './components/BlogHomePage';

import Course from './components/pages/Course';


function App(){
  return(
    
    <>
      <Router>
      <Layout>
          <Routes>
          <Route path ='/Homepage' element={<Homepage/>}/>
          <Route path ='/About' element={<About/>}/>
          <Route path ='/Course' element={<Course/>}/>
          <Route path ='/SignInPage' element={<SignInPage/>}/>
          <Route path ='/SignUpPage' element={<SignUpPage/>}/>
          <Route path ='/BlogHomePage' element={<BlogHomePage/>}/>
          <Route path ='/FoodBlog' element={<FoodBlog/>}/>
          <Route path ='/ShoppingBlog' element={<ShoppingBlog/>}/>
          <Route path ='/GameBlog' element={<GameBlog/>}/>
          <Route exact path="/" element={<Navigate to ='/Homepage' replace />}/>  
          
          </Routes>
          </Layout>
          
      </Router>
      
    </>
    
  );
}
export default App;
