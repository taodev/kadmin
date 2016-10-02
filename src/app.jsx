/**
 * App entry point
 */

// Polyfill

import "babel-core/polyfill";

// Libraries
import React from "react";
import Router from "react-router";

// Routers
import Routes from "./routers/Routes";


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";

// Initialize routes depending on session
let routes;

routes = Routes.getRoutes();

// Start the router
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById(DOM_APP_EL_ID));
});