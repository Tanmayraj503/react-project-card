import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import OuterProject from './Projects.jsx';
import Academics from './Academics.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<OuterProject />} />
          <Route path="Academics" element={<Academics />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
