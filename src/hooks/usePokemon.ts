import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon, Species } from '@/types/pokemon';
import { MAX_POKEMON, POKEMON_PER_PAGE } from '@/constants/pokemon';

export function usePokemon(page: number) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [species, setSpecies] = useState<Species | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setIsLoading(true);
        const offset = (page - 1) * POKEMON_PER_PAGE;
        const remainingPokemon = MAX_POKEMON - offset;
        const currentPageSize = Math.min(POKEMON_PER_PAGE, remainingPokemon);
        
        const promises = Array.from({ length: currentPageSize }, (_, i) => {
          const pokemonId = offset + i + 1;
          return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        });
        
        const responses = await Promise.all(promises);
        const newPokemonList = responses.map(response => response.data);
        setPokemonList(newPokemonList);
        
        if (!selectedPokemon) {
          setSelectedPokemon(newPokemonList[0]);
        }
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, [page]);

  useEffect(() => {
    const fetchSpecies = async () => {
      if (selectedPokemon) {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon.id}`);
          setSpecies(response.data);
        } catch (error) {
          console.error('Error fetching species:', error);
        }
      }
    };

    fetchSpecies();
  }, [selectedPokemon]);

  return {
    selectedPokemon,
    setSelectedPokemon,
    pokemonList,
    species,
    isLoading
  };
}