function reverse(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

let rev = reverse(['a', 'b', 'c']);
console.log(rev);