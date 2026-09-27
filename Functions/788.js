// An integer x is a good if after rotating each digit individually by 180 degrees, we get a valid number that is different from x. Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. For example:

// 0, 1, and 8 rotate to themselves,
// 2 and 5 rotate to each other (in this case they are rotated in a different direction, in other words, 2 or 5 gets mirrored),
// 6 and 9 rotate to each other, and
// the rest of the numbers do not rotate to any other number and become invalid.
// Given an integer n, return the number of good integers in the range [1, n].

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
// Example 2:

// Input: n = 1
// Output: 0
// Example 3:

// Input: n = 2
// Output: 1

/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    const invalid = new Set([3, 4, 7]);
    const differs = new Set([2, 5, 6, 9]);

    let count = 0;

    for (let num = 1; num <= n; num++) {
        let hasInvalid = false;
        let hasDiffering = false;
        let x = num;

        while (x > 0) {
            const digit = x % 10;
            if (invalid.has(digit)) {
                hasInvalid = true;
                break;
            }
            if (differs.has(digit)) {
                hasDiffering = true;
            }
            x = Math.floor(x / 10);
        }

        if (!hasInvalid && hasDiffering) {
            count++;
        }
    }

    return count;
};