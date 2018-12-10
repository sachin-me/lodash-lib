function fromPairs(pairs) {
  return pairs.reduce((acc, v) => {
    acc[v[0]] = v[1];
    return acc;
  }, {})
}

let pair = fromPairs([['a', 1], ['b', 2], ['c', 3]])
console.log(pair);