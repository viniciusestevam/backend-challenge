import { IAPIResponsePlanet } from '../dataSource/types';
import { IPlanet } from '../types/planet';

import PlanetAPI from '../dataSource/planet.api';

export default class PlanetService {
  constructor(private dataSource: PlanetAPI) {}

  async planets(): Promise<IPlanet[]> {
    const dataSourceResponse = await this.dataSource.planets();
    return dataSourceResponse.results.map(this.mapPlanetResponse);
  }

  async suitablePlanets(): Promise<IPlanet[]> {
    const planets = await this.planets();
    return planets.filter(this.isSuitable);
  }

  private isSuitable(planet: IPlanet): boolean {
    return planet.mass! > 25;
  }

  private mapPlanetResponse(responsePlanet: IAPIResponsePlanet): IPlanet {
    return {
      name: responsePlanet.name,
      mass: responsePlanet.mass ? responsePlanet.mass.value : null,
    };
  }
}
