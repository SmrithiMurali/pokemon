import * as ACTIONS from "./actionTypes";

export const initialState = {
  pokemonsList: [],
  id: null,
  isLoading: true,
  name:"",
  count : 1
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_POKEMONS_LIST:
      return {
        ...state,
        pokemonsList: [...action.payload],
      };

    case ACTIONS.SET_PAGES:
        return {
          ...state,
          count: action.payload,
        };

    case ACTIONS.SET_POKEMON_DATA:
      return {
        ...state,
        pokemonData: action.payload,
      };
      
    case ACTIONS.SET_POKEMON_ID:
      return {
        ...state,
        id: action.payload,
      };

    case ACTIONS.SET_POKEMON_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
