export interface IPlanet {
  name: string;
  mass: number | null;
}

export interface IStation {
  id: number;
  planetName: string;
  createdAt: Date;
}
