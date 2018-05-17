import { IBrick } from "./brick";
import { IBullet } from "./bullet";

export interface IStage {
  width: number;
  height: number;
  bulletContainer: Array<IBullet>;
  brickContainer: Array<IBrick>;
  ctx: any;
  pause: boolean;
  updateStage: () => void;
  timer: any;
  createBrick: () => void;
  brickTimer: any;
}
