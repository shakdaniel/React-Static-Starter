import React from "react";
// import { render } from "react-dom";
// import { render } from "react-snapshot";
import { hydrate, render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

// render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

serviceWorker.register();
