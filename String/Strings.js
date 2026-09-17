// ==========================================
// STRINGS & TEMPLATE LITERALS
// ==========================================
// Strings are primitive, immutable data types representing sequence of characters.

// 1. String Declarations
const singleQuotes = 'Single quote syntax';
const doubleQuotes = "Double quote syntax";
const backticks = `Template literal syntax`;

// 2. Length & Index Access
const framework = "React";
console.log("String Length:", framework.length); // 5
console.log("First Character [0]:", framework[0]); // 'R'
console.log("Last Character [length - 1]:", framework[framework.length - 1]); // 't'

// 3. String Immutability
// Individual characters in strings cannot be replaced via index assignment
framework[0] = "P";
console.log("After mutation attempt:", framework); // Output: still "React"

// 4. Template Literals & String Interpolation
const item = "Mechanical Keyboard";
const price = 2500;
const units = 2;

// Embedded variables and expressions using ${}
const invoice = `Purchased ${units}x ${item} for total: ₹${price * units}`;
console.log("\n--- Template Literal Output ---");
console.log(invoice);

// Multi-line Strings
const multiLine = `Step 1: Write code
Step 2: Commit changes
Step 3: Push to GitHub`;
console.log("\n--- Multi-line String ---");
console.log(multiLine);

// 5. Escape Characters
console.log("\n--- Escape Sequences ---");
console.log("Quotes: \"Success is daily practice\"");
console.log("Line Break:\nFirst line\nSecond line");
console.log("Tab indentation:\tIndented text");