import React from "react";
import Navbar from "./components/Navbar";
import Bloglist from "./components/Bloglist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Singlepost from "./components/Singlepost";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Router exact path="/" compononent={Bloglist} />
          <Route
            exact
            path="/single/:postid"
            render={(props) => <Singlepost {...props} />}
          />
        </Switch>
        <h1>Test blog</h1>
        <Bloglist />
      </div>
    </Router>
  );
};

export default App;
