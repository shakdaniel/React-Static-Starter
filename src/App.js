import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// import { ParallaxProvider } from "react-scroll-parallax";
import reset from "styled-reset";

import Theme from "./templates/Theme";
import Layout from "./templates/Layout";

// import Loading from "./components/Loading";

// import {
//   HomePage,
//   AboutPage,
//   MenuPage,
//   ContactPage,
//   NoPage
// } from "./LazyImports";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other global styles */
  html {
    font-family: sans-serif;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  /* html, body, #root {
    position: absolute;
    width: 100%;
    height: 100%;
    
  } */
  h1{
    font-size: 5em;
    padding: 50px 0;
    margin: 300px 40px 240px;
    line-height: 2em;
    letter-spacing: 0.1em;
    text-align: center;
    color: #fff;
    text-shadow: 10px 10px 0 rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.5);
  }
  img{
    width: calc(100% - 80px);
    height: auto;
  }
`;

const App = () => (
  // <ParallaxProvider>
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Layout>
        <GlobalStyle />
        <Switch>
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/menu" render={() => <MenuPage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route render={() => <NoPage />} />
        </Switch>
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
  // </ParallaxProvider>
);

export default App;
