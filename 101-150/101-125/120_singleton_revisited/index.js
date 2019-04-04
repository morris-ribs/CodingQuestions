class Service {
  constructor() {
    // Disallow creation through the constructor
    this.instanceOne = null;
    this.instanceTwo = null;
    this.calls = 0;
  }

  getInstance() {
    if(instanceOne == null) {
      instanceOne = new Service();
      instanceTwo = new Service();
    }

    if (calls++ % 2 == 0) {
      return instanceOne;
    }
    return instanceTwo;
  }
}
