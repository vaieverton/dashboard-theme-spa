import React from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />

        <Switch>
          <Route path="/introduction" component={HomePage} />
          <Route path="/" component={HomePage} />
          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
