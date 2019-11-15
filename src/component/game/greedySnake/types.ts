export enum GridType {
  Snake,
  Bean
}

export interface ICoorMap {
  x: number;
  y: number;
  type: GridType;
}

// const Top = "top";
export enum Direction {
  Top,
  Down,
  Left,
  Right
}
