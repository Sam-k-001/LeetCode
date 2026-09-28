// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counts = new Map();

    for (const char of s) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!counts.get(char)) {
            return false;
        }
        counts.set(char, counts.get(char) - 1);
    }

    return true;
};