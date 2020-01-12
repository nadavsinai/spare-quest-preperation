// we have both unary and binary operators

const x = '2';
let numberX = +x; // this means number conversion
numberX = -x; //  this means sign conversion
const plus = 2 + 2;
const minus = 2 - 2;
const division = 2 / 2;
const times = 2 * 2;
const exponentiation = 2 ** 64; //?
const modulo = 5 % 2; // reminder
//bitwise operators - tread anything as 32bit integers on work on the binary representation of such
// The list of operators:
//
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
counter--;        // works the same as counter = counter - 1, but is shorter
//the operators ++ and -- can be placed either before or after a variable.
//
// Both of these statements do the same thing: increase counter by 1.
/// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
/// Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).
/// To see the difference, here’s an example:
counter = 2;
let before = ++counter; // (*)
console.log(before) //3 // counter was incremented then logged
console.log(counter) //3 // same 3
console.log(counter++); // this logs 3 (log before increment)
console.log(counter) //4

