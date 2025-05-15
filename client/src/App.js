import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { HTTP } from './http';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Partners from './pages/Partners';
import { NotFound } from './pages/NotFound';

function App() {

  return (
  //  <React.Fragment>

  //  </React.Fragment>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/partners' element={<Partners/>}/>

    <Route path="*" element={<NotFound/>}/>
    {/* 
    <Route path='*'>
        <Redirect to="/"/>
    </Route> 
    */}
  </Routes>
   
  </BrowserRouter>

  
  );
}

export default App;
