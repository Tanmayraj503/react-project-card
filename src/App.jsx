import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectCarPortfolio from './components/ProjectCarPortfolio';
import Hello from './helo.jsx';
import OuterProject from './outerproject.jsx';

import Home from './Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="outerproject" element={<OuterProject />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
