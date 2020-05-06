import { IAPIResponsePlanet } from '../dataSource/types';
import { IPlanet } from '../types';

import PlanetAPI from '../dataSource/planet.api';
import { PrismaClient } from '@prisma/client';

export default class PlanetService {
  constructor(private dataSource: PlanetAPI, private repository: PrismaClient) {}

  async planets(): Promise<IPlanet[]> {
    const dataSourceResponse = await this.dataSource.planets();
    return await Promise.all(
      dataSourceResponse.results.map(responsePlanet =>
        this.mapPlanetResponse(responsePlanet)
      )
    );
  }

  async suitablePlanets(): Promise<IPlanet[]> {
    const planets = await this.planets();
    return planets.filter(this.isSuitable);
  }

  private isSuitable(planet: IPlanet): boolean {
    return planet.mass! > 25;
  }

  private async mapPlanetResponse(responsePlanet: IAPIResponsePlanet): Promise<IPlanet> {
    const hasStation = await this.hasStation(responsePlanet.name);
    return {
      name: responsePlanet.name,
      mass: responsePlanet.mass ? responsePlanet.mass.value : null,
      hasStation,
    };
  }

  async hasStation(planetName: string): Promise<boolean> {
    return (await this.repository.station.findMany({ where: { planetName } })).length > 0;
  }
}
