import { Resolvers } from '../types/graphql';
import { IPlanet, IStation } from './types';

import PlanetService from './service/planetService';
import StationService from './service/stationService';

export const resolvers: Resolvers = {
  Query: {
    planets: async (_, __, { dataSources, prisma }): Promise<IPlanet[]> => {
      const service = new PlanetService(dataSources.planet, prisma);
      return service.planets();
    },
    suitablePlanets: async (_, __, { dataSources, prisma }): Promise<IPlanet[]> => {
      const service = new PlanetService(dataSources.planet, prisma);
      return service.suitablePlanets();
    },
  },

  Mutation: {
    installStation: (_, { planetName }, { prisma }): Promise<IStation> => {
      const service = new StationService(prisma);
      return service.installStation(planetName);
    },
  },
};
