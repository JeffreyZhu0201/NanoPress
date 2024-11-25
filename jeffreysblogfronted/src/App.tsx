/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-24 23:42:30
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-25 21:16:45
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\App.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React from 'react';

// import ReactDOM from 'react-dom/client';

import {
 BrowserRouter as Router,
  Routes,
  Route,
//  Link
} from 'react-router-dom';


import NavBar from "./components/NavBar"
import FootBar from './components/FootBar';

import Blogs from './pages/Blogs';
import Homepage from './pages/Homepage';
import Me from './pages/Me'
import User from './pages/User'
import Projects from './pages/Projects'

function App() {
  return (
   <Router>
     <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/me' element={<Me/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
      
      <FootBar/>
    </div>
   </Router>
  );
}

export default App;
