import React from 'react';
import {Route, Routes} from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar/NavBar';
import Quotes from './components/Quotes/Quotes';
import LoveQuotes from './pages/LoveQuotes/LoveQuotes';
import MotivationalQuotes from './pages/MotivationalQuotes/MotivationalQuotes';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AddQuote from './pages/AddQuote/AddQuote';


function App() {
  return (
    <section className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Quotes/>}></Route>

        <Route path='/lovequotes' element={<LoveQuotes/>}></Route>

        <Route path='/motivationalquotes' element={<MotivationalQuotes/>}></Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/signup' element={<SignUp/>}></Route>

        <Route path='/addquote' element={<AddQuote/>}></Route>
      </Routes>

 
   
    </section>
  );
}

export default App;
