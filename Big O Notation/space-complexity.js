/**
 * Most of primitives (number, boolean, null, undefined ) are constant
 */

//O(1)
function sum(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/**
 * String require O(n) space, where n is the string length
 * Reference types are generally O(n) where n is the length of array o keys of object
 */

// O(n)
function newArr(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// *******************************EXAMPLE *****************************************
// O(1)
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

// O(n)
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
