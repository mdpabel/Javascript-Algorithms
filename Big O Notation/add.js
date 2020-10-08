// Using loop
function add(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

const loopt1 = performance.now();
"add", add(100000000000000000000000);
const loopt2 = performance.now();

console.log(t2 - t5);

// Using Math
function add2(n) {
  return (n * (n + 1)) / 2;
}

const t3 = performance.now();
add2(100000000000000000000000);
const t4 = performance.now();

console.log(t4 - t3);

/*** THE PROBLEM WITH TIME ***
 * Different machine will record different times
 * The same machine will record different times
 * For fast algorithm, speed measurements may not be precise enough.
 */

// That's where BIG O notation comes in 
