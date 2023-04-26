import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
function HomePage({children}){
    return (
        <>
        <Navbar />
        <Hero />
        {/* <About /> */}
        {children}
        <Footer />
        </>
    )
}

export default HomePage;