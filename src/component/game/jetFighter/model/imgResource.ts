class ImgResource {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  timer: any;
  speed: number;
  constructor(src) {
    this.img = new Image(); // Create new img element
    this.img.src = src;
  }
}

export default ImgResource;
