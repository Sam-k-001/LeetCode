// LeetCode 2620: Counter
// https://leetcode.com/problems/counter/
// Difficulty: Easy
// Concept: Closures — a function that returns another function which remembers state between calls

var createCounter = function(n) {
  let current = n;
  return function() {
    return current++;   // returns current value, THEN increases it
  };
};