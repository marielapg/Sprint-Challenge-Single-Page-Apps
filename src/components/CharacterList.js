import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [fData, setFData] = useState([])
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results)
      setData(response.data.results)
      setFData(response.data.results)
    })
    .catch(error => {
      console.log(error);
    });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
    useEffect(() => {
  setFData(data.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
    )
  )
  },[search])

const handleInput = e => {
  setSearch(e.target.value);
};
  return (
    <section className="character-list">
        <div>
      <SearchForm seearch={search} handleInput={handleInput}/>
      </div>
      {fData.map(character => (
        <CharacterCard 
          key={character.id} 
          name={character.name} 
          episode={character.episode} 
          gender={character.gender} 
          image={character.image} 
          species={character.species} 
          status={character.status}
          location={character.location}
          origin={character.origin}/>
      ))}
    </section>
  );
}
