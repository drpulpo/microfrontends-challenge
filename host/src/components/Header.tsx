import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export const Header= ()=>{
    return (
    <div>
        <div>Characters Encyclopedia</div>
        <nav>
            <div>
                <Link to={"/"}>Home</Link>
            </div>
            <div>
                <Link to={"/rickmorty"}>Rick & Morty</Link>
            </div>
            <div>
                <Link to={"/harrypotter"}>Harry Potter</Link>
            </div>
        </nav>
    </div>)
}