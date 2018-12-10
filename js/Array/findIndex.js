let users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

function checkInd() {
  return users.filter((ele) => {
    if (ele.age < 40) {
      return (ele);
    }
  })
}

function findIndex(arr, callback) {
  return arr.findIndex(callback)
}

let findEl = findIndex(users, checkInd);
console.log(findEl);