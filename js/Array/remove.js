// function even(n) {
//   if (n) {
//     if (n % 2 == 0) {
//       return n;
//     }
//     else if (n % 2 != 0) return;
//   }
// }

// let evenN = even(10);
// console.log(evenN);

function remove(array) {
  let eveArr = [];
  array.splice(0, array.length).forEach((v) => {
    if (v % 2 == 0) {
      eveArr.push(v);
    } else {
     return array.push(v);
    }
  })
  console.log(array);
  return eveArr;
}

let removeEl = remove([1, 2, 3, 4]);
console.log(removeEl);



