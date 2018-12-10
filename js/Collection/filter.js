var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

function filter(arr, callback) {
  return arr.filter(callback);
}

let filterEl = filter(users, function(o) { return o.active; });
console.log(filterEl);