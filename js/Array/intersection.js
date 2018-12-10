function intersection(...arr) {
  return arr.reduce((arr1, arr2) => {
    return arr1.filter(v => {
      return arr2.includes(v);
    })
  })
}

let init = intersection([1, 2, 5], [2, 5, 10, 1]);
console.log(init);