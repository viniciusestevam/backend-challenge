import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Planet {
    name: String!
    mass: Float
  }

  type Station {
    id: Int!
    planetName: String!
    createdAt: String!
  }

  type Query {
    planets: [Planet!]
    suitablePlanets: [Planet!]
  }

  type Mutation {
    installStation(planetName: String!): Station!
  }
`;
