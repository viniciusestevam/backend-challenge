export interface IPlanetAPIResponsePlanet {
  name: string;
  mass: { value: number; unit: string };
}

export interface IPlanetAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: IPlanetAPIResponsePlanet[];
}
