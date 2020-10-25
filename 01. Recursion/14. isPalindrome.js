// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  function helperFunction(s) {
    if (s.length === 0) return s;
    return helperFunction(s.slice(1)) + s[0];
  }
  return str === helperFunction(str);
}

const r = isPalindrome("tacocat"); // true // false
console.log(r);

// (s.slice(1)) + s[0]
// acocat + t
// (s.slice(1)) + s[0]
// cocat + a
// (s.slice(1)) + s[0]
// ocat + c
// (s.slice(1)) + s[0]
// cat + o
// (s.slice(1)) + s[0]
// at + c
// (s.slice(1)) + s[0]
// t + a
// (s.slice(1)) + s[0]
// "" + t
