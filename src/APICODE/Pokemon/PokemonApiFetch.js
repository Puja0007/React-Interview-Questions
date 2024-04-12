import React, { useState, useEffect } from 'react';
import './PokemonApp.css'; // Assuming you've saved the CSS file as PokemonApp.css

function PokemonApp() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [cachedPokemonDetails, setCachedPokemonDetails] = useState({});

  useEffect(() => {
    // Fetch list of pokemons
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error('Error fetching pokemons:', error));
  }, []);

  const handlePokemonSelect = async (pokemon) => {
    setSelectedPokemon(pokemon);
    // Check if pokemon details are cached
    if (cachedPokemonDetails[pokemon.url]) {
      setPokemonDetails(cachedPokemonDetails[pokemon.url]);
    } else {
      // Fetch pokemon details
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setPokemonDetails(data);
        // Cache pokemon details
        setCachedPokemonDetails(prevState => ({
          ...prevState,
          [pokemon.url]: data,
        }));
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">Pokemon Details</h1>
      <label htmlFor="pokemon-select" className="label">Choose a Pokemon:</label>
      <select
        id="pokemon-select"
        value={selectedPokemon ? selectedPokemon.name : ''}
        onChange={(e) => {
          const selected = pokemonList.find(pokemon => pokemon.name === e.target.value);
          handlePokemonSelect(selected);
        }}
        className="select"
      >
        <option value="" className="option-placeholder">Select a Pokemon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.name} className="option">{pokemon.name}</option>
        ))}
      </select>
      <div className="details-container">
        {pokemonDetails.name && (
          <div>
            <h2>{pokemonDetails.name}</h2>
            <h3 className="subtitle">Abilities:</h3>
            <ul className="abilities-list">
              {pokemonDetails.abilities.map((ability, index) => (
                <li key={index} className="ability">{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonApp;
