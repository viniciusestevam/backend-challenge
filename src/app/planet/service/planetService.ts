import PlanetAPI from '../dataSource/planet.api';
import { IPlanet } from '../types/planet';

export default class PlanetService {
  constructor(private dataSource: PlanetAPI) {}

  async planets(): Promise<IPlanet[]> {
    const dataSourceResponse = await this.dataSource.planets();
    return dataSourceResponse.results.map(planet => {
      const mass: number = planet.mass ? (planet.mass as any).value : null;
      return {
        mass: mass,
        name: planet.name,
      };
    });
  }
}
