import { Pokemon } from '@/types/pokemon';

interface PokemonAbilitiesProps {
  pokemon: Pokemon;
}

export function PokemonAbilities({ pokemon }: PokemonAbilitiesProps) {
  return (
    <div className="space-y-2">
      {pokemon.abilities.map((ability) => (
        <div
          key={ability.ability.name}
          className="bg-gray-800 rounded-lg p-2"
        >
          <p className="capitalize font-medium">
            {ability.ability.name.replace('-', ' ')}
          </p>
        </div>
      ))}
    </div>
  );
}