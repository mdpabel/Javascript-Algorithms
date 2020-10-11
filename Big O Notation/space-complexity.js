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
