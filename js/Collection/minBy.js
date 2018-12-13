function minBy(arr) {
  return arr.reduce((acc, v) => {
    for (var key in acc, v) {
      return acc[key] <= v[key] ? acc : v;
    }
  }, {})
}

let minByEl = minBy([{ 'n': 1 }, { 'n': 2 }]);
console.log(minByEl);
