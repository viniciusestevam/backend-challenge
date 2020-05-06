import { createTestClient } from 'apollo-server-testing';
import { PrismaClient } from '@prisma/client';

import PlanetAPI from '../src/app/dataSource/planet.api';
import { getApolloServer } from './utils';
import { INSTALL_STATION } from './utils/calls';

const client = new PrismaClient();

afterAll(async () => {
  client.disconnect();
});

describe('Station module', () => {
  test('When given a planet name, should save a station on the DB', async () => {
    const planet = new PlanetAPI({ baseURL: 'https://api.arcsecond.io' });
    const server = getApolloServer({ planet }, () => ({ prisma: client }));

    const { mutate } = createTestClient(server);

    await mutate({
      mutation: INSTALL_STATION,
      variables: { planetName: 'test' },
    });

    const second = await mutate({
      mutation: INSTALL_STATION,
      variables: { planetName: 'test' },
    });

    expect(second.data!.installStation.id).toBe(2);
  });
});
