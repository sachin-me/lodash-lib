export default function chunk(arr, size) {
  return arr.reduce((acc, v) => {
    if (arr.length < size) {
      acc.push(v);
    } else {
      acc.push(arr.splice(0, size));
    }
    return acc;
  }, [])
}

// var l = chunk([1, 2, 3, 4, 5, 6, 7], 2);
// console.log(l);