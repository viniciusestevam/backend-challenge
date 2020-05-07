export interface IPlanet {
  name: string;
  // podemos utilizar undefined em vez de null também
  // assim, conseguimos utilizar melhor o syntax
  // sugar que o Typescript têm(planetService:48)
  mass?: number;
  hasStation: boolean;
}

export interface IStation {
  id: number;
  planetName: string;
  createdAt: Date;
}
