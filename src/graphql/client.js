// src/graphql/client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta', // URL del endpoint de la API de Pokémon GraphQL
  cache: new InMemoryCache(),
});

export default client;
