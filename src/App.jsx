import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader.jsx';
const ProjectCardPortfolio = lazy(() => import('./components/Projects.jsx'));
const Academics = lazy(() => import('./components/Academics.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop.jsx'));



function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<ProjectCardPortfolio />} />
            <Route path="Academics" element={<Academics />} />
            <Route path='Resume' element={<Resume />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App;
