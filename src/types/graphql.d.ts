import { IResolvers } from 'apollo-server';
import PlanetAPI from '../app/dataSource/planet.api';

type ResolverFunction = (parent: any, args: any, context: Context) => any;
type DataSources = {
  planet: PlanetAPI;
};
type Context = {
  dataSources: DataSources;
};

interface ResolverMap {
  [field: string]: ResolverFunction;
}

interface Resolvers extends IResolvers {
  Query: ResolverMap;
}
