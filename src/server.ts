import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { DataSources } from './types/graphql';
import PlanetAPI from './app/planet/dataSource/planet.api';

new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): DataSources => ({
    planet: new PlanetAPI({ baseURL: 'https://api.arcsecond.io' }),
  }),
}).listen({ port: 3000 });
