import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const HeaderArea = styled.header`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  z-index: 9999;
`;

const Header = () => (
  <HeaderArea>
    <NavBar />
  </HeaderArea>
);

export default Header;
