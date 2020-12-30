function getProductSum(arr, depth=1) {
  let sum = 0;
  arr.forEach(item => {
    if(Array.isArray(item)) {
      sum += getProductSum(item, depth +1);
    }else {
      sum += item;
    }
  })
  return sum * depth;
}

const sum = getProductSum([1,2,[3,2],5,[[3,1],7]]);
console.log(sum)