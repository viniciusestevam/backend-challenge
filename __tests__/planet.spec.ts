import { createTestClient } from 'apollo-server-testing';
import { getApolloServer, mockSuitablePlanets } from './utils';

import { PLANETS, SUITABLE_PLANETS } from './utils/calls';

import PlanetAPI from '../src/app/planet/dataSource/planet.api';

describe('Planet module', () => {
  test('When querying planets, should return valid array of planets', async () => {
    const planet = new PlanetAPI({ baseURL: 'https://api.arcsecond.io' });
    const server = getApolloServer({ planet });

    const { query } = createTestClient(server);

    const res = await query({ query: PLANETS });
    expect(res.data!.planets.length).toBeGreaterThan(0);
  });

  test('When provided planets, should return only the suitables (mass > 25)', async () => {
    const planet = new PlanetAPI({ baseURL: 'https://api.arcsecond.io' });
    const server = getApolloServer({ planet });

    const { query } = createTestClient(server);
    planet.planets = jest.fn(async () => mockSuitablePlanets);

    const res = await query({ query: SUITABLE_PLANETS });
    expect(res.data!.suitablePlanets.length).toBe(1);
  });
});
