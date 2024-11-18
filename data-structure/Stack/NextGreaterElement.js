// Find the Next Greater Element Using Stack
// Given an array, find the next greater element for each element. The next greater element is the first element to the right that is greater than the current element.
// nextGreaterElement([4, 5, 2, 10]);
/* Output: [5, 10, 10, -1]
   Explanation: 
   - For 4, the next greater element is 5.
   - For 5, the next greater element is 10.
   - For 2, the next greater element is 10.
   - For 10, there is no greater element, so we return -1.
*/

function nextGreaterElement(arr) {
  let stack = [];
  let result = new Array(arr?.length).fill(-1);
  for (let i = arr?.length - 1; i >= 0; i--) {
    while (stack?.length > 0 && stack[stack?.length - 1] <= arr[i]) {
      stack.pop(); // remove the element from stack if less than current element
    }
    if (stack?.length > 0) {
      result[i] = stack[stack?.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}
console.log(nextGreaterElement([4, 5, 2, 10]));
