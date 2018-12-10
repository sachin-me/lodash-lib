function every(collection, callback) {
  return collection.every(callback);
}

let everyEl = every([true, 1, null, 'yes'], Boolean);
console.log(everyEl);