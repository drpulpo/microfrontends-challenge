import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./screens/Home";
import { RickMorty } from "./screens/RickMorty";
import { HarryPotter } from "./screens/HarryPotter";

const App = () => (
 
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rickmorty" Component={RickMorty}/>
          <Route path="/harrypotter" Component={HarryPotter}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
