
import { createContext } from "react";
import {  initialState } from "./reducer";

export const PokemonContext = createContext(initialState);