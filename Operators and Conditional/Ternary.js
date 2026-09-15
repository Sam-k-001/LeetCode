// ==========================================
// 5. TERNARY OPERATOR IN JAVASCRIPT
// ==========================================
// The conditional (ternary) operator is the only JS operator that takes three operands.
// Syntax: condition ? expressionIfTrue : expressionIfFalse
// Often used as a concise replacement for simple if...else statements.

let age = 18;

// Basic Ternary Operation
let canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting status:", canVote); // "Eligible to vote"

// Checking Even or Odd
let number = 7;
let result = number % 2 === 0 ? "Even Number" : "Odd Number";
console.log(`${number} is an:`, result); // "7 is an: Odd Number"

// Direct Inline Usage (e.g., inside template literals)
let isLoggedIn = true;
console.log(`Status: ${isLoggedIn ? "Welcome back!" : "Please log in."}`);

// Chained / Nested Ternary (Multiple Conditions)
// Syntax equivalent to: if ... else if ... else
let marks = 85;

let grade = marks >= 90 ? "A+" 
          : marks >= 80 ? "A" 
          : marks >= 70 ? "B" 
          : "C";

console.log("Final Grade:", grade); // Output: "A"