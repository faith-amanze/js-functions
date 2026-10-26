// ===============================
// String Manipulation Functions
// ===============================

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word))
    .join(" ");
}

// ===============================
// Array Functions
// ===============================

// Find Maximum
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Find Minimum
function findMin(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((total, n) => total + n, 0);
}

// Filter Array (keeps elements for which the condition returns true)
function filterArray(arr, condition) {
  const result = [];
  for (const item of arr) {
    if (condition(item)) result.push(item);
  }
  return result;
}

// ===============================
// Mathematical Functions
// ===============================

// Factorial
function factorial(n) {
  if (n < 0) return undefined; // not defined for negatives
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Prime Number Check
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence (first `terms` numbers)
function fibonacci(terms) {
  const seq = [];
  let a = 0, b = 1;
  for (let i = 0; i < terms; i++) {
    seq.push(a);
    [a, b] = [b, a + b];
  }
  return seq;
}

// ===============================
// Testing
// ===============================
console.log("--- Strings ---");
console.log(reverseString("hello"));                    // "olleh"
console.log(countCharacters("JavaScript"));             // 10
console.log(capitalizeWords("hello big wide world"));   // "Hello Big Wide World"

console.log("--- Arrays ---");
const nums = [4, 9, 2, 15, 7];
console.log(findMax(nums));                             // 15
console.log(findMin(nums));                             // 2
console.log(sumArray(nums));                            // 37
console.log(filterArray(nums, (n) => n > 5));           // [9, 15, 7]

console.log("--- Math ---");
console.log(factorial(5));                              // 120
console.log(isPrime(17), isPrime(18));                  // true false
console.log(fibonacci(10));                             // [0,1,1,2,3,5,8,13,21,34]
