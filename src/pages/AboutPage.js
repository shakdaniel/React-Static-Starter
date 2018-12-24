import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

import Dog from "./assets/dog.jpg";

const AboutPage = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"💩"}</Rotate>About
    </h1>
    <img src={Dog} alt="Dog" />
  </Fragment>
);

export default AboutPage;
