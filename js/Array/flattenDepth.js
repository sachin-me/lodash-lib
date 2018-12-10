function flattenDepth(arr,num) {
  if (num == 0) return arr;
  var one = arr.reduce((acc, v) => {
    Array.isArray(v) ? v.forEach(x => acc.push(x)) : acc.push(v);
    return acc;
  }, [])
  num--;
  return flattenDepth(one, num);
}


let flat = flattenDepth([1, [2, 3], [["shdgash"]], [[[[[[10]]]]]]], 6);
console.log(flat);