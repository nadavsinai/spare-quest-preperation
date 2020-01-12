/*Objects are created with new Object() or {} (object literal)

The . (dot) property lookup syntax and [] (brackets) are the two ways to access object properties

Only brackets can use variables for dynamic property acesss.
*/
const person = { name: 'Alfred', age: 33 };
const otherPerson = new Object({ name: 'Brenda', age: 25 });
const props = ['name', 'age'];
console.log(person.age);
for (let prop of props) {
  console.log(otherPerson[prop]);
}

//prototypes are objects that allow all instances of objects to share some properties/methods
// Object.prototype is the base prototype (it's own proto is null!) and an object can recieve another protypes in 2 methods
//1 -  using a constructor function - really a regular function, but it is invoked with `new` so the this is set to an instance made from the function's defined prototype
// notice the large initial - a convention for constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log('Hi, my name is ' + this.name);
}
const person1 = new Person('Sicily', 19);
person1.sayHello();
Object.getPrototypeOf(person1) // Person function

//2 - using Object.create
const person2 = Object.create(Person.prototype);
person2.name = 'Bouch';
person2.sayHello();

/*
Object prototype includes .toString() which can be overridden.
It is called when using JSON.stringify or other string conversions.
in addition some very helpful helpers are on the Object namespace object like the getPrototypeOf and create function we've seen
* */
Object.keys(person);//  ['name' , 'age']
Object.values(person); // [ 'Alfred' , 33]
Object.entries(person); //?[ ["name", "Alfred"],["age", 33] ]

// you should get acquainted with those
