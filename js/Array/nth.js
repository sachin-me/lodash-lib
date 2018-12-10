function nth(arr, len) {
  return arr.reduce((acc, v, i) => {
    if (i == len) {
      acc = v;
    } else if (i == arr.length + len) {
      acc = v;
    }
    return acc;
  }, 0)
}

let nthEl = nth([1, 2, 'a', 'n', 's', 100], -1);
console.log(nthEl);