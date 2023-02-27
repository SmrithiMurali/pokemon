import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routepath"
import { PokemonProvider } from "../context/PokemonProvider";
import { ListPokemon } from "../pages/ListPokemon";

const Router = () => (
  <PokemonProvider>
    <Suspense fallback={<div>...Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<ListPokemon />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </PokemonProvider>
);

export default Router;
