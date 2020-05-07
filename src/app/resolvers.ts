import { IPlanet, IStation } from './types';
import { Resolvers } from '../types/graphql';

import PlanetService from './service/planetService';
import StationService from './service/stationService';

export const resolvers: Resolvers = {
  Query: {
    // (como não estamos usando await e a assinatura de PlanetService.planets/1
    // retorna uma Promise, não precisamos mencionar o async)
    // ---
    // obs.: tentei encurtar esse código botando o services no context
    // só que não deu pois o PlanetService precisa ter acesso ao DataSource
    // para ser instanciado :P
    // mas tá muito bom! parabéns!!
    planets: (_, { pages }, { dataSources: { planet }, prisma }): Promise<IPlanet[]> => {
      const service = new PlanetService(planet, prisma);
      return service.planets(pages);
    },
    suitablePlanets: (_, { pages }, { dataSources: { planet }, prisma }): Promise<IPlanet[]> => {
      const service = new PlanetService(planet, prisma);
      return service.suitablePlanets(pages);
    },
  },

  Mutation: {
    installStation: (_, { planetName }, { prisma }): Promise<IStation> => {
      const service = new StationService(prisma);
      return service.installStation(planetName);
    },
  },
};
