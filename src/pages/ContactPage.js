import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

const ContactPage = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"💀"}</Rotate>Contact
    </h1>
  </Fragment>
);

export default ContactPage;
