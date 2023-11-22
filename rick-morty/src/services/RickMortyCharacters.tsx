export const getRickMortyCharacters =async ()=>{
    const response =  await fetch('https://rickandmortyapi.com/api/character')
    return await response.json();
}