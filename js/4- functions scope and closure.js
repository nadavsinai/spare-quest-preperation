// Functions can be declared or assigned as values to variables
function log(something) {
  console.log(something);
} // does not need semicolon

// Equivilant to the following function expression
const loger = function (something) {
  console.log(something);
}; // needs semicolon

// Functions can be named like in the first example or remain “anonymous”
// Functions have 2 special variables inside them: this & arguments


// The this keyword is bound to the function at design time.
//   But can be “rebound”/”changed” with .bind/.call/.apply function prototype methods

function addContext(context) {
  this.context = context;
}

const someObjct = {};
const bound = addContext.bind(someObjct);
bound('WAT')
console.log(someObjct.context); //WAT


// Arrow functions have no self-bound this- they preserve their lexical scope, that is the “this” they are created in.
// see the follwing - will not work!

function addHandler() {
  this.inScroll = false; // 1

  function scrollhanler(event) {
    if (!this.inScroll) {
      this.inScroll = true; // 2
      setTimeout(function () {
        this.inScroll = false; // 3
      });
    }
  }

  window.addEventListener('scroll', scrollhanler)
}

// with arrow functions it will
function addHandler() {
  this.inScroll = false; // 1

  const scrollhanler = event => {
    if (!this.inScroll) {
      this.inScroll = true; // 2
      setTimeout(() => {
        this.inScroll = false; // 3
      });
    }
  };

  window.addEventListener('scroll', scrollhanler)
}

/****
 * A closure is a function that remembers its outer variables and can access them.
 * In some languages, that’s not possible, or a function should be written in a special way to make it happen.
 * But in JavaScript, all functions have natural closures (to the global scope and others which may exist in between)
 *
 *  objects used (referenced) in closure will not be garbage collected!
 * ***/

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();//? // what will it show: "John" or "Pete"?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
