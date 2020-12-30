// function sum(a) {
//   return function(b) {
//     if(b === undefined ) {
//       return a;
//     }else {
//       return sum(a + b);
//     }
//   }
// }

const sum = (a) => (b) => (b === undefined ) ? a : sum(a + b)

const s = sum(2)(1)(3)(5)()
console.log(s)
