import { IPlanetAPIResponsePlanet, IPlanetAPIResponse } from '../dataSource/types';
import { IPlanet } from '../types';

import PlanetAPI from '../dataSource/planet.api';
import { PrismaClient } from '@prisma/client';

export default class PlanetService {
  constructor(private dataSource: PlanetAPI, private repository: PrismaClient) {}

  async planets(pages: number): Promise<IPlanet[]> {
    const pageNumbers = this.getPageNumbers(pages);
    
    const apiResponse = await Promise.all(pageNumbers.map(page => this.fetchPlanets(page)));

    // um jeito um pouquinho mais curto, poderia ser esse:
    const planets = apiResponse
      .flatMap(response => response.results)
      .map(planet => this.mapToPlanet(planet));

    return Promise.all(planets);
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
    // poderiamos ter implementado a injeção do hasStation ou aqui
    // ou poderiamos ter criado um resolver para o Planet, e daí especificariamos
    // como resolver esse campo. i.e. perguntar pro banco
    // o que faria com que o custo de performance de perguntar no banco, só viria
    // se o client de fato requisitou esse campo, e estruturalmente nos livrariamos de uma
    // dependencia do repository
    const hasStation = await this.hasStation(responsePlanet.name);
    return {
      name: responsePlanet.name,
      // trocando mass pra ser number | undefined, em vez de number | null
      // conseguimos usar esse syntax sugar
      mass: responsePlanet.mass?.value,
      hasStation,
    };
  }

  private async hasStation(planetName: string): Promise<boolean> {
    // no futuro dá de usar exists https://github.com/prisma/prisma-client-js/issues/224
    return (await this.repository.station.findMany({ where: { planetName } })).length > 0;
  }

  // uma coisa que fico mordido é POR QUE DIABOS JAVASCRIPT NÃO TEM UMA func range???
  // já vi o stack overflow que diz como faz também hahaha
  private getPageNumbers(pages: number): number[] {
    return [...Array(pages).keys()].map(n => n + 1);
  }
}

// cara, parabéns ficou show de bola esse Service