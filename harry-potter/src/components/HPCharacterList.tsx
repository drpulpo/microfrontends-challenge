import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useHarryPotterCharacters } from "../hooks/useHarryPotterCharacters";

import {CardList,Card} from './styles'

type HPCharacterListProps = {
  lang:string
}

export const HPCharacterList = (props:HPCharacterListProps) => {
  const {lang} = props;
  const {harryPotterCharacters,fetchHarryPotterCharacters} = useHarryPotterCharacters();
  useEffect(()=>{
    fetchHarryPotterCharacters()
  },[])
  return <CardList>{harryPotterCharacters?.map((character,index)=>{
    return (
    <Card key={index}>
      <div className="card__imagediv">
        <img className="card__image" src={character.image} alt="new"/>
      </div>
      <div>
        <div>{lang==='es'?'Nombre:':'Name:'}</div>
        <div>{character.name}</div>
        <div>{lang==='es'?'Especie:':'Specie:'}</div>
        <div>{character.species}</div>
      </div>
    </Card>)
  })}</CardList>;
};
