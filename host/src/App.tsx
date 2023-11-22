import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "./index.css";
import { Wrapper } from "./globalstyle";

import { AppContextProvider} from './context/AppContextProvider';
import { RouteList } from "./components/routeList";

const App = () =>{
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Wrapper>
          <div className="app__header">
            <Header  />
          </div>
          <div className="app__routes">
            <RouteList />
          </div>
          <div className="app__footer">
            <Footer />
          </div>
        </Wrapper>      
      </BrowserRouter>
    </AppContextProvider>
  );
} 
ReactDOM.render(<App />, document.getElementById("app"));
