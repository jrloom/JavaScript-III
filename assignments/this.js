/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding: 'this' is bound to the window
 * 2. Implicit Binding: 'this' points to the object to the left of the function that is being invoked
 * 3. Explicit Binding: Uses function methods (apply, bind, call) to bind 'this'
 * 4. New Binding: Used with constructor functions to refer to specific object when the function in invoked
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

console.log(this); // logs the window object

// Principle 2

// code example for Implicit Binding

const implicit = {
  one: "implicit",
  two: "binding",
  bound: function() {
    return `An example of ${this.one} ${this.two}`;
  }
};

console.log(implicit.bound()); // because bound is invoked on the implicit object, 'this' is bound to the implicit object

// Principle 3

// code example for New Binding

const explicit = {
  one: "explicit binding"
};

function example() {
  return `An example of ${this.one}`;
}

console.log(example.call(explicit)); // call is used to bind 'this' in the example function to the explicit object, overriding global binding

// Principle 4

// code example for Explicit Binding

function ExampleNew(attrs) {
  this.one = attrs.one;
  this.two = attrs.two;
  this.three = attrs.three;
  console.log(this); // 'new' binds 'this' in ExampleNew function to obj1 and obj2 objects
}

const obj1 = new ExampleNew({
  one: "example",
  two: "using",
  three: "new"
});

const obj2 = new ExampleNew({
  one: "example",
  two: "using",
  three: "new"
});
