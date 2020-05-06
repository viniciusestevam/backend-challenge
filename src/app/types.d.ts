export interface IPlanet {
  name: string;
  mass: number | null;
  hasStation: boolean;
}

export interface IStation {
  id: number;
  planetName: string;
  createdAt: Date;
}
