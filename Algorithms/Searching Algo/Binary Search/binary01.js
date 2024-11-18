const arrNew = [1, 5, 6, 9, 12, 16, 23, 25];
// target = 5

function BinarayMethod(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      //   console.log(mid);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log("Not found");
  return -1;
}

console.log(BinarayMethod(arrNew, 23));
