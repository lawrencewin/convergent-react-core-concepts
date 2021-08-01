/* eslint-disable */
/**
 * - The Basics of Javascript (JS) -
 *
 * JS was first invented as a web language to make HTML and CSS dynamic and cool. Since then, it has become
 * one of the most popular languages in the world, used as the basis for front-ends, back-ends, middleware, etc.
 *
 * Here, I'll briefly review the fundamentals of JS. If you're already familiar with the language, you can probably
 * skip this.
 */

// -- Variables --
// In JS there are two types of variables, constants and non-constants.

// For constants, you can only set their value once. After that, no more assignment can occur.
// Setting a constant looks like this:
const constant = 1

// Non-constants are what you usually think of regarding programming variables. You're free to set values as many times
// and perform whatever operation you want on them.
// Setting a non-constant variable looks like this:
let nonConstant = 1

// This is valid
nonConstant = nonConstant + 2
// Whereas this is invalid and gives a linter error
constant = constant - 3

/** -- Data Types --
 * JS has several fundamental types.
 *
 * Primitives:
 * - Undefined: A value used to demark nothing, similar to null and none in other languages
 * - String: A collection of characters wrapped by quotes
 * - Number: Any floating point value or integer value
 * - Boolean: Binary true or false
 * - BigInt: A newer primitive used to represent very large values beyond the limit for the number primitive
 * - Symbol: A new primitive. Basically encompasses a unique value that can never equal another symbol. Kind of hard to wrap the head around.
 */
const UNDEFINED = undefined
const STRING = "string"
const NUMBER = 10
const BOOLEAN = true
const BIG_INT = 100n
const SYMBOL = Symbol("Description of symbol unused in logic")

/**
 * JS also has other object types and data structures:
 * - Object: The base object type. Stores string keys and any data typed values.
 * - Function: An object you can call to run code. JS treats functions as first class citizens, which means they're equivalent to any other object variable,
 *     and can be passed around as parameters and assigned to local variables
 * - Array: An ordered list of items, not limited by type. Think of the ArrayList from Java or a python list.
 * - Map: A collection of keys and values. There are major differences between a native object and a map data structure.
 *     Map keys can be any type while object keys are limited to strings and symbols. Maps are also natively iterable whereas
 *     objects are not (you can still iterate through an object with for...in or Object.keys()). Maps are overall faster, while objects
 *     are syntactically easier to use and write.
 * - Set: An iterable collection of unique objects. Duplicates cannot be added.
 */
const OBJECT = { loves: "convergent", bestLead: "larry" }
const FUNC = function (x) {
    return x + 10
}
const ARRAY = [1, 2, "buckle my shoe"]
const MAP = new Map([
    ["good schools", "UT Austin"],
    ["horrible, awful schools", "Texas A&M"],
])
const SET = new Set(["all", "unique", "things"])

/**
 * Notice when setting variables above, we didn't need to specify a data type. This is because JS is what's called a
 * "dynamically-typed" and "weakly-typed" language. This encompasses two things:
 *
 * "Dynamically typed" means that the compiler only type-checks at run-time. This essentially means that any written variable
 * can hold any data type without having to specify its type. Checking for code correctness / compatibility regarding types
 * only happens once the code is run.
 *
 * "Weakly typed" relates to how types are implicitly converted between each other. In Javascript, this means that different
 * data types can do operations on each other without fail. To see an example of this, let's look at an example comparing JS and
 * Python, a dynamically typed and strongly typed language.
 */

// This code returns "5fire" and throws no errors, despite a number and string performing
let result = 5 + "fire"

// Similar code in python returns an error, because python enforces the fact that you can't implicitly add a string and integer. You have
// to explicitly state that you intend to concatenate the two.
// result = 5 + "fire"
// Returns -> TypeError: unsupported operand type(s) for +: 'int' and 'str'

// Same for the example below. This returns NaN, or not-a-number.
result = undefined + true

// Whereas the python equivalent throws an error
// result = None + True
// Returns -> TypeError: unsupported operand type(s) for +: 'NoneType' and 'bool'

// Overall, JS's typing is a double edged sword. Some see it as a reason to hate JS while others see it as a feature.

// -- Operators --
// JS has the basic operators you'd expect in any programming language.

// --- Math operations ---
// Addition and subtraction
let x = 10 + 5
x = 18 - 4
// Multiplication and division and modulo
x = 10 * 3
x = 7 / 2 // This returns 3.5. For integer division, you'll do Math.floor(7 / 2)
x = 3 % 2 // Returns the remainder of a division operation. Here, this returns 1.

// --- Boolean Operations ---
// There's a lot of confusion on how to check for equality in JS. Note the two examples below
x = 1 + 3 == "4" // returns true
x = 1 + 3 === "4" // returns false
// The '==' is a "weak equals" operation, where JS implicitly converts types such that both operands are comparable to each other.
// Whereas the '===' is a "strong equals" op eration, requiring both operands to be the same data type to be compared.
// Usually, go for '===' as that will cause less pain in the future.
// This weak vs strong typing applies to the "not equal" operation as well
x = 4 + 5 != "9"
x = 4 + 5 !== "9"
// Other comparison operations are listed below
x = x < 10 // greater than
x = x > 10 // less than
x = x <= 10 // greater than or equal
x = x >= 10 // less than or equal
// And there's the not operation, for flipping a boolean
x = !("hi".length === 2)
// This also applies to non-booleans, and it is useful for boolean conversions
x = !1 // returns false
x = !0 // returns true
x = !!"hello world" // returns true
x = !!null // returns false

/**
 * Control Flow
 *
 * JS has all the usual control flow structures you'll find in other languages.
 */

// if statement
if ("texas" === "good") {
    // hopefully this will print
    console.log("Texas is back baby!")
} else if ("texas" === "okay") {
    console.log("We'll be back next year!")
} else {
    // this is probably what's going to print :(
    console.log("Oh no, we suck again!")
}

// switch statement

// If you have to test whether a value can equal multiple options, you could use a large if-elseif-else statement or you
// can use a switch statement for neater code.
const city = "Austin"
switch (city) {
    case "Dallas":
        console.log("This is a decent Texas city.")
        break // JS switches are fall-through, meaning you have to explicitly break to get out of the switch early
    case "Houston":
        console.log("This is a diverse city.")
        break
    case "Austin":
        console.log("This is a great city.")
        break
    case "Lubbock":
        console.log("What are you doing??") // No break here, the temple case runs
    case "Temple":
        console.log("Terrible city, don't even go here.")
        break
    case "El Paso":
        console.log("This city is in a different time zone!")
        break
    default:
        console.log("Your city is irrelevant") // If the city variable doesn't match any case, this runs
}

// If city = Austin, then "This is a great city." prints.
// If city = Lubbock, then "What are you doing??" "Terrible city, don't even go here" prints

// for loop
// JS has a couple of types of for loops. We have the traditional type
for (let i = 0; i < 10; i++) console.log(i) // prints 0...9

// and we have two foreach loops

// for...in - loops over object keys. don't use for iterables
const loopedObj = { a: 1, b: 2, c: 3 }
for (const key in loopedObj) console.log(key + " " + loopedObj[key]) // prints a 1, b 2, c 3

// for...of - loops over iterable objects. use for arrays and maps and sets
const arr = [1, 2, 3, 4, 5]
for (const num of arr) console.log(num) // prints 1 2 3 4 5
