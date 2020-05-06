import { Resolvers } from '../../types/graphql';
import { IPlanet } from './types/planet';

import PlanetService from './service/planetService';

export const resolvers: Resolvers = {
  Query: {
    planets: async (_, __, { dataSources }): Promise<IPlanet[]> => {
      const service = new PlanetService(dataSources.planet);
      return await service.planets();
    },
  },
};
