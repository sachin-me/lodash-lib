function initial(arr) {
  let newArr = arr.concat();
  newArr.splice(newArr.length - 1);
  return newArr;
}

let init = initial([1, 2, 3, 4, 5, 6, 7]);
console.log(init);