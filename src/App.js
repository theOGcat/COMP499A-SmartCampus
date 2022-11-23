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
import axios from 'axios';


function App(){
  
  /**
   * TODO
   * 1. make an axios request to validate token
   * 
   */
  const [token, setToken] = useState(window.localStorage.getItem("token"))
  const [isLogin, setLogin] = useState(false)
  const [userID, setUserID] = useState(window.localStorage.getItem("userID"))
  const [firstName, setFirstName] = useState(window.localStorage.getItem("firstName"))
  const [lastName, setLastName] = useState(window.localStorage.getItem("lastName"))

  useEffect(async ()=> {
    const res = await axios.get("http://localhost:3001/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.status)
    if(res.status == 401){
      alert("Session has been expired")
    }
    else{
      setLogin(true);
    }
  });
  

  console.log(token)
  useEffect(()=> {
    console.log(isLogin)
    console.log("userID: " + userID)
  }, [isLogin, userID])



  return(
    <>
      <Router>
      <Layout>
          <Routes>
          <Route path ='/Homepage' element={<Homepage/>}/>
          <Route path ='/About' element={<About/>}/>
          <Route path ='/Course' element={<Course/>}/>
          <Route 
            path ='/SignIn' 
            element={
            <SignIn 
              handleSignIn={setLogin} 
              updateUserID={setUserID} 
              updateFirstName={setFirstName} 
              updateLastName={setLastName}
              updateJWT={setToken}
            />}
          
          />
          <Route path ='/SignUpPage' element={<SignUpPage/>}/>
          <Route path ='/BlogHomePage' element={<BlogHomePage isLogin={isLogin}/>}/>
          <Route path ='/FoodBlog' element={<FoodBlog isLogin={isLogin} userID={userID} firstName={firstName} lastName={lastName}  />}/>
          <Route path ='/ShoppingBlog' element={<ShoppingBlog isLogin={isLogin} userID={userID} firstName={firstName} lastName={lastName}/>}/>
          <Route path ='/GameBlog' element={<GameBlog isLogin={isLogin} userID={userID} firstName={firstName} lastName={lastName}/>}/>
          <Route exact path="/" element={<Navigate to ='/Homepage' replace />}/>  
          
          </Routes>
          </Layout>
          
      </Router>
      
    </>
    
  );
}
export default App;
