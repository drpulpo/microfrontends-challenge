import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { RMCharacterList } from "./components/RMCharacterList";

const App = () => (
  <div className="container">
    <RMCharacterList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
