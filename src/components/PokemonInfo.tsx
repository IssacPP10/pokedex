import { Pokemon, Species } from '@/types/pokemon';

interface PokemonInfoProps {
  pokemon: Pokemon;
  species: Species | null;
}

export function PokemonInfo({ pokemon, species }: PokemonInfoProps) {
  const description = species?.flavor_text_entries.find(
    entry => entry.language.name === 'en'
  )?.flavor_text.replace(/\\f|\\n/g, ' ');

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-300">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">Height</p>
          <p className="font-semibold">{pokemon.height / 10}m</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Weight</p>
          <p className="font-semibold">{pokemon.weight / 10}kg</p>
        </div>
      </div>
    </div>
  );
}