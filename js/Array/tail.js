function tail(arr) {
  return arr.slice(1, arr.length);
}

let tailEl = tail([1, 2, 3, 4, 5]);
console.log(tailEl);