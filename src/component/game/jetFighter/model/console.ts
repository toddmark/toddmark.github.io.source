function debug(ctx, observeObj) {
  ctx.strokeStyle = "red";
  ctx.strokeRect(
    observeObj.x,
    observeObj.y,
    observeObj.width,
    observeObj.height
  );
  ctx.font = "12px serif";
  ctx.fillText(`(${observeObj.x},${observeObj.y})`, observeObj.x, observeObj.y);
}

export { debug };
