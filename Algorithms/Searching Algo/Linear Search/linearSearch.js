//Linear Search : Use linear search when the data is unsorted, small, or changes frequently.

// Time Complexity:
// Best Case: O(1) (if the target is the first element).
// Worst Case: O(n) (if the target is not found or is the last element).
// Average Case: O(n).

// Space Complexity:
//  O(1) No additional data structures (like arrays or objects) are needed, so the space complexity remains O(1).

// Find an Element in an Array
const arr = [5, 8, 2, 8, 4, 3, 0, 6, 7];
const target = 0;
function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(LinearSearch(arr, target));
