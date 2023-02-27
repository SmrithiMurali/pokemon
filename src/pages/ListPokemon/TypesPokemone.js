import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import { Label, LabelWrapper } from './styles';


const TypesPokemon = ({ data, loading }) => {
  return (
    <LabelWrapper>
      {data.map((item) => {
        return loading === 'loading' ? (
          <Skeleton
            key={item.type.name}
            animation="wave"
            variant="rect"
            width={50}
            height={25}
          />
        ) : (
          <Label key={item.type.name} color={item.type.name}>
            {item.type.name}
          </Label>
        );
      })}
    </LabelWrapper>
  );
};

export default TypesPokemon;
