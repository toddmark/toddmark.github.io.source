import Brick from "./model/brick";
import Bullet from "./model/bullet";
import JetFighter from "./model/jetFighter";
import Stage from "./model/stage";

const brickImg = require("./img/brick.png");
const bulletImg = require("./img/bullet.png");
const jetFighterImg = require("./img/jet_fighter.png");
const jetFighter = new JetFighter(jetFighterImg, Stage.width, Stage.height);

Stage.updateStage = () => {
  if (!Stage.ctx || Stage.pause) {
    return;
  }

  Stage.ctx.clearRect(0, 0, 600, 600);

  // active keyboard event
  jetFighter.eventAction(Stage);

  // detect brick boundary
  Stage.brickContainer.forEach(item => {
    item.detectBoundary(Stage.bulletContainer);
  });

  // draw jetFighter
  Stage.drawJetfight(jetFighter);

  // draw bullet
  Stage.drawBullet();

  // draw brick
  Stage.drawBrick();
};

setInterval(() => {
  const brick = new Brick(brickImg, Stage);
  brick.move(Stage.height);
  Stage.brickContainer.push(brick);
  console.log(Stage.brickContainer, Stage.bulletContainer);
}, 500);

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