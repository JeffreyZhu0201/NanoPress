/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-24 23:42:30
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-26 23:47:51
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
  Navigate,
  Route
  //  Link
} from 'react-router-dom';

import NavBar from "./components/NavBar"
import FootBar from './components/FootBar';

import Blogs from './pages/Blogs';
import Homepage from './pages/Homepage';
import Me from './pages/Me'
import User from './pages/User'
import Projects from './pages/Projects'

const RouterList = [
  {
    path:"/",
    page:<Navigate to="/home" replace/>
  },
  {
    path:"/home",
    page:<Homepage/>
  },
  {
    path:"/blogs",
    page:<Blogs/>
  },
  {
    path:"/projects",
    page:<Projects/>
  },
  {
    path:"/me",
    page:<Me/>
  },
  {
    path:"/user",
    page:<User/>
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <div className='max-w-[854px] m-auto'>
          <NavBar />

          <Routes>
              {
                RouterList.map((item)=>{
                  return <Route path={item.path} element={item.page}/>
                })
              }
          </Routes>

          <FootBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
