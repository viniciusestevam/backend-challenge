import { IResolvers } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

import PlanetAPI from '../app/dataSource/planet.api';
import PlanetService from '../app/service/planetService';
import StationService from '../app/service/stationService';

type DataSources = {
  planet: PlanetAPI;
};
type Services = {
  planet: PlanetService;
  station: StationService;
}

type Context = {
  prisma: PrismaClient;
  dataSources: DataSources;
};

// também pode ser escrito como:
// type ResolverMap = Record<string, ResolverFunction>
// interface ResolverMap {
//   [field: string]: ResolverFunction;
// }

// Podemos usar esse próprio IResolvers, e se olharmos
// na sua definição, ele mesmo já popula as funções com
// context baseado no segundo type parameter
type Resolvers = IResolvers<any, Context>;
