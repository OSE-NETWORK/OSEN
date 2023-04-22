
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navbar from './Nabvar/navbar';
import Hero from "./Hero/hero";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
    </>
  );
}

export default Layout;
