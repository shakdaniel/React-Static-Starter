import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

const HomePage = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"🚀"}</Rotate>Home!
    </h1>
  </Fragment>
);

export default HomePage;
