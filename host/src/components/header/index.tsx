import React,{useContext} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {StyledHeader} from './styles'
import { AppContext } from "../../context/AppContextProvider";

const languages = {
    English: 'en',
    Español: 'es',
  }

export const Header= ()=>{
    //@ts-ignore
    const {lang,setLang} = useContext(AppContext);
    return (
    <StyledHeader>
        <div className="header__brand">{lang==='es'?'Personajes':'Characters'}</div>
        <nav className="header__nav">
            <div>
                <Link to={"/"}>{lang==='es'?'Inicio':'Home'}</Link>
            </div>
            <div>
                <Link to={"/harrypotter"}>Harry Potter</Link>
            </div>
            <div>
                <Link to={"/rickmorty"}>Rick & Morty</Link>
            </div>
            <div>
                <select value={lang} onChange={(e)=>{
                    setLang(e.target.value)
                }}>
                    {Object.entries(languages).map(c => (
                        <option value={c[1]}>{c[0]}</option>
                    ))}
                </select>
            </div>
        </nav>
    </StyledHeader>)
}