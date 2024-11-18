// Check if a String is a Palindrome Using Stack
function PalindromeCheck(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reverseStr = "";
  while (stack.length) {
    reverseStr += stack.pop();
  }
  return str === reverseStr;
}
console.log(PalindromeCheck("oyod"));
