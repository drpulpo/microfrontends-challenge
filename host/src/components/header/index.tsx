import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {StyledHeader} from './styles'


export const Header= ()=>{
    return (
    <StyledHeader>
        <div className="header__brand">Characters</div>
        <nav className="header__nav">
            <div>
                <Link to={"/"}>Home</Link>
            </div>
            <div>
                <Link to={"/harrypotter"}>Harry Potter</Link>
            </div>
            <div>
                <Link to={"/rickmorty"}>Rick & Morty</Link>
            </div>
            <div>
                <select>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
        </nav>
    </StyledHeader>)
}