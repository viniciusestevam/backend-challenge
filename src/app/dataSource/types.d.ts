export interface IAPIResponsePlanet {
  name: string;
  mass: { value: number; unit: string };
}

export interface IAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: IAPIResponsePlanet[];
}
