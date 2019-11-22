import React, { Component, Fragment } from "react";

import { Route } from "react-router-dom";

import Header from "./layout/Header";
import Login from "./layout/login";
import Register from "./layout/register";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Fragment>
      </div>
    );
  }
}

export default App;
