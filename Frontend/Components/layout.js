
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from './Nabvar/navbar';
import Hero from "./Hero/hero";

import About from "./About/about";

import Footer from "./Footer/footer";
import Team  from  "./Team/team";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Team/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
