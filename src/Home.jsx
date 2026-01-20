import React from "react";
import ProjectCarPortfolio from "./components/ProjectCardPortfolio.jsx";
import Hello from "./Hello.jsx";
import Header from "./header.jsx";
export default function Home(){
    return(
        <>
        <Header />
            <ProjectCarPortfolio />
            <Hello />
        </>
    );
}