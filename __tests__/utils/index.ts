import { ApolloServer } from 'apollo-server';

import { typeDefs } from '../../src/app/typeDefs';
import { resolvers } from '../../src/app/resolvers';
import { IPlanetAPIResponse } from '../../src/app/dataSource/types';

export function getApolloServer(dataSources: any, context?: any): ApolloServer {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context,
    dataSources: () => ({ ...dataSources }),
  });
}

export const mockPlanets: IPlanetAPIResponse = {
  count: 0,
  next: '',
  previous: '',
  results: [
    {
      name: 'unsuitable',
      mass: {
        unit: 'any',
        value: 1,
      },
    },
    {
      name: 'unsuitable',
      mass: {
        unit: 'any',
        value: 26,
      },
    },
  ],
};
