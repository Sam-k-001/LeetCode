// ------------------------------------------
// 2. `while` loop
// ------------------------------------------
// Evaluates the condition FIRST. If true, the code block executes.
// If the condition is false initially, the loop body never runs.
console.log("\n--- 2. While Loop ---");
let count = 1;
while (count <= 3) {
  console.log(`While count: ${count}`);
  count++; // Always ensure an exit condition to avoid infinite loops
}