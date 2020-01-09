class FuelSupply {
  tankCapacity = 0;
  energyPerKg = 0;
  flow = 0;
  price = 0;
  complexity = 0;

  pump() {
    console.log('starting to pump!');
  }
}

class YeOldePetrolFuelSupply extends FuelSupply {
  energyPerKg = 50;
  flow = 10;
  price = 2000;
  complexity = 20;

  constructor(tankCapacity = 40) { //default value
    super();
    this.tankCapacity = tankCapacity; // note we can't use this before super();
  }
}

class Engine {
  #started = false; // field
  fuelSupply;

  stop() {
    this.#started = false
  }

  constructor(fuelSupply) { //optional
    if (!fuelSupply) {
      throw new Error('Engine must have a fuel supply')
    }
    this.fuelSupply = fuelSupply;
  }

  start() { // method
    this.fuelSupply.pump();//?
    console.log('started engine!');
    this.#started = true;
  }
}

class JetEngine extends Engine {
  airDuckt = {
    open: false, flow: 0,
    turnOn() {
      this.open = true;
      this.flow = 1;
    },
    turnOff() {
      this.airDuckt.flow = 0;
      this.airDuckt.open = false
    }
  };

  constructor(pump) {
    super(pump);

  }

  start() {
    this.airDuckt.turnOn();
    try {
      super.start();
    } catch (e) {
      console.log(e);
      this.airDuckt.turnOff();
    }
  }

  stop() {

  }

}

const myJet = new JetEngine(new YeOldePetrolFuelSupply());
myJet.start(); //?
/// in class exercise

/*
write another class extending Engine base class, which takes another kind of FuelSupply. make sure to include
1. private and public members
2. at least one method/override which changes state
3. call to super's methods in one of the methods


* */
