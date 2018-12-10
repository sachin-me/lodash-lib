var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

function check() {
  return users.filter((element, i) => {
    if (element.age < 40) {
      return (element);
    }
  });
}

function matches() {
  return users.filter(e => {
    if (e.age == 1 && e.active == true) {
      console.log(e);
    }
  })
}

function find(arr, callback) {
  return arr.find(callback);
}

let cdwqkld = find(users, matches);
console.log(cdwqkld);