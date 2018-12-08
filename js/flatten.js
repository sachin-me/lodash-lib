function flatten(arr) {
  return arr.reduce((acc, v) => {
    return acc.concat(v);
  }, [])
}

// let f = flatten([1, [2], 3, "sjdgkj", [6]]);
// console.log(f);