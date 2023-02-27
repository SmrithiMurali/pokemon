import styled, { css } from 'styled-components';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export const Box = styled.div`
  background: #f5f5f5;
`;

export const ErrorBadge = styled(InputAdornment)``;

export const IconButtonStyled = styled(IconButton)`
  padding: 0%;
`;


export const TextStyled = styled(Typography)`
  font-weight:bold;

  ${(props) =>
    props.size === 'h1' &&
    css`
      font-size: 28px;
    `}
  ${(props) =>
    props.size === 'h2' &&
    css`
      font-size: 26px;
    `}
  ${(props) =>
    props.size === 'h3' &&
    css`
      font-size: 24px;
    `}
  ${(props) =>
    props.size === 'h4' &&
    css`
      font-size: 22px;
    `}
`;
