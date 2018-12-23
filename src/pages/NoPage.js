import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

const NoPage = () => (
  <Fragment>
    <Helmet>
      <title>404</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"👀"}</Rotate>NoPage
    </h1>
  </Fragment>
);
export default NoPage;
