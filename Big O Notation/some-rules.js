/******************* Constant Don't Matter ***************/

/**
 * O(2n) => O(n)
 * O(5000) => O(1)
 * O(21n2) => O(n2)
 */

/******************* Smaller Terms Don't Matter ***************/

/**
 * O(2n + 10) => O(n)
 * O(500000n + 1000) => O(1)
 * O(n2 + 10n + 99) => O(n2) // (10000)2 + 10X10000 + 99 = 100,010,099 = 100,000,000 => n2
 */

// some complex examples :-

// O(n)- we only care about only n grows larger, if n = 1000 the loop will run 1000 times
function print(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// O(1)- if n grows It doesn't matter, if n = 10000000 the loop runs 5 times
function print(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

/*************Exercise */

// O(n)
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// O(1)
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// O(n)
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// O(n2)

function subtotals(array) {
  var subtotalArray = Array(array.length); // subtotalArray = [1,3,6,10,15,21]
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

subtotals([1, 2, 3, 4, 5, 6]);
