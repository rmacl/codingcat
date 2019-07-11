import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
//import Index from "views/Index.js";
//import NucleoIcons from "views/NucleoIcons.js";
//import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/index" 
        render = {props => <ProfilePage {...props} />}/>
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
