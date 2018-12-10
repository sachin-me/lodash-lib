function replace(str, pattern, replaceEl) {
  return str.replace(pattern, replaceEl)
}

let replaceStr = replace('Hi Fred', 'Fred', 'Barney');
console.log(replaceStr);