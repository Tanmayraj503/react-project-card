import React from "react";
import { Outlet } from "react-router-dom";
import OuterProject from "./outerproject.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/header.jsx";
export default function Layout() {
    return (
        <>
        <Header />
            <Home />
            <Outlet />
        </>);
}