const sum = (n) => {
  if (n == 1) return 1;
  return n + sum(n - 1);
};

console.log(sum(3));

// in stack

// return 3 + sum(2)
//            return 2 + sum (1)
//                       return 1

// execution

//  return 2 + 1
//  return 3 + 3
//  return 6
