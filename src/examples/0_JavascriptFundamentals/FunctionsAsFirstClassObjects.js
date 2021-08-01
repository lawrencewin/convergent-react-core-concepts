/**
 * - Functions as First Class Objects
 *
 * As I said before, functions in JS are first class citizens, meaning that they're treated as any other objects, just ones that can be
 * called. This aspect of JS makes it powerful in many ways.
 *
 * Before going over how functions can be used in this way, let's review some function basics.
 */

// This is a function which adds two variables together and returns the result
function functionAdd(x, y) {
    return x + y
}

// This is also a function that does the same thing. Here, i'm using arrow notation, which is most often used when passing functions around as
// a variable or an object
const arrowFunctionAdd = (x, y) => x + y
// Arrow functions can take up multiple lines as well
const multiLineArrowFunctionAdd = (x, y) => {
    return x + y
}

// -- What you can do with first class functions --

// --- Array Operations ---
// With functions as passable parameters, JS has a collection of array operations that use fist class functions.

const arr = [1, 2, 3, 4]
// forEach() - this applies the passed function on each element of the array
arr.forEach((n) => console.log(n))
for (const n of arr) console.log(n) // equivalent to above

// map() - returns a new array where each element is the result of applying the passed function on old values
let result = arr.map((n) => n * n) // returns [1, 4, 9, 16]

// filter() - returns an array with elements that pass the filter function given
result = arr.filter((n) => n > 2) // returns [3, 4]

// reduce() - turns the given array into a single value, using the passed in reducer function
result = arr.reduce((prev, curr) => prev + curr) // returns 10

// --- Closures ---
// A closure is a function that is able to make use of variables outside of its local scope.
// In the example below, the function, createClosure, returns a closure that absorbs the parameter passed to createClosure
function createClosure(number) {
    return (x) => x + number
}

const adder = createClosure(10)
adder(7) // returns 17
adder(-15) // returns -5

// This is a simple example. You can see closures used in React with Higher Order Components.
