import React from "react";
import { Outlet } from "react-router-dom";
import OuterProject from "./outerproject.jsx";
import Home from "./Home.jsx";
import Header from "./header.jsx";
export default function Layout() {
    return (
        <>
        <Header />
            <Home />
            <Outlet />
        </>);
}