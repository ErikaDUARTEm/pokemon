import { gql, useQuery } from '@apollo/client';
import './PokemonList.css';

// Consulta GraphQL para obtener nombre, ID e imagen
const GET_POKEMONS_WITH_IMAGE = gql`
query GetPokemonsWithSprites {
  pokemons: pokemon_v2_pokemon(order_by: { name: asc }, limit: 60) {
    id
    name
    pokemon_v2_pokemonsprites {
      sprites
    }
  }
}
`;

const PokemonList = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS_WITH_IMAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className='list-pokemon'>
      {data.pokemons.map((pokemon) => {
        // Accede directamente a la imagen frontal del sprite
        const sprite = pokemon.pokemon_v2_pokemonsprites[0].sprites;

        return (
          <li key={pokemon.id}>
            <p className='id-pokemon'>#{pokemon.id}</p>
            <img
              src={sprite.front_default} // Accede a la propiedad `front_default` para la imagen frontal
              alt={pokemon.name}
              className='img-pokemon'
            />
            <div className='sombra-card'></div>
            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
