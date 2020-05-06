import { RESTDataSource } from 'apollo-datasource-rest';
import { IAPIResponse } from './types';

interface ConstructorProps {
  baseURL: string;
}

export default class PlanetAPI extends RESTDataSource {
  constructor({ baseURL }: ConstructorProps) {
    super();
    this.baseURL = baseURL;
  }

  async planets(page = 1): Promise<IAPIResponse> {
    return this.get(`exoplanets?page=${page}`);
  }
}
