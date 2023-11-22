import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useHarryPotterCharacters } from "../hooks/useHarryPotterCharacters";

import {Wrapper} from './styles'

export const HPCharacterList = () => {
  const {harryPotterCharacters,fetchHarryPotterCharacters} = useHarryPotterCharacters();
  useEffect(()=>{
    fetchHarryPotterCharacters()
  },[])
  return <div>{harryPotterCharacters?.map((character,index)=>{
    return (
    <Wrapper key={index}>
      <div><img src={character.image} alt="new"/></div>
      <div>
        <div>{character.name}</div>
        <div>{character.species}</div>
      </div>
    </Wrapper>)
  })}</div>;
};
