function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return str;
  return reverse(str.slice(1)) + str[0];
}

const r = reverse("awesome"); // 'emosewa'
console.log(r);
// reverse('rithmschool') // 'loohcsmhtir'
