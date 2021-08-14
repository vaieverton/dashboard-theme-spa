import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Routes: React.FC = () => {
    const NotFound =  () => (
        <div>Not found</div>
    )
  return (
    <Switch>
      <Route path="/" component={HomePage} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
