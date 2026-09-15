// ==========================================
// 4. LOGICAL OPERATORS IN JAVASCRIPT
// ==========================================
// Logical operators determine logic between variables or values,
// often used with conditional statements (if/else).

let hasId = true;
let isAdult = false;

// 1. Logical AND (&&)
// Returns true ONLY if BOTH operands evaluate to true.
// Short-circuits: stops at the first falsy operand.
console.log("hasId && isAdult:", hasId && isAdult); // false

// 2. Logical OR (||)
// Returns true if AT LEAST ONE operand is true.
// Short-circuits: stops at the first truthy operand.
console.log("hasId || isAdult:", hasId || isAdult); // true

// 3. Logical NOT (!)
// Inverts the boolean value (true becomes false, false becomes true).
console.log("!hasId:", !hasId);     // false
console.log("!isAdult:", !isAdult); // true

// Double NOT (!!): Converts any truthy/falsy value directly into a real boolean
let name = "Alex";
console.log("!!name:", !!name); // true

// --- Value Short-Circuiting Examples ---
// With &&, returns the first falsy value, or the last truthy value if all are truthy:
console.log("Short-circuit AND:", "Hello" && 123); // 123

// With ||, returns the first truthy value encountered:
console.log("Short-circuit OR:", "" || "Default Value"); // "Default Value"

// 4. Nullish Coalescing Operator (??)
// Returns the right-hand operand only if the left is null or undefined (not for 0 or "")
let count = 0;
console.log("count || 10 ->", count || 10); // 10 (treats 0 as falsy)
console.log("count ?? 10 ->", count ?? 10); // 0  (treats 0 as a valid defined value)