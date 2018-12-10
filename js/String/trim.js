function trim(str, charsSpace) {
  return str.trim().split(charsSpace).join('');
}

let trimEl = trim('-_-bscdskjfsdjkfs-_-', '-_-');
console.log(trimEl);  