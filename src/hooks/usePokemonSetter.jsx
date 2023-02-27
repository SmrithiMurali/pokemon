import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

 const usePokemonSetter = () => {
  const context = useContext(PokemonContext);
  if (context === undefined)
    throw new Error("usePokemonSetter must be used within a PokemonProvider");
  const { state, ...rest } = context;
  return rest;
};

export default usePokemonSetter;