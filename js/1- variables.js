
var space; // what's the value of space ?
let force = 1;
const pie = 3.14;
// what's the different between these ?

/// what's the lifetime of unit? and result?, why result is available on line 8?
function getThrust(weight) {
  space = force * weight * pie;
  console.log(result);
  const unit = 'KG';
  var result = space + unit;
  return result;
}

const forceNeeded = getThrust(2);
console.log(forceNeeded); // what is forceNeeedd ?


// how is it available before definition
loopOnPlanets();

function loopOnPlanets() {
  for (var starIndex = 0; starIndex < stars.length; starIndex++) {
  }
  console.log(starIndex);
  // what will be starindex?
}

// notice stars is used above - before definition. why does it work?

let stars = ['earth', 'jupiter', 'mars', 'mercury', 'moon', 'neptune', 'saturn', 'uranus', 'venus'];



//null and undefined represent empty values. null is intended to represent a user-defined absence of something.
// undefined is a special value indicating the the absence of anything.

const noVal = undefined; // makes sense?
let maybe = noVal || null; // what is b?

console.log(typeof noVal)
console.log(typeof maybe) // ? null is a


//checking for empty value
//the right way to check if something is either null or undefined is using == null (notice the cohersion equality operator)
