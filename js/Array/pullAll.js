function pullAll(arr, value) {
  return arr.filter(x => !value.includes(x));
}

let pullAllEl = pullAll(['a', 'b', 'c', 'b'], ['a', 'c']);
console.log(pullAllEl);