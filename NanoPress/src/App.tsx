/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-24 23:42:30
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-09 19:36:58
 * @FilePath: \NanoPress\NanoPress\src\App.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React, { Suspense } from 'react';

// import ReactDOM from 'react-dom/client';

import {
  BrowserRouter as Router,
  Routes,
  Route
  //  Link
} from 'react-router-dom';

import NavBar from "./components/NavBar"
import FootBar from './components/FootBar';
import {links,adminLinks} from './common/Links';
import Loading from './common/Loading';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (

    <HelmetProvider>
      <Router>


        <div className=''>
          <Routes>
            {[
              ...links.map((item, index) => {
                return <Route key={index} path={item.path} element={
                  <div className="App bg-slate-500">
                    <div className='max-w-[950px] m-auto min-w-[258px] '>
                      <NavBar />
                      <Suspense fallback={<Loading></Loading>}>{item.page}</Suspense>
                      <FootBar />
                    </div>
                  </div>
                }
                >
                </Route>
              }),

              ...adminLinks.map((item, index) => {
                  return <Route key={index} path={item.path} element={
                    <>
                      <Suspense fallback={<Loading></Loading>}>{item.page}</Suspense>
                    </>
                  }
                  >
                  </Route>
                })
            ]}
          </Routes>
        </div>


      </Router>
    </HelmetProvider>

  );
}

export default App;
