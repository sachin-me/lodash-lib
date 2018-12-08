export default function compact(arr) {
  return arr.reduce((acc, v) => {
    if (v) {
      acc.push(v);
    }
    return acc
  }, [])
}

// var c = compact([1, 2, 3, 4, 5, 0, false, undefined, "", NaN]);
// console.log(c);