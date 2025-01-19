import { useState } from 'react';
import { usePokemon } from '@/hooks/usePokemon';
import { Header } from '@/components/Header';
import { PokemonDetail } from '@/components/PokemonDetail';
import { PokemonGrid } from '@/components/PokemonGrid';

function App() {
  const [page, setPage] = useState(1);
  const { selectedPokemon, setSelectedPokemon, pokemonList, species, isLoading } = usePokemon(page);

  if (isLoading || !selectedPokemon || pokemonList.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <Header />
      
      <div className="w-full max-w-[1200px] bg-gray-800 backdrop-blur-sm rounded-xl shadow-2xl p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        <PokemonDetail 
          pokemon={selectedPokemon} 
          species={species}
        />
        <PokemonGrid
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
          onSelectPokemon={setSelectedPokemon}
          page={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default App;