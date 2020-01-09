var space; // what's the value of space ?
let force = 1;
const pie = 3.14;
// what's the different between these ?


// Value types have copy semantics.
var a = 1;
var b = a;
a = 2;
b === 1; // true: the value 1 was copied into the memory behind b

a = 'str' // notice no semi
b = a;
// was there memory allocation for  b?


// Strings can be thought of as value types, but with the subtle difference that assignment will not copy the entire value.
// ead implementations will copy a reference to a single representation of the string maintained internally.

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

// what will be starindex?
function loopOnPlanets() {
  for (var starIndex = 0; starIndex < stars.length; starIndex++) {
  }
  console.log(starIndex);
}

// notice stars is used above - before definition. why does it work?

let stars = ['earth', 'jupiter', 'mars', 'mercury', 'moon', 'neptune', 'saturn', 'uranus', 'venus'];

loopOnPlanets();

//null and undefined represent empty values. null is intended to represent a user-defined absence of something.
// undefined is a special value indicating the the absence of anything.

const a = undefined; // makes sense?
let b = a || null; // what is b?

