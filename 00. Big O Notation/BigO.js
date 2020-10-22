/*** THE PROBLEM WITH TIME ***
 * Different machine will record different times
 * The same machine will record different times
 * For fast algorithm, speed measurements may not be precise enough.
 */

/***
 * That's where BIG O notation comes in :-
 * Rather than counting seconds which are so variable,
 * Let's count number of simple operation that computer has to perform
 */

// Using loop
//  It is matter what n is, if n is 2 , there is 2X calculation, if n is million then millionX operation
// 5n + 2
function add(n) {
  let sum = 0; // 1 assignment
  for (let i = 0; i <= n; i++) {
    // i=0 => n assignment, i<=n => n comparisions, i++ => n operation, n assignment cause i++ === i=i+1
    sum += i; // n operation , n assignment
  }
  return sum;
}

// Using Math
// It doesn't matter what n is, if n is 2 or million, there is only 3 calculation that are happening
// 3
function add2(n) {
  return (n * (n + 1)) / 2; // 3 operation (1 mul, 1 add, 1 div)
}

/******************** Introducing BIG O  *********************/

/**
 * Big-O is a standard mathematical notation that shows how efficient an algorithm is in the worst-case scenario relative to its input size
 * It's usually written as: f(n) = O(inputSize)f(n)=O(inputSize)
 * https://www.educative.io/edpresso/what-is-bigo-notation
 *
 * O(1) => Constant
 * O(n) => Linear
 * O(n​2) => Quadratic
 * etc...
 */

// BIG O(1) - always 3 operation

function add2(n) {
  return (n * (n + 1)) / 2;
}

// BIG O(n) -> number of operation is bounded by multiple of n

function add(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

////

function add(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }

  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

// BIG O(n2) -> O(n) operation inside of an O(n) operation.

function add(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}
