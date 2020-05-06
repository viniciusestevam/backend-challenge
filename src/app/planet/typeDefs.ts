import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Planet {
    name: String!
    mass: Float
  }

  type Query {
    planets: [Planet!]
  }
`;
