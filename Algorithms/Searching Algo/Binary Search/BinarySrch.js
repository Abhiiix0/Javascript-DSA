function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Target not found
}

const sortedArr = [10, 20, 30, 40, 50];
console.log(binarySearch(sortedArr, 40)); // Output: 2
// 10,20,30,40,50 targert = 40
// 0,4 mid = 2

//3,4 mid = 3 for right side

//10,20,30,40,50 targert = 10
// 0,4 mid = 2

//0, 1 mid = 1
