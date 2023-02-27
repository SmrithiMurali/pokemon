import styled, { css } from 'styled-components';
import  Text  from "../../components/textComponent"
import Grid from "@mui/material/Grid";


export const bgType = {
    grass: css`
      background-color: #8bbe8a;
    `,
    fire: css`
      background-color: #ffa756;
    `,
    water: css`
      background-color: #58abf6;
    `,
    bug: css`
      background-color: #8bd674;
    `,
    normal: css`
      background-color: #b5b9c4;
    `,
    poison: css`
      background-color: #9f6e97;
    `,
    electric: css`
      background-color: #f2cb55;
    `,
    ground: css`
      background-color: #f78551;
    `,
    fairy: css`
      background-color: #eba8c3;
    `,
    flying: css`
      background-color: #748fc9;
    `,
    fighting: css`
      background-color: #eb4971;
    `,
    rock: css`
      background-color: #6f6e78;
    `,
    ice: css`
      background-color: #91d8df;
    `,
    psychic: css`
      background-color: #ff6568;
    `,
    dragon: css`
      background-color: #7383b9;
    `,
    ghost: css`
      background-color: #8571be;
    `,
    steel: css`
      background-color: #4c91b2;
    `,
    default: css`
      background-color: #fafafa;
    `,
  };



export const Container = styled(Grid)`
  height: 100%;
`;


export const List = styled.ul`
  margin-top: 35px;
  margin-bottom: 15px;
  li {
    padding: 10px 0;
  }
`;

export const Bar = styled.div`
  height: 4px;
  background:#d9d9d9;
  width: 150px;
  position: relative;
  border-radius: 15px;
  &:after {
    width: ${(props) => props.size / 1.5}%;
    height: 100%;
    position: absolute;
    background: #000;
    content: '';
    border-radius: 15px;
  }
`;

export const CustomTitle = styled(Text)`
  color:#000;
  font-size: 32px;
  text-transform: capitalize;
`;

export const CustomSubTitle = styled(Text)`
  color: #3b3b3b;
  font-size: 18px;
`;

export const Left = styled(Grid)`
  ${(props) => bgType[props.color || 'default']}
  padding:50px 35px;
  text-align: center;
  position: relative;

  &:before {
    position: absolute;
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.1;
  }
`;

export const Relative = styled.div`
  position: relative;
`;

export const Right = styled(Grid)`
  padding: 50px 35px;
`;

export const Header = styled.header`
background-color: #fff;
padding-bottom: 5px;
`;

export const ListAbilities = styled.ul`
  margin-top: 25px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  li {
    ${(props) => typesBg[props.color || 'default']}
    padding:5px;
    color : #000;
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize
  }
`;

export const typesBg = {
    grass: css`
      background: #62b957;
    `,
    fire: css`
      background: #fd7d24;
    `,
    water: css`
      background: #4a90da;
    `,
    bug: css`
      background: #8cb230;
    `,
    normal: css`
      background: #9da0aa;
    `,
    poison: css`
      background: #a552cc;
    `,
    electric: css`
      background: #eed535;
    `,
    ground: css`
      background: #dd7748;
    `,
    fairy: css`
      background: #ed6ec7;
    `,
    fighting: css`
      background: #d04164;
    `,
    flying: css`
      background: #748fc9;
    `,
    rock: css`
      background: #baab82;
    `,
    ice: css`
      background-color: #61cec0;
    `,
    psychic: css`
      background-color: #ea5d60;
    `,
    dragon: css`
      background-color: #0f6ac0;
    `,
    ghost: css`
      background-color: #556aae;
    `,
    steel: css`
      background-color: #417d9a;
    `,
    default: css`
    background-color: #fafafa;
    `,
  };

export const Img = styled.img`
  margin-bottom: 35px;
  margin-top: 15px;
`;

export const Btn = styled.button`
border: none;
background-color: transparent;
padding-top: 5px;
`

