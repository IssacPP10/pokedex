import { Pokemon } from '@/types/pokemon';
import { MAX_POKEMON, POKEMON_PER_PAGE } from '@/constants/pokemon';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PokemonCard } from './PokemonCard';

interface PokemonGridProps {
  pokemonList: Pokemon[];
  selectedPokemon: Pokemon;
  onSelectPokemon: (pokemon: Pokemon) => void;
  page: number;
  onPageChange: (page: number) => void;
}

export function PokemonGrid({ 
  pokemonList, 
  selectedPokemon, 
  onSelectPokemon,
  page,
  onPageChange
}: PokemonGridProps) {
  const maxPages = Math.ceil(MAX_POKEMON / POKEMON_PER_PAGE);

  return (
    <div className="w-full lg:w-2/3">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-[#A888B5] text-white px-4 py-2 rounded-lg hover:bg-[#8a6d97] transition-colors disabled:opacity-50 disabled:hover:bg-[#A888B5]"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeft />
        </button>
        <div className="bg-gray-700 text-white px-6 py-2 rounded-lg font-medium">
          {(page - 1) * POKEMON_PER_PAGE + 1}-{Math.min(page * POKEMON_PER_PAGE, MAX_POKEMON)}
        </div>
        <button
          className="bg-[#A888B5] text-white px-4 py-2 rounded-lg hover:bg-[#8a6d97] transition-colors disabled:opacity-50 disabled:hover:bg-[#A888B5]"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= maxPages}
        >
          <ChevronRight />
        </button>
      </div>

      <ScrollArea className="h-[400px] md:h-[600px] rounded-xl bg-gray-700 shadow-lg p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pr-4">
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={selectedPokemon.id === pokemon.id}
              onSelect={onSelectPokemon}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}