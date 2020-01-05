import {Appolo, Enterprise, Genesis} from './spaceship.classes';


const startship = new Enterprise();
const startship1 = new Appolo();
const startship2 = new Genesis();

startship.engine.start().then(() => {
  const loggger = setInterval(() => {
    const fuelLeft = startship.engine.fuelSupply.fuelLeft;
    console.log(fuelLeft);
    if (fuelLeft === 0) {
      clearInterval(loggger);
    }
  }, 1000);
  startship.engine.fuelSupply.onFuelEnd.push(() => {
    console.log('fuel finished!');
  });
  console.log('engine started');
});

startship1.engine.start().then(() => {
  startship1.engine.fuelSupply.onFuelEnd.push(() => {
    console.log('fuel finished! - startship1');
  });
  const loggger = setInterval(() => {
    const fuelLeft = startship1.engine.fuelSupply.fuelLeft;
    console.log(fuelLeft);
    if (fuelLeft === 0) {
      clearInterval(loggger);
    }
  }, 1000);
  console.log('engine started');
});

startship2.engine.start().then(() => {
  startship2.engine.fuelSupply.onFuelEnd.push(() => {
    console.log('fuel finished! -startship2');
  });
  console.log('engine started');
  const loggger = setInterval(() => {
    const fuelLeft = startship2.engine.fuelSupply.fuelLeft;
    console.log(fuelLeft);
    if (fuelLeft === 0) {
      clearInterval(loggger);
    }
  }, 1000);
});
