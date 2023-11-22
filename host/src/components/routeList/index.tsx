import React,{useContext} from "react";
import ReactDOM from "react-dom";

import { Routes, Route } from "react-router-dom";

import { AppContext } from "../../context/AppContextProvider";

import { Home } from "../../screens/Home";
import { RickMorty } from "../../screens/RickMorty";
import { HarryPotter } from "../../screens/HarryPotter";

export const RouteList = () => {
    //@ts-ignore
    const {lang} = useContext(AppContext);  
    return (
        <Routes>
            <Route path="/" element={<Home lang={lang}/>} />
            <Route path="/harrypotter" element={<HarryPotter lang={lang}/>} />
            <Route path="/rickmorty" element={<RickMorty lang={lang}/>} />
        </Routes>
    )
}