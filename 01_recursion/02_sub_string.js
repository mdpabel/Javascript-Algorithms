function getSubSequence(str) {
  if(str == "") return "";

  const first = str.charAt(0);
  const rest = getSubSequence(str.substring(1));

  let result = "";
  rest.split(",").forEach(char => {
    result += "," + first + char;
    result += "," + char;
 
  })
  return result.substring(1);
}

const res = getSubSequence("abcd")
console.log(res)