class Bullet {
  img: HTMLImageElement;
  constructor(src) {
    this.img = new Image(); // Create new img element
    this.img.src = src;
  }
}

export default Bullet;
