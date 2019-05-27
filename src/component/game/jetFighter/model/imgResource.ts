class ImgResource {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  timer: any;
  speed: number;
  constructor(ele) {
    this.img = ele;
  }
}

export default ImgResource;
