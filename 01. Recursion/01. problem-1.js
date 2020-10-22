// Recursive way :
function printSomething(n) {
  if (n == 0) {
    console.log("All done!");
    return;
  }
  console.log(n);
  printSomething(n - 1);
}
printSomething(5);

// By iteration :

function printSomething2(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

printSomething2(5);
