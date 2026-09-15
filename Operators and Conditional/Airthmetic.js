// ==========================================
// 1. ARITHMETIC OPERATORS IN JAVASCRIPT
// ==========================================
// Arithmetic operators perform mathematical calculations between operands.

let a = 10;
let b = 2;

// --- Basic Arithmetic ---
// Addition (+)
console.log("a + b =", a + b); // Output: 12

// Subtraction (-)
console.log("a - b =", a - b); // Output: 8

// Multiplication (*)
console.log("a * b =", a * b); // Output: 20

// Division (/)
console.log("a / b =", a / b); // Output: 5

// --- Advanced / Additional Arithmetic ---
// Modulus (%): Returns the division remainder
let c = 5;
let d = 2;
console.log("c % d =", c % d); // Output: 1 (5 divided by 2 leaves remainder 1)

// Exponentiation (**): Calculates base to the power of exponent (c^d)
console.log("c ** d =", c ** d); // Output: 25 (5 raised to the power of 2)

// --- Increment & Decrement Operators ---
let count = 5;

// Post-increment (count++):
// Evaluates/returns the current value FIRST, then increments by 1.
console.log("Post-increment (count++):", count++); // Output: 5
console.log("Value after post-increment:", count);  // Output: 6

// Pre-increment (++count):
// Increments the value by 1 FIRST, then evaluates/returns the new value.
console.log("Pre-increment (++count):", ++count);  // Output: 7

// Post-decrement (count--):
// Returns the current value FIRST, then decreases by 1.
console.log("Post-decrement (count--):", count--); // Output: 7
console.log("Value after post-decrement:", count);  // Output: 6

// Pre-decrement (--count):
// Decreases by 1 FIRST, then returns the new value.
console.log("Pre-decrement (--count):", --count);  // Output: 5

// Unary Plus (+) & Unary Negation (-):
// Unary Plus converts non-numbers into numbers
let strNum = "42";
console.log("+strNum =", +strNum, typeof +strNum); // Output: 42 'number'

// Unary Negation converts and negates the value
console.log("-strNum =", -strNum); // Output: -42