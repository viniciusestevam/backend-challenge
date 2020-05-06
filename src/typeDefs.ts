import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Setup {
    name: String!
  }

  type Query {
    setup: [Setup!]
  }
`;
