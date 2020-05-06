import { IResolvers } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

import PlanetAPI from '../app/dataSource/planet.api';

type ResolverFunction = (parent: any, args: any, context: Context) => any;
type DataSources = {
  planet: PlanetAPI;
};
type Context = {
  prisma: PrismaClient;
  dataSources: DataSources;
};

interface ResolverMap {
  [field: string]: ResolverFunction;
}

interface Resolvers extends IResolvers {
  Query: ResolverMap;
  Mutation: ResolverMap;
}
