import axios from 'axios';

const baseUrl =
    'https://raw.githubusercontent.com/shingravirei/pokedex-api/master/pokemons.json';

const fetchPokedex = async () => {
    const res = await axios.get(baseUrl);

    return res.data;
};

export const api = {
    fetchPokedex
};
