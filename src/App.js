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


function App() {

  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [quotes, setQuotes] = useState([])
  const [quoteToUpdate, setQuoteToUpdate]= useState(null)

  useEffect(()=>{
    getQuotes()
  }, [])

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
      <NavBar userId = {userId}/>
      <Routes>
        <Route path='/' element={<Quotes
         quotes={quotes}
        />}></Route>

        <Route path='/lovequotes' element={<LoveQuotes/>}></Route>

        <Route path='/motivationalquotes' element={<MotivationalQuotes/>}></Route>

        <Route path='/login' element={<Login setToken = {setToken} setUserId = {setUserId}/>}></Route>

        <Route path='/signup' element={<SignUp/>}></Route>

        <Route path='/addquote' element={<AddQuote token = {token} userId={userId}/>}></Route>

        <Route path='/profile/:id' element={<Profile quotes={quotes} userId = {userId} setQuoteToUpdate = {setQuoteToUpdate} />}></Route>

        <Route path='/editquote/:id' element={<EditQuote quoteToUpdate = {quoteToUpdate}/>}></Route>
      </Routes>

 
   
    </section>
  );
}

export default App;
