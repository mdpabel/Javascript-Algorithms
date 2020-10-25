function findOdd(arr) {
  let newArr = [];
  function helperFunction(nums) {
    if (nums.length === 0) return;
    if (nums[0] % 2 != 0) {
      newArr.push(nums[0]);
    }
    helperFunction(nums.slice(1));
  }
  helperFunction(arr);
  return newArr;
}

const result = findOdd([1, 2, 3, 4, 5, 6]);
console.log(result);
