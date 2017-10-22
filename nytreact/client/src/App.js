import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Saved from "./components/Saved";
import searchArticles from "./components/Search"
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/search" component={searchArticles} />
      </Switch>
    </div>
  </Router>;

export default App;