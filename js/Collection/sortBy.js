function sortBy(arr) {
  return arr.reduce((a, b) => {
    (a[arr] > b[arr]) ? 1 : ((b[arr] > a[arr]) ? -1 : 0);
  })
}
// const sortBy = (key) => {
//   return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
// };

// let si