// difference(...array) {
//   return array.reduce((arr1, arr2) => {
//     return arr1.filter(v => !arr2.includes(v))
//   })
// }
export default function difference(array, [...value]) {
  return array.filter(v => !value.includes(v));
}

// let c3 = difference([2, 3, 4, 10], [2, 3]);
// console.log(c3);