function join(arr, separator = ',') {
  return arr.join(separator);
}

let j = join(['a', 'b', 'c', 'd', 1, 2], '-');
console.log(j);