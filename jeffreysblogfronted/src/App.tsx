/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-24 23:42:30
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-28 14:46:38
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
  Route
  //  Link
} from 'react-router-dom';

import NavBar from "./components/NavBar"
import FootBar from './components/FootBar';
import links from './common/Links';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='max-w-[950px] m-auto'>
          <NavBar />

          <Routes>
              {
                links.map((item)=>{
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
