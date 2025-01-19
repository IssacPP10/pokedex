import { Heart, Swords, Shield, Zap, Scale, Ruler, Dumbbell } from 'lucide-react';
import { Pokemon } from '@/types/pokemon';

const StatIcon = ({ stat }: { stat: string }) => {
  switch (stat) {
    case 'hp': return <Heart className="w-4 h-4" />;
    case 'attack': return <Swords className="w-4 h-4" />;
    case 'defense': return <Shield className="w-4 h-4" />;
    case 'special-attack': return <Zap className="w-4 h-4" />;
    case 'special-defense': return <Scale className="w-4 h-4" />;
    case 'speed': return <Ruler className="w-4 h-4" />;
    default: return <Dumbbell className="w-4 h-4" />;
  }
};

interface PokemonStatsProps {
  pokemon: Pokemon;
}

export function PokemonStats({ pokemon }: PokemonStatsProps) {
  return (
    <div className="space-y-2">
      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name} className="flex items-center gap-2">
          <StatIcon stat={stat.stat.name} />
          <span className="capitalize text-sm w-24">{stat.stat.name.replace('-', ' ')}:</span>
          <div className="flex-1 bg-gray-800 rounded-full h-2">
            <div
              className="bg-[#A888B5] rounded-full h-2"
              style={{ width: `${(stat.base_stat / 255) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium w-8">{stat.base_stat}</span>
        </div>
      ))}
    </div>
  );
}