import { RESTDataSource } from 'apollo-datasource-rest';
import { IPlanet } from '../types/planet';

interface ConstructorProps {
  baseURL: string;
}

export interface IArcsecondResponse {
  count: number;
  next: string;
  previous: string;
  results: IPlanet[];
}

export default class PlanetAPI extends RESTDataSource {
  constructor({ baseURL }: ConstructorProps) {
    super();
    this.baseURL = baseURL;
  }

  async planets(page = 1): Promise<IArcsecondResponse> {
    return this.get(`exoplanets?page=${page}`);
  }
}
