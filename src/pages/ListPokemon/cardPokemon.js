import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { Details, DetailsLabel, DetailsWrap, NumberStyled, Title, Wrapper } from "./styles";
import TypesPokemon from "./TypesPokemone";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../routers/routepath";
import {formatTextToCapitalize, getPokemonImage, getPrimaryColor } from "../../util";

const CardPokemon = ({ data, loading }) => {
    const navigate = useNavigate();

    const launchDetailsPage = () => {
        navigate(`${ROUTES.DETAILS}/${data.id}`);
      };

    return (
        <Wrapper
            color={getPrimaryColor(data.types)}
            key={data.id}
            loading={loading}
            onClick={launchDetailsPage}
        >
            <div>
                {loading === "loading" ? (
                    <Skeleton animation="wave" variant="text" width={50} height={25} />
                ) : (
                    <NumberStyled># {data.id }</NumberStyled>
                )}

                {loading === "loading" ? (
                    <Skeleton animation="wave" variant="text" width={125} height={43} />
                ) : (
                    <Title as="h2">{formatTextToCapitalize(data.name)}</Title>
                )}

                {loading === "loading" ? (
                    <Skeleton animation="wave" variant="text" width={50} height={50} />
                ) : (
                    <DetailsWrap>
                        <DetailsLabel>Height</DetailsLabel>
                        <Details>{data.height} cm</Details>
                    </DetailsWrap>
                )}

                {loading === "loading" ? (
                    <Skeleton animation="wave" variant="text" width={50} height={50} />
                ) : (
                    <DetailsWrap>
                        <DetailsLabel>Weight</DetailsLabel>
                        <Details>{data.weight} g</Details>
                    </DetailsWrap>
                )}
                <TypesPokemon loading={loading} data={data.types} />
            </div>

            <div>
                {loading === "loading" ? (
                    <Skeleton animation="wave" variant="circle" width={96} height={96} />
                ) : (
                    <>
                        <img
                            width={96}
                            height={96}
                            src={getPokemonImage(data)}
                            alt={data.name}
                        />
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export default React.memo(CardPokemon);
