import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Content = styled.section`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  background: linear-gradient(#ab64f6, #61dbf7);
`;

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Fragment>
);

export default withRouter(Layout);
