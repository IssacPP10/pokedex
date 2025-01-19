import { Pokemon } from '@/types/pokemon';
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";

interface PokemonCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
  onSelect: (pokemon: Pokemon) => void;
}

export function PokemonCard({ pokemon, isSelected, onSelect }: PokemonCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button
          onClick={() => onSelect(pokemon)}
          className={`p-2 rounded-lg transition-all ${
            isSelected
              ? 'bg-[#A888B5] ring-2 ring-[#8a6d97]'
              : 'hover:bg-gray-600'
          }`}
        >
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-full h-20 object-contain pixelated"
          />
          <p className="text-sm text-center capitalize mt-1 font-medium text-white">
            {pokemon.name}
          </p>
        </button>
      </HoverCardTrigger>      
    </HoverCard>
  );
}