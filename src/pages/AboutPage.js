import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

import Dog from "../assets/dog.jpg";

const AboutPage = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"💩"}</Rotate>About
    </h1>
    <img src={Dog} alt="dog" />
    {/* <img src={process.env.PUBLIC_URL + "/images/dog.jpg"} alt="dog" /> */}
  </Fragment>
);

export default AboutPage;
