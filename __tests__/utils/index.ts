import { ApolloServer } from 'apollo-server';

import { typeDefs } from '../../src/app/planet/typeDefs';
import { resolvers } from '../../src/app/planet/resolvers';
import { IAPIResponse } from '../../src/app/planet/dataSource/types';

export function getApolloServer(dataSources: any): ApolloServer {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ ...dataSources }),
  });
}

export const mockSuitablePlanets: IAPIResponse = {
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
