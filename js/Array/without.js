function without(arr, ...value) {
  return arr.filter(v => !value.includes(v));
}

let withEl = without([1, 2, 3, 4, 5, 4], 4);
console.log(withEl);