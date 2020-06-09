export interface IPlanetAPIResponsePlanet {
  name: string;
  // pelo oq eu entendi essa mass pode vir null as vezes
  // seria bom tipar isso(ou com ? ou com | null)
  mass?: { value: number; unit: string };
}

export interface IPlanetAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: IPlanetAPIResponsePlanet[];
}
