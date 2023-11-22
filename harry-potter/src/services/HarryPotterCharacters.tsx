export const getHarryPotterCharacters =async ()=>{
    const response =  await fetch('https://hp-api.onrender.com/api/characters')
    return await response.json();
}