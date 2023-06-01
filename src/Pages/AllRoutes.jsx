import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Counter from "../ClassComponents/Counter";
import Greeting from "../FuctionalComponents/Greeting";

const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/greet" element={<Greeting/>}/>
        </Routes>
        </>
    )
}
export default AllRoutes