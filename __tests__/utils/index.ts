import { ApolloServer } from 'apollo-server';

import { typeDefs } from '../../src/app/planet/typeDefs';
import { resolvers } from '../../src/app/planet/resolvers';

export function getApolloServer(dataSources: any): ApolloServer {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ ...dataSources }),
  });
}
