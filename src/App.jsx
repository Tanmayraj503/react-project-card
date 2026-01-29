import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ProjectCarPortfolio from './components/Projects.jsx';
import Academics from './components/Academics.jsx';
import Home from './components/Home.jsx';
import Resume from './components/Resume.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<ProjectCarPortfolio />} />
          <Route path="Academics" element={<Academics />} />
          <Route path='Resume' element={<Resume />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
