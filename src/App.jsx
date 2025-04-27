import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Builds from "./pages/Builds";
import Seasons from "./pages/Seasons";

const App = () => {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/builds" element={<Builds />} /> */}
                    <Route path="/seasons" element={<Seasons />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    );
};

export default App;
