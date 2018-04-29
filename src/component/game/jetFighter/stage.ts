class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  private static instance: Singleton;
  width: number;
  height: number;
  private constructor() {
    this.width = 600;
    this.height = 600;
  }
}

export default Singleton.getInstance();
