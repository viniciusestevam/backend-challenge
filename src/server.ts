import { ApolloServer } from 'apollo-server';
import { typeDefs } from './app/typeDefs';
import { resolvers } from './app/resolvers';
import { context } from './context';

import { DataSources } from './types/graphql';
import PlanetAPI from './app/dataSource/planet.api';

(async () => {
  const { port } = await new ApolloServer({
    typeDefs,
    resolvers,
    context,
    dataSources: (): DataSources => ({
      planet: new PlanetAPI({ baseURL: 'https://api.arcsecond.io' }),
    }),
  }).listen({ port: 3000 });

  console.log(`🚀 GraphQL playground on http://localhost:${port}`);
})();
