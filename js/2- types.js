// js has types
console.log('something', typeof 'something'); //string
console.log(123, typeof 123) //number
console.log(12.132143, typeof 12.132143); // number - floats and ints  are the same
console.log(12n, typeof 12n); // bigint -  we now have bigint
console.log(true, typeof true); // boolean
console.log(Symbol('x'), typeof Symbol('x')); //symbol
console.log({}, typeof {}); // object
// but that's where type logic stops.
//array is actually a kind of object
//console.log(['string',121,[{}]],typeof ['string',121,[{}]]); // and you can mix values inside it
//and really everything is an object
console.log(2.0.toString); // yep numbers have functions hanging off them too...

 // all except undefined...

// we have constructor based differentiation of objects

function Toy(type) {
  this.type = type;
  return this;
}

Toy.prototype = {
  play() {
    return 'playing';
  },
  // constructor: Toy
};

var train = new Toy('train');
var train1 = new Toy();
train.play();  //?


const called = Toy('other');
called.type; //?
console.log(train instanceof Toy);

// class Pet{}
// var cat = new Pet();
// const calledClassasFunction = Pet(); //error : Class constructor Pet cannot be invoked without 'new'

// equality has 2 levels
// value equality
// type equality
console.log(3 == '3');//true !! cause of bugs
console.log(3 === '3'); //false
console.log(train.constructor === train1.constructor) // .?
// there are some weird bits also for ====
NaN === NaN;     //?       // false
0 === -0; // ?

var x = [1, 2, 3];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
var y = x;

y === x;              // true
y === [1, 2, 3];    // false
x === [1, 2, 3];    // false

//lots of info and practices here
//https://javascript.info/data-types
