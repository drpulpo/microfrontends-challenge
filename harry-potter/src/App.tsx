import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { HPCharacterList } from "./components/HPCharacterList";

const App = () => (
  <div className="container">
    <HPCharacterList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
