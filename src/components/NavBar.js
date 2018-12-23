import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 50px;
  top: 10px;
  padding: 0 10%;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
  background: #444;
`;

const Link = styled(NavLink)`
  /* nav > a { */
  display: inline-block;
  width: 25%;
  height: 100%;
  font-size: 1.5em;
  line-height: 50px;
  color: #fff;
  font-weight: lighter;
  text-align: center;
  text-decoration: none;
  /* } */
  /* nav > a:hover {
  background: #333;
}

nav > a.active {
  background: #222;
} */
`;

const NavBar = () => (
  <Nav>
    <Link to="/" exact>
      Home
    </Link>
    <Link to="/about">About</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/contact">Contact</Link>
  </Nav>
);

export default NavBar;
