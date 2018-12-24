import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

import Panda from "../assets/panda.jpg";

const HomePage = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"🚀"}</Rotate>Home!
    </h1>
    <img src={Panda} alt="Panda" />
    {/* <img src={process.env.PUBLIC_URL + "/images/panda.jpg"} alt="Panda" /> */}
  </Fragment>
);

export default HomePage;
