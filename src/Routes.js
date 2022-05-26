import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Bmi from "./Components/Bmi.js";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import Tdee from "./Components/Tdee.js";

function Rota() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/imc" element={<Bmi />} />
                <Route path="/tdee" element={<Tdee />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rota;
