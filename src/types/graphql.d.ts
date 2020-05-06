import { IResolvers } from 'apollo-server';

type ResolverFunction = (parent: any, args: any, context: Context) => any;
type Context = {};

interface ResolverMap {
  [field: string]: ResolverFunction;
}

interface Resolvers extends IResolvers {
  Query: ResolverMap;
}
