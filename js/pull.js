function pull(arr, ...values) {
  return arr.filter(v => !values.includes(v));
}

// let pullEl = pull(['a', 'b', 'c', 'b'], 'a', 'c');
// console.log(pullEl);