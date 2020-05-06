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

export const INSTALL_STATION = `
  mutation InstallStation($planetName: String!) {
    installStation(planetName: $planetName) {
      id,
      planetName
    }
  }
`;
