import { createTestClient } from 'apollo-server-testing';
import { getApolloServer } from './utils';

import { PLANETS } from './utils/calls';

import PlanetAPI from '../src/app/planet/dataSource/planet.api';

describe('Planet module', () => {
  test('When querying planets, should return valid array of planets', async () => {
    const planet = new PlanetAPI({ baseURL: 'https://api.arcsecond.io' });
    const server = getApolloServer({ planet });

    const { query } = createTestClient(server);

    const res = await query({ query: PLANETS });
    expect(res.data!.planets.length).toBeGreaterThan(0);
  });
});
