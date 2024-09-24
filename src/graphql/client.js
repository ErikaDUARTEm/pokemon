import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta', // endpoint de la API de Pokémon GraphQL
  cache: new InMemoryCache(),
});

export default client;
