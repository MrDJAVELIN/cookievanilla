import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Builds from "./pages/Builds";
import Seasons from "./pages/Seasons";
import NotFound from "./pages/notFound";

const App = () => {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/seasons" element={<Seasons />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    );
};

export default App;
