import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./Navbar"

import React from "react";
import {Route, Switch} from "react-router-dom"


/* add the NavBar component to our App component */
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App