import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import SearchPokemon from "../../components/searchPokemon";
import usePokemonSetter from "../../hooks/usePokemonSetter";
import usePokemonState from "../../hooks/usePokemonState";
import Cards from "./cardPokemon";
import ListPagination from "./pagination";
import {
  Box as BoxStyled,
  Container,
  Header,
  TitleStyled,
  SelectStyled
} from "./styles";
import {sortOpt} from "../../util"

export const ListPokemon = () => {
  const { pokemonsList, isLoading, count } = usePokemonState();
  const { searchPokes, getPokemons } = usePokemonSetter();
  const [p, setP] = useState([]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const i = searchPokes(e.target.search.value);
    setP([...i]);
  };

  const handleChangeSort = (event) => {
    let sortArr = [...pokemonsList];

    if (event.target.value === "ID") {
      sortArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    } else if(event.target.value === "Height") {
      sortArr.sort((a, b) => (a.height > b.height ? 1 : b.height > a.height ? -1 : 0));
    }
    else{
      sortArr.sort((a, b) => (a.weight > b.weight ? 1 : b.weight > a.weight ? -1 : 0));
    }
    setP([...sortArr]);
  };

  const handlePagination = (e, value) => {
    const i = getPokemons(value);
    setP([...i]);
  };

  useEffect(() => {
    setP([...pokemonsList]);
  }, [pokemonsList]);

  return (
    <div>
      <Container>
        <Header container>
          <Grid item xs={12} md={5}>
            <TitleStyled variant="h2" size="h3">
              Pokemons
            </TitleStyled>
            <p>Search for favourite Pokémons now!</p>
          </Grid>
          <Grid item xs={8} md={5}>
            <Box mt={2} />
            <SearchPokemon handleSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={4} md={2}>
            <SelectStyled onChange={handleChangeSort}>
              {sortOpt.map((sort) => (
                <option key={sort} value={sort}>
                  {sort}
                </option>
              ))}
            </SelectStyled>
          </Grid>
        </Header>
        <BoxStyled>
          {p?.map((data) => (
            <Cards
              key={data.id}
              data={data}
              loading={isLoading}
              disableClick={false}
            />
          ))}
        </BoxStyled>

        <ListPagination
          pagination={count}
          loading={isLoading}
          handlePagination={handlePagination}
        />
      </Container>
    </div>
  );
};
