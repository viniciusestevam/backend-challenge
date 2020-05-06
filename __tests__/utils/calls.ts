export const PLANETS = `
  query {
    planets {
      name,
      mass
    }
  }
`;

export const SUITABLE_PLANETS = `
  query {
    suitablePlanets {
      name,
      mass
    }
  }
`;
