// ==========================================
// 2. ASSIGNMENT OPERATORS IN JAVASCRIPT
// ==========================================
// Assignment operators assign values to variables. Compound operators
// perform an operation and assignment in a single step.

// Basic Assignment (=)
let x = 10;
console.log("Initial x =", x); // 10

// Addition Assignment (+=) -> equivalent to: x = x + 5
x += 5;
console.log("x += 5 ->", x); // 15

// Subtraction Assignment (-=) -> equivalent to: x = x - 3
x -= 3;
console.log("x -= 3 ->", x); // 12

// Multiplication Assignment (*=) -> equivalent to: x = x * 2
x *= 2;
console.log("x *= 2 ->", x); // 24

// Division Assignment (/=) -> equivalent to: x = x / 4
x /= 4;
console.log("x /= 4 ->", x); // 6

// Modulus Assignment (%=) -> equivalent to: x = x % 4
x %= 4;
console.log("x %= 4 ->", x); // 2

// Exponentiation Assignment (**=) -> equivalent to: x = x ** 3
x **= 3;
console.log("x **= 3 ->", x); // 8 (2^3)

// --- Logical Assignment Operators (ES2021+) ---
// Logical AND Assignment (&&=): Assigns only if target is truthy
let active = true;
active &&= "User is online";
console.log("active &&= 'User is online' ->", active); // "User is online"

// Logical OR Assignment (||=): Assigns only if target is falsy
let user = "";
user ||= "Guest";
console.log("user ||= 'Guest' ->", user); // "Guest"

// Nullish Coalescing Assignment (??=): Assigns only if target is null or undefined
let score = null;
score ??= 100;
console.log("score ??= 100 ->", score); // 100