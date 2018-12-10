function lastIndexOf(arr, val, fromIndex) {
  return arr.lastIndexOf(val, fromIndex);
}

let lastIndex = lastIndexOf([1, 2, 3, 4, 5, 1, 10, 5], 5, -1);
console.log(lastIndex);