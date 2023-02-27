import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from './styles';


const Input = ({
  className,
  type,
  name,
  onChange,
  onBlur,
  errors,
  value,
  touched,
  placeholder,
  label,
}) => {

  return (
    <Box>
      <TextField
        type={type}
        name={name}
        onChange={onChange}
        label={label}
        error={!!touched && !!errors}
        value={value}
        fullWidth
        placeholder={placeholder}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
};

export default Input;
