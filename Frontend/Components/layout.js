
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
