function last(arr) {
  let newArr = arr.splice(arr.length - 1);
  return +newArr.join('')
}

let last1 = last([1, 2, 3, 's', 'd', 10]);
console.log(last1);