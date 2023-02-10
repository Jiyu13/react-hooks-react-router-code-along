import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter } from "react-router-dom";

import App from "./App"


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
