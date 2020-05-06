import { Resolvers } from './types/graphql';

export const resolvers: Resolvers = {
  Query: {
    setup: () => {
      return [
        {
          name: 'a',
        },
      ];
    },
  },
};
