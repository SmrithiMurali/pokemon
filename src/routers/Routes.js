import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routepath"
import { PokemonProvider } from "../context/PokemonProvider";
import { ListPokemon } from "../pages/ListPokemon";

const PokemonDetails = lazy(() =>
  import("../pages/DetailPokemon/PokemonDetails")
);

const Router = () => (
  <PokemonProvider>
    <Suspense fallback={<div>...Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<ListPokemon />} />
          <Route path={`${ROUTES.DETAILS}/:id`} element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </PokemonProvider>
);

export default Router;
