export const sortOpt = ["ID", "Height", "Weight"];

export const formatTextToCapitalize = (value) => {
    const text = value
        .toLocaleLowerCase()
        .split(" ")
        .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
        .join(" ");

    return text;
};


export const getPokemonImage = (pokemonData) => {
    const image =
        pokemonData.sprites.other.dream_world.front_default ||
        pokemonData.sprites.front_default;
    return image;
};

export function getPrimaryColor(values) {
    const getPrimaryNameType = values.find((v) => v.slot === 1)?.type.name;

    return getPrimaryNameType;
}