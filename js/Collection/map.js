function square(n) {
  return n * n;
}

function map(arr, callback) {
  return arr.map(callback);
}

let mapEl = map([2, 4], square);

console.log(mapEl);

// let object = {'a': 4, 'b': 8}

// let mapObj = (function(object) {
//   console.log(Object.keys(object));
//   for (const i of object) {
//     console.log(i);
//   } 
// })(object);
// console.log(mapObj);