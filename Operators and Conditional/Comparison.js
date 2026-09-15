// ==========================================
// 3. COMPARISON OPERATORS IN JAVASCRIPT
// ==========================================
// Comparison operators compare two operands and return a boolean (true or false).

let num = 10;
let strNum = "10";

// --- Equality Operators ---

// Loose Equality (==): Compares VALUES after automatic type coercion
console.log("10 == '10':", num == strNum); // true (string "10" is converted to number 10)

// Strict Equality (===): Compares both VALUE and DATA TYPE (recommended practice)
console.log("10 === '10':", num === strNum); // false (number !== string)

// Loose Inequality (!=): Checks if values are not equal with type coercion
console.log("10 != '10':", num != strNum); // false

// Strict Inequality (!==): Checks if value or data type are not equal
console.log("10 !== '10':", num !== strNum); // true

// --- Relational Operators ---
let p = 15;
let q = 20;

// Greater than (>)
console.log("p > q:", p > q);   // false

// Less than (<)
console.log("p < q:", p < q);   // true

// Greater than or equal to (>=)
console.log("p >= 15:", p >= 15); // true

// Less than or equal to (<=)
console.log("q <= 20:", q <= 20); // true