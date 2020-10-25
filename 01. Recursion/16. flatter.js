function flatten(array) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = newArr.concat(flatten(array[i]));
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]

const r = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
console.log(r);
