import { Pokemon, Species } from '@/types/pokemon';
import { TYPE_COLORS } from '@/constants/pokemon';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PokemonStats } from './PokemonStats';
import { PokemonInfo } from './PokemonInfo';
import { PokemonAbilities } from './PokemonAbilities';

interface PokemonDetailProps {
  pokemon: Pokemon;
  species: Species | null;
}

export function PokemonDetail({ pokemon, species }: PokemonDetailProps) {
  return (
    <div className="w-full lg:w-1/3 bg-gray-700 rounded-xl shadow-lg p-4">
      <div className="relative">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-full h-48 md:h-64 object-contain"
        />
        <div className="absolute top-2 right-2 text-2xl font-bold text-[#A888B5]">
          #{String(pokemon.id).padStart(3, '0')}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center capitalize mt-4 mb-2 text-white">
        {pokemon.name}
      </h2>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className={`${
              TYPE_COLORS[type.type.name as keyof typeof TYPE_COLORS]
            } text-white px-4 py-1 rounded-full text-sm font-semibold`}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <Separator className="my-4 bg-gray-600" />

      <Tabs defaultValue="stats" className="text-white">
        <TabsList className="w-full bg-gray-800">
          <TabsTrigger value="stats" className="flex-1 data-[state=active]:bg-[#A888B5]">Stats</TabsTrigger>
          <TabsTrigger value="info" className="flex-1 data-[state=active]:bg-[#A888B5]">Info</TabsTrigger>
          <TabsTrigger value="abilities" className="flex-1 data-[state=active]:bg-[#A888B5]">Abilities</TabsTrigger>
        </TabsList>
        <TabsContent value="stats">
          <PokemonStats pokemon={pokemon} />
        </TabsContent>
        <TabsContent value="info">
          <PokemonInfo pokemon={pokemon} species={species} />
        </TabsContent>
        <TabsContent value="abilities">
          <PokemonAbilities pokemon={pokemon} />
        </TabsContent>
      </Tabs>
    </div>
  );
}