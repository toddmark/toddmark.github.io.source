import Bullet from "./model/bullet";
import JetFighter from "./model/jetFighter";
import Stage from "./model/stage";

const bulletImg = require("./img/bullet.png");
const jetFighterImg = require("./img/jet_fighter.png");
const jetFighter = new JetFighter(jetFighterImg);

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
  if (Stage.bulletContainer.length > 0) {
    Stage.bulletContainer.forEach((item, index) => {
      Stage.debug(item);
      if (item.y <= 0) {
        Stage.bulletContainer.splice(index, 1);
      }
      Stage.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
    });
  }
};

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
