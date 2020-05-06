import { ApolloServer } from 'apollo-server';
import { typeDefs } from './app/planet/typeDefs';
import { resolvers } from './app/planet/resolvers';
import { DataSources } from './types/graphql';
import PlanetAPI from './app/planet/dataSource/planet.api';

new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): DataSources => ({
    planet: new PlanetAPI({ baseURL: 'https://api.arcsecond.io' }),
  }),
}).listen({ port: 3000 });
