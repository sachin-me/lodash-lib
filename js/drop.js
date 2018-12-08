export default function drop(array, size = 1) {
  let newArr = array.concat();
  newArr.splice(0, size);
  return newArr 
}

// let c4 = drop([1, 2, 3, 4, 5], 2);
// console.log(c4);