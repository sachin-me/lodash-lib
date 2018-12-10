function each(arr) {
  return arr.forEach((element, i, array) => {
    console.log(element);
  });
}

let forEach = each([1, 2, 3, 4]);
console.log(forEach);
