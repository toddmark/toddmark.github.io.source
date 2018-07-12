export interface IBrick {
  img: HTMLElement;
  x: number;
  y: number;
  width: number;
  height: number;
  destory: boolean;
  blood: number;
  totalBlood: number;
  detectBoundary: (e) => void;
}
