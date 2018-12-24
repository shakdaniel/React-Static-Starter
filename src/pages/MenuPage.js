import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Rotate from "../components/Rotate";

// import Rabbits from "../images/rabbits.jpg";

const MenuPage = () => (
  <Fragment>
    <Helmet>
      <title>Menu</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <h1>
      <Rotate>{"🍰"}</Rotate>Menu
    </h1>
    <img src={process.env.PUBLIC_URL + "/images/rabbits.jpg"} alt="Rabbits" />
  </Fragment>
);

export default MenuPage;
