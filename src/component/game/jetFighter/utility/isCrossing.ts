const isCrossing = (rect1, rect2) => {
  // if (smallObj.width < bigObj.width) {
  //   smallObj = smallObj;
  // } else {
  //   const temp = bigObj;
  //   bigObj = smallObj;
  //   smallObj = temp;
  // }

  // const rightestPosition = bigObj.x + bigObj.width;
  // const bottomestPosition = bigObj.y + bigObj.height;
  // const xPosition =
  //   (smallObj.x > bigObj.x && smallObj.x < rightestPosition) ||
  //   (smallObj.x + smallObj.width > bigObj.x &&
  //     smallObj.x + smallObj.width < rightestPosition);
  // const yPosition =
  //   (smallObj.y > bigObj.y && smallObj.y < bottomestPosition) ||
  //   (smallObj.y + smallObj.height > bigObj.y &&
  //     smallObj.y + smallObj.height < bottomestPosition);

  // return xPosition && yPosition;
  // 2018.5.8
  const center1X = rect1.x + rect1.width / 2;
  const center1y = rect1.y + rect1.height / 2;
  const center2X = rect2.x + rect2.width / 2;
  const center2y = rect2.y + rect2.height / 2;

  const xPosition =
    Math.abs(center1X - center2X) < (rect1.width + rect2.width) / 2;
  const yPosition =
    Math.abs(center1y - center2y) < (rect1.height + rect2.height) / 2;
  return xPosition && yPosition;
};

export { isCrossing };
