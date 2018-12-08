export default function dropRight(arr, size = 1) {
  return arr.slice(0, arr.length - size);
}

// let c5 = dropRight([1, 2, 3, 4, 5], 2);
// console.log(c5);