//reverse the string with stack;
function reverseString(str) {
  const strArr = str?.split(" ");
  const stack = [];
  for (const char of strArr) {
    stack.push(char);
  }
  let finalStr = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      finalStr += " " + current;
    }
  }
  return finalStr;
}
console.log(reverseString("Hi Wassup kkrh"));
