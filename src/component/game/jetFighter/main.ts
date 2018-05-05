import Brick from "./model/brick";
import Bullet from "./model/bullet";
import JetFighter from "./model/jetFighter";
import Stage from "./model/stage";

const brickImg = require("./img/brick.png");
const bulletImg = require("./img/bullet.png");
const jetFighterImg = require("./img/jet_fighter.png");
const jetFighter = new JetFighter(jetFighterImg);

const brick = new Brick(brickImg, 10, 10);

Stage.updateStage = () => {
  if (!Stage.ctx) {
    return;
  }

  Stage.ctx.clearRect(0, 0, 600, 600);

  // active keyboard event
  jetFighter.eventAction(Stage);

  Stage.debug(jetFighter);

  Stage.ctx.drawImage(
    jetFighter.img,
    jetFighter.x,
    jetFighter.y,
    jetFighter.width,
    jetFighter.height
  );

  // draw bullet
  Stage.drawBullet();

  // draw brick
  Stage.drawBrick(brick);
};
// setInterval(() => {
// }, 1000)

document.addEventListener("keydown", event => {
  jetFighter.keyBoardEvent(event.key, true);
  if (event.key === " ") {
    if (!jetFighter.shoot) {
      const bullet = new Bullet(bulletImg, jetFighter.x, jetFighter.y);
      Stage.bulletContainer.push(bullet);
      jetFighter.fire(true);
    }
  }
});

document.addEventListener("keyup", event => {
  jetFighter.keyBoardEvent(event.key, false);
  if (event.key === " ") {
    jetFighter.fire(false);
  }
});

export { Stage };
