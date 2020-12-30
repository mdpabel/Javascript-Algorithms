function recursive(n) {
  if (n == 1) return 1;
  return n * recursive(n - 1);
}

const result = recursive(5);
console.log(result);
