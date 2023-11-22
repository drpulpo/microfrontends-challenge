import React,{useState} from "react";
import { getHarryPotterCharacters } from "../services/HarryPotterCharacters";
import { Character } from "../types/Character";

export const useHarryPotterCharacters = () => {
    const [harryPotterCharacters, setHarryPotterCharacters] = useState<Character[]>();

    const fetchHarryPotterCharacters = async () => {
        const rmCharacters = await getHarryPotterCharacters();
        setHarryPotterCharacters((rmCharacters as Character[]).slice(0, 10) );
    }

    return {
        harryPotterCharacters,
        fetchHarryPotterCharacters
    }
}