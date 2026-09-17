// ==========================================
// TRADITIONAL FOR LOOP
// ==========================================
// Best used when the start point, end condition, and step interval are known.
// Syntax: for (initialization; condition; increment/decrement) { ... }

// Basic counting loop from 1 to 5
console.log("--- Counting 1 to 5 ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Value of i: ${i}`);
}

// Looping backwards (decrement)
console.log("\n--- Countdown from 5 to 1 ---");
for (let i = 5; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}

// Looping through an array using index
console.log("\n--- Iterating an Array ---");
const fruits = ["Apple", "Mango", "Banana", "Orange"];
for (let index = 0; index < fruits.length; index++) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

// Nested For Loop (e.g., printing a coordinate grid or matrix)
console.log("\n--- Nested Grid ---");
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Row: ${row}, Col: ${col}`);
  }
}