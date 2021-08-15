import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import PageTwo from "../pages/PageTwo";

const Routes: React.FC = () => {
    const NotFound =  () => (
        <div>Not found</div>
    )
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
 
      <Route path="/page-1" component={FeaturesPage} />

      <Route path="/page-2" component={PageTwo} />

      <Route path="/user" component={FeaturesPage} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
