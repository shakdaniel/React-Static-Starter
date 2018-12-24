import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

// const Panda = require("../assets/panda.jpg");
// import Panda from "../assets/panda.jpg";

const HomePage = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"🚀"}</Rotate>Home!
    </h1>
    <img src={require("../assets/panda.jpg")} alt="Panda" />
  </Fragment>
);

export default HomePage;
