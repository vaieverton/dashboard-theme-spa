import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import AboutMePage from "../pages/AboutMePage";

const Routes: React.FC = () => {
    const NotFound =  () => (
        <div>Not found</div>
    )
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
 
      <Route path="/features" component={FeaturesPage} />

      <Route path="/about-me" component={AboutMePage} />

      <Route path="/user" component={FeaturesPage} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
