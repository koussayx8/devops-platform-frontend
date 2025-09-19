export interface Piste {
  numPiste?: number;
  namePiste: string;
  color: Color;
  length: number;
  slope: number;
  skiers?: any[];
}

export enum Color {
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  RED = 'RED',
  BLACK = 'BLACK'
}
