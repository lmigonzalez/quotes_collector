import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import axios from 'axios';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import Quotes from './components/Quotes/Quotes';
import LoveQuotes from './pages/LoveQuotes/LoveQuotes';
import MotivationalQuotes from './pages/MotivationalQuotes/MotivationalQuotes';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AddQuote from './pages/AddQuote/AddQuote';
import Profile from './pages/Profile/Profile';
import EditQuote from './pages/EditQuote/EditQuote';
import RegisterMsg from './messages/RegisterMsg';
import NotifMsg from './components/NotifMsg/NotifMsg';
import Footer from './components/Footer/Footer';


import {useStateContext} from './context/StateContext'



function App() {

  const {liked, setName, setQuotes, setToken, setUserId, login, setLogin, token, userId, popUps, notification} = useStateContext()


	const isLogin = () =>{
		if(token != null){
			setLogin(true)
		}else{
			setLogin(false)
		}


	}


  useEffect(()=>{
    isLogin()
  }, [token])

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if(storedData && storedData.token && storedData.userId){
      setToken(storedData.token)
      setUserId(storedData.userId)
      setName(storedData.userName)
    }
    
    
  }, [])

  useEffect(()=>{
    getQuotes()
  }, [liked])

  function getQuotes(){
    axios.get('http://localhost:3000/api/quote/quotes')
    .then(res=>{
      setQuotes(res.data)

    }).catch(err=>{
      console.log(err)
    })
  }



  return (
    <section className="App">
      <NavBar/>
      {notification && <NotifMsg/>}
 
      
      {popUps && <RegisterMsg/>}
      
      <Routes>
        <Route path='/' element={<Quotes/>}></Route>

        <Route path='/lovequotes' element={<LoveQuotes/>}></Route>

        <Route path='/motivationalquotes' element={<MotivationalQuotes/>}></Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/signup' element={<SignUp/>}></Route>

        <Route path='/addquote' element={<AddQuote/>}></Route>

        <Route path='/profile/:id' element={<Profile />}></Route>

        <Route path='/editquote/:id' element={<EditQuote/>}></Route>
      </Routes>
      <Footer/>
   
    </section>
  );
}

export default App;
