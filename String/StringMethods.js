// ==========================================
// COMMON JAVASCRIPT STRING METHODS
// ==========================================
// Note: String methods NEVER alter the original string; they return a new value.

const sampleText = "  Full Stack Web Development  ";

// 1. Whitespace Trimming
console.log("--- 1. Trimming ---");
console.log("Original:   ", JSON.stringify(sampleText));
console.log("trim():     ", JSON.stringify(sampleText.trim()));      // Both ends
console.log("trimStart():", JSON.stringify(sampleText.trimStart())); // Leading
console.log("trimEnd():  ", JSON.stringify(sampleText.trimEnd()));   // Trailing

// 2. Case Transformation
console.log("\n--- 2. Case Conversion ---");
const lang = "JavaScript";
console.log("toUpperCase():", lang.toUpperCase()); // "JAVASCRIPT"
console.log("toLowerCase():", lang.toLowerCase()); // "javascript"

// 3. Substring Extraction
console.log("\n--- 3. Extracting Parts ---");
const filename = "app.component.js";

// slice(start, end): extracts up to (not including) end
console.log("slice(0, 3):", filename.slice(0, 3));     // "app"
console.log("slice(-2):  ", filename.slice(-2));      // "js" (supports negative index)

// substring(start, end): treats negative numbers as 0
console.log("substring(4, 13):", filename.substring(4, 13)); // "component"

// 4. Searching & Inspecting
console.log("\n--- 4. Checking & Searching ---");
const bio = "Building web apps using JavaScript and Node.js";

console.log("includes('JavaScript'):", bio.includes("JavaScript")); // true
console.log("startsWith('Building'):", bio.startsWith("Building")); // true
console.log("endsWith('Node.js'):   ", bio.endsWith("Node.js"));   // true
console.log("indexOf('web'):        ", bio.indexOf("web"));        // 9 (-1 if not found)

// 5. Replacing Content
console.log("\n--- 5. Replacing ---");
const sentence = "Frontend with HTML, CSS and Frontend logic";
console.log("replace():   ", sentence.replace("Frontend", "Full-Stack"));     // Replaces 1st match
console.log("replaceAll():", sentence.replaceAll("Frontend", "Client-Side")); // Replaces all matches

// 6. Splitting & Joining
console.log("\n--- 6. Splitting to Array ---");
const tags = "javascript,coding,frontend,github";
const tagsArray = tags.split(","); // Splits string into array by delimiter
console.log("split(','):", tagsArray);
console.log("join(' #'):", "#" + tagsArray.join(" #")); // Assembles array back to string

// 7. Repeating & Padding
console.log("\n--- 7. Repeat & Pad ---");
console.log("repeat(3):    ", "JS ".repeat(3));              // "JS JS JS "
console.log("padStart(5,'0'):", "45".padStart(5, "0"));       // "00045"
console.log("padEnd(5, '.'):  ", "End".padEnd(5, "."));       // "End.."