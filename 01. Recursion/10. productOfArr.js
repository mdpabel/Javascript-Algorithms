function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

const r1 = productOfArray([1, 2, 3]); // 6
const r2 = productOfArray([1, 2, 3, 10]); // 60

console.log(r1, r2);
