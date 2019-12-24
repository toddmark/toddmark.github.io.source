import Brick from "./model/brick";
import Bullet from "./model/bullet";
import JetFighter from "./model/jetFighter";
import RolePanel from "./model/rolePanel";
import Stage from "./model/stage";

const brickImgSrc = require("./img/brick.png").default;
const brickImg = new Image();
brickImg.src = brickImgSrc;
const bulletImgSrc = require("./img/bullet.png").default;
const bulletImg = new Image();
bulletImg.src = bulletImgSrc;
const jetFighterImg = require("./img/jet_fighter.png").default;
const jetFighterImgElement = new Image();
jetFighterImgElement.src = jetFighterImg;
const moonImgSrc = require("./img/moon.png").default;
const moonImg = new Image();
moonImg.src = moonImgSrc;
const jetFighter = new JetFighter(jetFighterImgElement, Stage);

Stage.updateStage = () => {
  if (jetFighter.destory) {
    Stage.ctx.clearRect(
      jetFighter.x,
      jetFighter.y,
      jetFighter.width,
      jetFighter.height
    );
    return;
  }
  if (!Stage.ctx || Stage.pause) {
    return;
  }
  Stage.pause = jetFighter.destory ? true : false;

  Stage.ctx.clearRect(0, 0, Stage.width, Stage.height);

  // active keyboard event
  jetFighter.eventAction(Stage);

  // detect brick boundary
  Stage.brickContainer.forEach(item => {
    item.detectBoundary(Stage.bulletContainer);
  });

  // detect jetFighter boundary
  jetFighter.detectCollide(Stage.brickContainer);

  // draw jetFighter
  Stage.drawJetfight(jetFighter);

  // draw bullet
  Stage.drawBullet();

  // draw brick
  Stage.drawBrick();

  // draw role panel
  RolePanel.loadImgResource(moonImg);
  RolePanel.render(Stage, jetFighter);
};

Stage.createBrick = () => {
  if (Stage.pause) {
    return;
  }
  const brick = new Brick(brickImg, Stage);
  brick.move(Stage.height - 50);
  Stage.brickContainer.push(brick);
};

document.addEventListener("keydown", event => {
  jetFighter.keyBoardEvent(event.key, true);
  if (event.key === " ") {
    if (!jetFighter.shoot) {
      const bullet = new Bullet(bulletImg, jetFighter.x, jetFighter.y, Stage);
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

export { Stage, jetFighter };
