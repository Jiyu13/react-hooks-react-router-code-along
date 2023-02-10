import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route, Switch } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// Step 2. Use <Route> components to define client-side routes in our app
function App() {
  return (
    <div>
      {/* use <Switch> to only render one component each time */}
      <Switch>
        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        {/* move Home component to the bottom to prevent only render the first route that matches any part of the URL */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById("root")
);
