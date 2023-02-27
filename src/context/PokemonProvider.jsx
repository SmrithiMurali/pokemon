import { useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducer";
import * as ACTIONS from "./actionTypes";
import {
  initialURL,
} from "../api/pokemonData";
import { PokemonContext } from "./PokemonContext";
import { fetchPokemonData, getPokemonPerPage } from "../api/pokemonData";


export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPokemonsList = (pokemons) => {
    dispatch({
      type: ACTIONS.SET_POKEMONS_LIST,
      payload: pokemons,
    });
  };

  const setPokemonData = (pokemon) => {
    dispatch({
      type: ACTIONS.SET_POKEMON_DATA,
      payload: pokemon,
    });
  };

  const setPokemonId = (id) => {
    dispatch({
      type: ACTIONS.SET_POKEMON_ID,
      payload: id,
    });
  };

  const setPages = (pages) => {
    dispatch({
      type: ACTIONS.SET_PAGES,
      payload: pages,
    });
  };

  const setPokemonName = (name) => {
    dispatch({
      type: ACTIONS.SET_POKEMON_NAME,
      payload: name,
    });
  };

  const setLoading = (loading) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: loading,
    });
  };


  const searchPokes = async (value) => {
    setPokemonName(value)
    const pokemonData = await fetchPokemonData(value);
    setPokemonsList([pokemonData]);
    return [pokemonData];
 
  }

  const getPokemons = async (value) => {
    setLoading(true)
    const resp = await getPokemonPerPage(value*10);

    setPages(resp.count)

    const pokemonsList = await Promise.all(
      resp.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const res = response.json();
        return res;
      })
    );

    setPokemonsList(pokemonsList);
    setLoading(false)
  }

  useEffect(() => {
    if (!state.id) return;
    
    (async function setPokemonDetails() {
      const pokemonData = await fetchPokemonData(state.id);
      setPokemonData(pokemonData);
    })();

  }, [state.id]);
 
  const loadPokemons = async () => {
    setLoading(true)
    const resp = await fetch(initialURL);
    const {count, results } = await resp.json();
    setPages(count);
    const pokemonsList = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const res = response.json();
        return res;
      })
    );

    setPokemonsList(pokemonsList);
    setLoading(false)
  };


  useEffect(() => {
    loadPokemons().then(() => state.isLoading && setLoading(false));
  }, []);

  return (
    <PokemonContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        state,
        dispatch,
        searchPokes,
        getPokemons,
        setPokemonId
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
