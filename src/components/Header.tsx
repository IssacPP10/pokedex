import { Github } from 'lucide-react';

export function Header() {
  return (
    <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
          alt="Pokemon Logo" 
          className="w-12 h-12 md:w-16 md:h-16"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-white">Pokédex</h1>
      </div>
      <a 
        href="https://github.com/issacpp10" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-[#A888B5] transition-colors"
      >
        <Github className="w-5 h-5" />
        <span>Created by issacpp10</span>
      </a>
    </div>
  );
}