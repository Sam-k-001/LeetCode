// ==========================================
// DO...WHILE LOOP
// ==========================================
// Runs the code block ONCE before checking the condition.
// Guaranteed to run at least one time, even if the condition evaluates to false.
// Syntax: do { ... } while (condition);

// Example 1: Normal execution
let count = 1;
console.log("--- Standard Do-While ---");
do {
  console.log(`Count: ${count}`);
  count++;
} while (count <= 3);

// Example 2: Condition is false initially, but executes once
console.log("\n--- False Condition Test ---");
let score = 50;
do {
  console.log(`Score printed: ${score}`); // Runs once
  score++;
} while (score < 10); // Condition is false (51 < 10 is false)