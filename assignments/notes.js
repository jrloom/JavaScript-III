//===== The 'this' keyword =====
// This is not unique to JS, but behaves very differently in JS
// A pronoun to use in place of an object
// Give's you the object's context
// Has nothing to do where the function is written - has everything to do with where and when the function is called
// Four principles which will help one determine 'what gets 'this'' - i.e. Binding

//=== Global Binding
// When in the global scope, the value of THIS will be the window/console Object;

//=== Implicit Binding
// Whenever a function is called by a preceding dot, the object to the left of the dot gets THIS

//=== New Binding
// Whenever a constructor function is used, THIS refers to the specific instance of the object that is created and returned by the constructor function

//=== Explicit Binding
// Whenever JS's CALL or APPLY method is used, THIS is explicitly defined (overrides implicit binding)

const myObj = {
  greeting: "Hello",
  speak: function() {
    console.log("implicit: === ", this);
    return `${this.greeting}, world`;
  }
};

// myObj.speak();

function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function() {
    console.log("This new binding", this);
    return `Hello, my name is ${this.name}, and I am ${this.age} years old`;
  };
}

const ryan = new Person({ name: "Ryan", age: 32 });
const haynes = new Person({ name: "Haynes", age: "8 months" });

// ryan.speak();
// haynes.speak();

// ryan.speak.call(haynes);
// haynes.speak.apply(ryan);

//===== Constructors and The Prototype =====

//=== Object Oriented Programming (OOP)
// Objects > Functions
// Data > Logic
// A logical procedure that takes input data, processes it, returns as output

// JS is not a class-based language by nature
// Classes in JS are what we call Syntactic Sugar over the constructor pattern
// We have psuedo-classical inheritance (and a few others) that we can use to achieve OOP

//=== Constructor Functions
// AKA Object Creator Functions
// Purpose is to receive an Object, and produce a new object
// Capitalized Function (i.e. function Person()) to distinguish it from other functions
// Instantiated with the NEW keyword
// THIS becomes the object which will be returned by NEW

function Parent(attributes) {
  this.newAge = attributes.age;
  this.newName = attributes.name;
  this.newLocation = attributes.location;
  this.newPhrase = attributes.phrase;
  console.log(this);
}

Parent.prototype.speak = function() {
  return `${this.newName} says ${this.newPhrase}`;
};

const fred = new Parent({
  age: 35,
  name: "Fred",
  location: "Bedrock",
  phrase: "Yabba dabba do"
});

const willma = new Parent({
  age: 37,
  name: "Wilma",
  location: "Bedrock",
  phrase: "Fred!"
});

//=== The Object Prototype
// The mechanism by which all objects can inherit properties from one another
// Allows one to deliberately modify an object's properties
// Helps to avoid memory problems
// Allows one to extend an object's properties to another object
// Can be very dangerous -- you can overwrite an entire object's methods

// function Person(attributes) {
// this.age = attributes.age;
// this.name = attributes.name;
// this.homeTown = attributes.homeTown;
// }
//
// Person.prototype.speak = function() {
// return `Hello, my name is ${this.name}`;
// };

function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
  console.log(`Shipping ${this.name} to ${destination}`);
};

Fruit.prototype.calculateCals = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

function Banana(bananaAttrs) {
  Fruit.call(this, bananaAttrs);
  this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}

Banana.prototype = Object.create(Fruit.prototype);

Kiwi.prototype = Object.create(Fruit.prototype);

Banana.prototype.checkIfMonkeysLikeIt = function() {
  if (this.doMonkeysLikeIt) {
    return true;
  } else {
    return false;
  }
};

Kiwi.prototype.checksfFuzzy = function() {
  if (this.isFuzzy) {
    return true;
  } else {
    return false;
  }
};

const newBanana = new Banana({
  doMonkeysLikeIt: true,
  type: "Tree",
  name: "Banana",
  isRipe: false,
  calories: 0.1
});

const newKiwi = new Kiwi({
  isFuzzy: true,
  type: "Tree",
  name: "Kiwi",
  isRipe: false,
  calories: 0.7
});

console.log(newBanana);
console.log(newKiwi);
console.log(newKiwi.shipped(`Colorado`));
