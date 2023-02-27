const POKEMONS_PER_BATCH = 10;
const INITIAL_OFFSET = 0;
const baseURL = "https://pokeapi.co/";
export const initialURL = `https://pokeapi.co/api/v2/pokemon?offset=${INITIAL_OFFSET}&limit=${POKEMONS_PER_BATCH}`;

export const fetchPokemonData = async (id) => {
  const response = await fetch(`${baseURL}api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    const result = await response.json();
    return result;
  }
};

export const getPokemonPerPage = async (value) => {
    const response = await fetch(`${baseURL}api/v2/pokemon?limit=${POKEMONS_PER_BATCH}&offset=${value}`);
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      const result = await response.json();
      return result;
    }
  };
