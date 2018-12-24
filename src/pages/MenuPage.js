import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

import Rabbits from "./assets/rabbits.jpg";

const MenuPage = () => (
  <Fragment>
    <Helmet>
      <title>Menu</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"🍰"}</Rotate>Menu
    </h1>
    <img src={Rabbits} alt="Rabbits" />
  </Fragment>
);

export default MenuPage;
