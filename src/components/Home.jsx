import React from "react";
import ProjectCarPortfolio from "./ProjectCardPortfolio.jsx";
import Header from "./header.jsx";
import ContactHome from "./ContactHome.jsx";
import Footer from "./Footer.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";
import Techstack from "./Techstack.jsx";
import AboutHome from "./AboutHome.jsx";
import Hero from "./hero.jsx";


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AboutHome />
            <Techstack />
            <ProjectCarPortfolio />
            <ContactHome />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}