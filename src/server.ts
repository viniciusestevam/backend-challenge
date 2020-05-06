import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

new ApolloServer({
  typeDefs,
  resolvers,
}).listen({ port: 3000 });
