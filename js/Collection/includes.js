function includes(arr, val, index) {
  return arr.includes(val, index);
}

let includesEl = includes('abcd', 'bc');
console.log(includesEl);