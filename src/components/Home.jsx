import React from "react";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import AboutHome from "./AboutHome.jsx";
import Techstack from "./Techstack.jsx";
import ProjectCarPortfolio from "./ProjectCardPortfolio.jsx";
import ContactHome from "./ContactHome.jsx";
import Footer from "./Footer.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";
import Particles from "./Particles";

export default function Home() {
  return (
    <>
      {/* FULL PAGE PARTICLES BACKGROUND */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none' // allows clicking through to content
      }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={190}
          particleSpread={28}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation
          pixelRatio={1}
        />
      </div>

      {/* PAGE CONTENT */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <AboutHome />
        <Techstack />
        <ProjectCarPortfolio />
        <ContactHome />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}