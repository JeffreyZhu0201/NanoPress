/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-24 23:42:30
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-30 11:37:19
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\App.tsx
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
import links from './common/Links';
import Loading from './common/Loading';

function App() {
  return (
    <Router>
      <div className="App h-full overflow-ellipsis">
        <div className='max-w-[950px] m-auto min-w-[258px]'>
          <NavBar />

          <Routes>
                {
                  links.map((item)=>{
                    return <Route path={item.path} element={
                      <Suspense fallback={<Loading></Loading>}>{item.page}</Suspense>}
                    >
                    </Route>
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
