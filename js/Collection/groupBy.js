function groupByObj(arr) {
  return arr.reduce((acc, v) => {
    if (acc[v.length] || (acc[v.length] = [])) {
      acc[v.length].push(v);
    }
    return acc;
  }, {});
}

let groupByEl = groupByObj(['one', 'two', 'three']);
console.log(groupByEl);

function groupBy(arr) {
  return arr.reduce((acc, v) => {
    if (acc[Math.floor(v)] || (acc[Math.floor(v)] = [])) {
      acc[Math.floor(v)].push(v);
    }
    return acc;
  }, {});
}

let groupByFloor = groupBy([1.3, 2.1, 2.4]);
console.log(groupByFloor);
