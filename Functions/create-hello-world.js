// LeetCode: Create Hello World
// https://leetcode.com/problems/create-hello-world/
// Difficulty: Easy
// Concept: Closures — a function that returns another function

function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}