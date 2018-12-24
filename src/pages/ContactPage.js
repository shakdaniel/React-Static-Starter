import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

import Cats from "../assets/cats.jpg";

const ContactPage = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"💀"}</Rotate>Contact
    </h1>
    <img src={Cats} alt="Cats" />
  </Fragment>
);

export default ContactPage;
