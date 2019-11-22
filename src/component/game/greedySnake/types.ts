export enum GridType {
  Snake,
  Bean
}

export interface ICoorMap {
  x: number;
  y: number;
  type: GridType;
}

export interface IMapSize {
  row: number;
  col: number;
  width: number;
  height: number;
}

export enum Direction {
  Top,
  Down,
  Left,
  Right
}
