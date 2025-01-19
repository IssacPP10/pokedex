export interface Pokemon {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
}

export interface Species {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
}