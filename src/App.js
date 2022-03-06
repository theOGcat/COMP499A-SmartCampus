import React,{useState, useEffect} from 'react';
//import { ReactDOM } from 'react';
import './App.css'
import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import About from './components/pages/About';
import SignUpPage from './components/pages/SignUpPage';
import SignIn from './components/SignIn';
import FoodBlog from './components/Blogs/FoodBlog';
import ShoppingBlog from './components/Blogs/ShoppingBlog';
import GameBlog from './components/Blogs/GameBlog';
import BlogHomePage from './components/BlogHomePage';

import Course from './components/pages/Course';


function App(){

  const [isLogin, setLogin] = useState(false)
  
  useEffect(()=> {
    console.log(isLogin)
  })

  return(
    <>
      <Router>
      <Layout>
          <Routes>
          <Route path ='/Homepage' element={<Homepage/>}/>
          <Route path ='/About' element={<About/>}/>
          <Route path ='/Course' element={<Course/>}/>
          <Route path ='/SignIn' element={<SignIn handleSignIn={setLogin}/>}/>
          <Route path ='/SignUpPage' element={<SignUpPage/>}/>
          <Route path ='/BlogHomePage' element={<BlogHomePage isLogin={isLogin}/>}/>
          <Route path ='/FoodBlog' element={<FoodBlog isLogin={isLogin}/>}/>
          <Route path ='/ShoppingBlog' element={<ShoppingBlog isLogin={isLogin}/>}/>
          <Route path ='/GameBlog' element={<GameBlog isLogin={isLogin}/>}/>
          <Route exact path="/" element={<Navigate to ='/Homepage' replace />}/>  
          
          </Routes>
          </Layout>
          
      </Router>
      
    </>
    
  );
}
export default App;
