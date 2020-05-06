import { IPlanetAPIResponsePlanet, IPlanetAPIResponse } from '../dataSource/types';
import { IPlanet } from '../types';

import PlanetAPI from '../dataSource/planet.api';
import { PrismaClient } from '@prisma/client';

export default class PlanetService {
  constructor(private dataSource: PlanetAPI, private repository: PrismaClient) {}

  async planets(pages: number): Promise<IPlanet[]> {
    const pageNumbers = this.getPageNumbers(pages);
    const apiResponse = await Promise.all(pageNumbers.map(page => this.fetchPlanets(page)));

    const reducer = (
      planets: IPlanetAPIResponsePlanet[],
      response: IPlanetAPIResponse
    ): IPlanetAPIResponsePlanet[] => {
      return [...planets, ...response.results];
    };

    return Promise.all(
      apiResponse.reduce(reducer, []).map(responsePlanet => this.mapToPlanet(responsePlanet))
    );
  }

  async suitablePlanets(pages: number): Promise<IPlanet[]> {
    const planets = await this.planets(pages);
    return planets.filter(this.isSuitable);
  }

  private async fetchPlanets(page: number): Promise<IPlanetAPIResponse> {
    return this.dataSource.planets(page);
  }

  private isSuitable(planet: IPlanet): boolean {
    return planet.mass! > 25;
  }

  private async mapToPlanet(responsePlanet: IPlanetAPIResponsePlanet): Promise<IPlanet> {
    const hasStation = await this.hasStation(responsePlanet.name);
    return {
      name: responsePlanet.name,
      mass: responsePlanet.mass ? responsePlanet.mass.value : null,
      hasStation,
    };
  }

  private async hasStation(planetName: string): Promise<boolean> {
    return (await this.repository.station.findMany({ where: { planetName } })).length > 0;
  }

  private getPageNumbers(pages: number): number[] {
    return [...Array(pages).keys()].map(n => n + 1);
  }
}
