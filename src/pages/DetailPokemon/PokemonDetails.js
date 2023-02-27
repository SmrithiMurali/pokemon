import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePokemonSetter from "../../hooks/usePokemonSetter";
import usePokemonState from "../../hooks/usePokemonState";
import { ROUTES } from "../../routers/routepath";
import {
  Header,
  Container,
  List,
  ListAbilities,
  Bar,
  CustomTitle,
  Left,
  Right,
  CustomSubTitle,
  Img,
  Relative,
  Btn
} from "./style";

import {getPokemonImage, getPrimaryColor } from "../../util";



const PokemonDetails = () => {
  const routeParams = useParams();
  const id = +routeParams.id;
  const navigate = useNavigate();
  const { pokemonData } = usePokemonState();
  const { setPokemonId } = usePokemonSetter();

  const launchHomePage = () => {
    navigate(ROUTES.HOME);
  };

  useEffect(() => {
    setPokemonId(id);
  }, [id]);


  function sumValues(val) {
    const sumItems = val.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sumItems;
  }

  return !pokemonData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header>
        <Btn type="button" onClick={launchHomePage}>
          <ArrowBackIcon />
        </Btn>
        <span>
          #{id} {pokemonData?.name.toUpperCase()}
        </span>
      </Header>
      <Container container>
        <Left item xs={6} color={getPrimaryColor(pokemonData.types)}>
          <Relative>
            <CustomTitle as="h2">{pokemonData.name}</CustomTitle>
            <Img src={getPokemonImage(pokemonData)} alt={pokemonData.name} />
            <CustomSubTitle white as="h3">
              Abilities
            </CustomSubTitle>
            <ListAbilities color={getPrimaryColor(pokemonData.types)}>
              {pokemonData.abilities.map((item) => (
                <li>{item.ability.name}</li>
              ))}
            </ListAbilities>
          </Relative>
        </Left>
        <Right item xs={6}>
          <CustomSubTitle as="h3">Base Stats</CustomSubTitle>
          <List>
            {pokemonData.stats.map((item) => (
              <li>
                {item.stat.name.toUpperCase()} {item.base_stat}
                <Bar size={item.base_stat} />
              </li>
            ))}
          </List>
          <strong>Total: </strong>
          {sumValues(pokemonData.stats.map((item) => item.base_stat))}
        </Right>
      </Container>
    </div>
  );
};

export default PokemonDetails;
