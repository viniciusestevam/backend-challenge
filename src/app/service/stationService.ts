import { PrismaClient } from '@prisma/client';
import { IStation } from '../types';

export default class StationService {
  constructor(private repository: PrismaClient) {}

  async installStation(planetName: string): Promise<IStation> {
    return this.repository.station.create({
      data: {
        planetName,
      },
    });
  }
}
