import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useRickMortyCharacters } from "../hooks/useRickMortyCharacters";

import {CardList,Card} from './styles'

type RMCharacterListProps = {
  lang:string
}

export const RMCharacterList = (props:RMCharacterListProps) => {
  const {lang} = props;
  const {rickMortyCharacters,fetchRickMortyCharacters} = useRickMortyCharacters();
  useEffect(()=>{
    fetchRickMortyCharacters()
  },[])
  return <CardList>{rickMortyCharacters?.map((character,index)=>{
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
