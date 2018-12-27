import React, { Fragment } from "react";
import Helmet from "react-helmet";
// import { Parallax } from "react-scroll-parallax";
import Parallax from "react-springy-parallax";

import Rotate from "../components/Rotate";

import Panda from "../assets/panda.jpg";

const styles = {
  fontFamily: "Menlo-Regular, Menlo, monospace",
  fontSize: 14,
  lineHeight: "10px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const HomePage = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    {/* <Parallax pages={3}>
      <Parallax.Layer offset={0} speed={0.5} style={styles}> */}
    <h1>
      <Rotate>{"🚀"}</Rotate> Home!
    </h1>

    <img src={Panda} alt="Panda" />
    {/* </Parallax.Layer>R */}
  </Fragment>
);

export default HomePage;
