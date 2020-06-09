import { RESTDataSource } from 'apollo-datasource-rest';
import { IPlanetAPIResponse } from './types';

interface ConstructorProps {
  baseURL: string;
}

export default class PlanetAPI extends RESTDataSource {
  constructor({ baseURL }: ConstructorProps) {
    super();
    this.baseURL = baseURL;
  }

  // como não usa await, dá de tirar o async
  planets(page: number) {
    // podemos tipar a chamada do método também,
    // mas da forma que fizesse é igualmente justa
    return this.get<IPlanetAPIResponse>(`exoplanets?page=${page}`);
  }
}
