import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useRickMortyCharacters } from "../hooks/useRickMortyCharacters";

export const RMCharacterList = () => {
  const {rickMortyCharacters,fetchRickMortyCharacters} = useRickMortyCharacters();
  useEffect(()=>{
    fetchRickMortyCharacters()
  },[])
  return <div>{rickMortyCharacters?.map((character,index)=>{
    return (
    <div key={index}>
      <div><img src={character.image} alt="new"/></div>
      <div>
        <div>{character.name}</div>
        <div>{character.species}</div>
      </div>
    </div>)
  })}</div>;
};
