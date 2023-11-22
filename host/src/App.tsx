import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./screens/Home";
import { RickMorty } from "./screens/RickMorty";
import { HarryPotter } from "./screens/HarryPotter";

import "./index.css";
import { Wrapper } from "./globalstyle";

const App = () => (
 
    <BrowserRouter>
      <Wrapper>
        <div className="app__header">
          <Header  />
        </div>
        <div className="app__routes">
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/harrypotter" Component={HarryPotter}/>
              <Route path="/rickmorty" Component={RickMorty}/>
          </Routes>
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </Wrapper>
      
    </BrowserRouter>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
