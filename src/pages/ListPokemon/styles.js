import styled, {css} from 'styled-components';
import Text from '../../components/textComponent';
import Grid from '@mui/material/Grid';
import Pagination from "@mui/material/Pagination";

  export const StyledPagination = styled(Pagination)`
  float: right;
  margin: 15px 0;
`;

export const SelectStyled = styled.select`
height: 35px;
background: white;
color: gray;
padding: 5px;
font-size: 14px;
margin: 15px;
position: relative;
top: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px 15px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 35px 25px;
  width: 100%;
`;


export const Header = styled(Grid)`
  margin-bottom: 35px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;


export const TitleStyled = styled(Text)`
  font-size: 42px;
  color: #17171b;
  margin-bottom: 10px;
`;
export const Details = styled.span`
  font-size: 16px;
  color: #17171b;
  margin-bottom: 5px;
  font-weight:bold;

`;

export const DetailsLabel = styled.span`
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
`;

export const DetailsWrap = styled.div`
display: flex;
justify-content:space-between;
`;


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

export const Wrapper = styled.div`
  border-radius: 15px;
  padding: 15px;
  cursor:pointer;
  ${(props) => bgType[props.color || 'default']}
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;
export const NumberStyled = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;
export const Label = styled.span`
  font-size: 14px;
  padding: 5px;
  ${(props) => typesBg[props.color || 'rock']}
  color: #fff;
  text-transform: capitalize;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  min-width: 45px;
  text-align: center;
`;

export const LabelWrapper = styled.div`
  display: inline-grid;
  grid-gap: 5px 10px;
  grid-area: auto;
  grid-auto-flow: column;
  margin-top: 10px;
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