function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

const r1 = recursiveRange(6); // 21
const r2 = recursiveRange(10); // 55

console.log(r1, r2);
