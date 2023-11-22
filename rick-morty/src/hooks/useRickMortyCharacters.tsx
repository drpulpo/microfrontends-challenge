import React,{useState} from "react";
import { getRickMortyCharacters } from "../services/RickMortyCharacters";
import { Character } from "../types/Character";

export const useRickMortyCharacters = () => {
    const [rickMortyCharacters, setRickMortyCharacters] = useState<Character[]>();

    const fetchRickMortyCharacters = async () => {
        const rmCharacters = await getRickMortyCharacters();
        setRickMortyCharacters(rmCharacters.results as Character[] );
    }

    return {
        rickMortyCharacters,
        fetchRickMortyCharacters
    }
}