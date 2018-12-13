function maxBy(arr) {
  return arr.reduce((a, b) => {
    for (const key in a, b) {
      return a[key] >= b[key] ? a : b;
    }
  }, {})
}

let maxByEl = maxBy([{'n': 1}, {'n': 2}]);
console.log(maxByEl);