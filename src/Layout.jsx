import React from "react";
import { Outlet } from "react-router-dom";
import OuterProject from "./outerproject.jsx";
import Home from "./Home.jsx";
export default function Layout() {
    return (
    <>
        <Home />
        <Outlet />
    </>);
}