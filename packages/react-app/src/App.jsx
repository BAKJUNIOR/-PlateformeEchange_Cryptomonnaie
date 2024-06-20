import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Equipes from "./components/Equipes/equipes";
import About from './components/about/about.jsx';
import Services from "./components/Services/Services";
import Consultation from './components/Consultation/Consultation';
import Cryptomonnaie from './components/Cryptomonnaie/Cryptomonnaie';
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Footer from "./components/Footer/Footer";
import Crypto from "./crypto";
import AuthProviderWrapper from "./AuthProviderWrapper"; // Assurez-vous que ce composant est correctement implémenté

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <AuthProviderWrapper>
            <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <BlogsComp />
                                    <Equipes />
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/consultation" element={<Consultation />} />
                        <Route path="/cryptomonnaie" element={<Cryptomonnaie />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/crypto" element={<Crypto />} />
                    </Routes>
                    <Footer />
            </div>
        </AuthProviderWrapper>
    );
};

export default App;
