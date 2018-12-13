var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

function orderBy(newArr, arr, itArr) {
  return newArr.reduce((a, b) => {
    for (const key in b) {
      // console.log(`key = ${key} and value = ${b[key]}`);
      arr.forEach((element) => {
        if (element == key) {
          console.log(true);
          
        } else if (element != key) {console.log(false)}
      });
    }
  }, {})
}

let orderByEl = orderBy(users, ['user', 'age'], ['asc', 'dsc']);
console.log(orderByEl);