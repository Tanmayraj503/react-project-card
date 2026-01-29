import React from "react";
import ProjectCarPortfolio from "./ProjectCardPortfolio.jsx";
import Header from "./header.jsx";
import ContactHome from "./ContactHome.jsx";
import Footer from "./Footer.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <ProjectCarPortfolio />
            <ContactHome />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}