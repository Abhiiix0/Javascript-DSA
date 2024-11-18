// Write a function that checks if the given string has balanced parentheses using a stack.
function BalancedParenthese(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (isEmpty(stack)) {
        // return false because closing tag come first so thats why
        return false;
      }
      let top = stack.pop(); // it remove th efirst element
      if (
        (str[i] === ")" && top !== "(") ||
        (str[i] === "}" && top !== "{") ||
        (str[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}
console.log(BalancedParenthese("({})"));
