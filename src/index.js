import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

//Import Pages
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
