function flattenDeep(arr) {
  return arr.reduce((acc, v) => {
    return Array.isArray(v) ? acc.concat(flattenDeep(v)) : acc.concat(v);
  }, [])
}

let flatDeepEl = flattenDeep([1, [2, 3], [["shdgash"]]]);
console.log(flatDeepEl);

