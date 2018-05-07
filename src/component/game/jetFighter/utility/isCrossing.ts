const isCrossing = (smallObj, bigObj) => {
  if (smallObj.width < bigObj.width) {
    smallObj = smallObj;
  } else {
    const temp = bigObj;
    bigObj = smallObj;
    smallObj = temp;
  }

  const rightestPosition = bigObj.x + bigObj.width;
  const bottomestPosition = bigObj.y + bigObj.height;
  const xPosition =
    (smallObj.x > bigObj.x && smallObj.x < rightestPosition) ||
    (smallObj.x + smallObj.width > bigObj.x &&
      smallObj.x + smallObj.width < rightestPosition);
  const yPosition =
    (smallObj.y > bigObj.y && smallObj.y < bottomestPosition) ||
    (smallObj.y + smallObj.height > bigObj.y &&
      smallObj.y + smallObj.height < bottomestPosition);

  return xPosition && yPosition;
};

export { isCrossing };
