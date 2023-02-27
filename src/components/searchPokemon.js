import React from 'react';
import Input from './inputComponent';

const SearchPokemon = ({handleSubmit}) => {

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="What Pokemon are you looking for?"
           // value={values.search}
          />
        </form>
    </div>
  );
};

export default SearchPokemon;
