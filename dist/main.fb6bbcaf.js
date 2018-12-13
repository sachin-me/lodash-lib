// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/Array/chunk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chunk;

function chunk(arr, size) {
  return arr.reduce(function (acc, v) {
    if (arr.length < size) {
      acc.push(v);
    } else {
      acc.push(arr.splice(0, size));
    }

    return acc;
  }, []);
} // var l = chunk([1, 2, 3, 4, 5, 6, 7], 2);
// console.log(l);
},{}],"js/Array/compact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compact;

function compact(arr) {
  return arr.reduce(function (acc, v) {
    if (v) {
      acc.push(v);
    }

    return acc;
  }, []);
} // var c = compact([1, 2, 3, 4, 5, 0, false, undefined, "", NaN]);
// console.log(c);
},{}],"js/Array/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concat;

function concat(arr) {
  for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    value[_key - 1] = arguments[_key];
  }

  return arr.concat.apply(arr, value);
} // let c2 = concat([1, 2, 3, 4], 5, 'a', [10], [11], [[15]]);
// console.log(c2);
},{}],"js/Array/difference.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = difference;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// difference(...array) {
//   return array.reduce((arr1, arr2) => {
//     return arr1.filter(v => !arr2.includes(v))
//   })
// }
function difference(array, _ref) {
  var _ref2 = _toArray(_ref),
      value = _ref2.slice(0);

  return array.filter(function (v) {
    return !value.includes(v);
  });
} // let c3 = difference([2, 3, 4, 10], [2, 3]);
// console.log(c3);
},{}],"js/Array/drop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;

function drop(array) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var newArr = array.concat();
  newArr.splice(0, size);
  return newArr;
} // let c4 = drop([1, 2, 3, 4, 5], 2);
// console.log(c4);
},{}],"js/Array/drop-right.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropRight;

function dropRight(arr) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.slice(0, arr.length - size);
} // let c5 = dropRight([1, 2, 3, 4, 5], 2);
// console.log(c5);
},{}],"js/Array/dropRightWhile.js":[function(require,module,exports) {
// var users = [
//     { 'user': 'barney',  'active': true },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': false }
//   ];
// function callback(o) {
//   return !o.active;
// }
// function dropRightWhile(users, callback) {
//   return callback;
// }
// var d = dropRightWhile(users, callback);
// console.log(d);
},{}],"js/Array/fill.js":[function(require,module,exports) {
function fill(arr, val, start, end) {
  return arr.fill(val, start, end);
}

var f = fill([1, 2, 3, 4, 5, 6], 0, 1, 3);
console.log(f);
},{}],"js/Array/flatten.js":[function(require,module,exports) {
function flatten(arr) {
  return arr.reduce(function (acc, v) {
    return acc.concat(v);
  }, []);
} // let f = flatten([1, [2], 3, "sjdgkj", [6]]);
// console.log(f);
},{}],"js/Array/flattenDeep.js":[function(require,module,exports) {
function flattenDeep(arr) {
  return arr.reduce(function (acc, v) {
    return Array.isArray(v) ? acc.concat(flattenDeep(v)) : acc.concat(v);
  }, []);
}

var flatDeepEl = flattenDeep([1, [2, 3], [["shdgash"]]]);
console.log(flatDeepEl);
},{}],"js/Array/fromPairs.js":[function(require,module,exports) {
function fromPairs(pairs) {
  return pairs.reduce(function (acc, v) {
    acc[v[0]] = v[1];
    return acc;
  }, {});
}

var pair = fromPairs([['a', 1], ['b', 2], ['c', 3]]);
console.log(pair);
},{}],"js/Array/head.js":[function(require,module,exports) {
function head(arr) {
  return arr[0];
} // let h1 = head([1, 2, 3, 4])
// console.log(h1);
// let h2 = head([]);
// console.log(h2);
},{}],"js/Array/indexOf.js":[function(require,module,exports) {
function indexOf(arr, value, fromIndex) {
  return arr.indexOf(value, fromIndex);
}

var i1 = indexOf([1, 2, 3, 4, 5], 3, 1);
console.log(i1);
},{}],"js/Array/initial.js":[function(require,module,exports) {
function initial(arr) {
  var newArr = arr.concat();
  newArr.splice(newArr.length - 1);
  return newArr;
}

var init = initial([1, 2, 3, 4, 5, 6, 7]);
console.log(init);
},{}],"js/Array/intersection.js":[function(require,module,exports) {
function intersection() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return arr.reduce(function (arr1, arr2) {
    return arr1.filter(function (v) {
      return arr2.includes(v);
    });
  });
}

var init = intersection([1, 2, 5], [2, 5, 10, 1]);
console.log(init);
},{}],"js/Array/join.js":[function(require,module,exports) {
function join(arr) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  return arr.join(separator);
}

var j = join(['a', 'b', 'c', 'd', 1, 2], '-');
console.log(j);
},{}],"js/Array/last.js":[function(require,module,exports) {
function last(arr) {
  var newArr = arr.splice(arr.length - 1);
  return +newArr.join('');
}

var last1 = last([1, 2, 3, 's', 'd', 10]);
console.log(last1);
},{}],"js/Array/flattenDepth.js":[function(require,module,exports) {
function flattenDepth(arr, num) {
  if (num == 0) return arr;
  var one = arr.reduce(function (acc, v) {
    Array.isArray(v) ? v.forEach(function (x) {
      return acc.push(x);
    }) : acc.push(v);
    return acc;
  }, []);
  num--;
  return flattenDepth(one, num);
}

var flat = flattenDepth([1, [2, 3], [["shdgash"]], [[[[[[10]]]]]]], 6);
console.log(flat);
},{}],"js/Array/lastIndexOf.js":[function(require,module,exports) {
function lastIndexOf(arr, val, fromIndex) {
  return arr.lastIndexOf(val, fromIndex);
}

var lastIndex = lastIndexOf([1, 2, 3, 4, 5, 1, 10, 5], 5, -1);
console.log(lastIndex);
},{}],"js/Array/nth.js":[function(require,module,exports) {
function nth(arr, len) {
  return arr.reduce(function (acc, v, i) {
    if (i == len) {
      acc = v;
    } else if (i == arr.length + len) {
      acc = v;
    }

    return acc;
  }, 0);
}

var nthEl = nth([1, 2, 'a', 'n', 's', 100], -1);
console.log(nthEl);
},{}],"js/Array/pull.js":[function(require,module,exports) {
function pull(arr) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return arr.filter(function (v) {
    return !values.includes(v);
  });
} // let pullEl = pull(['a', 'b', 'c', 'b'], 'a', 'c');
// console.log(pullEl);
},{}],"js/Array/pullAll.js":[function(require,module,exports) {
function pullAll(arr, value) {
  return arr.filter(function (x) {
    return !value.includes(x);
  });
}

var pullAllEl = pullAll(['a', 'b', 'c', 'b'], ['a', 'c']);
console.log(pullAllEl);
},{}],"js/Array/remove.js":[function(require,module,exports) {
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
  var eveArr = [];
  array.splice(0, array.length).forEach(function (v) {
    if (v % 2 == 0) {
      eveArr.push(v);
    } else {
      return array.push(v);
    }
  });
  console.log(array);
  return eveArr;
}

var removeEl = remove([1, 2, 3, 4]);
console.log(removeEl);
},{}],"js/Array/reverse.js":[function(require,module,exports) {
function reverse(arr) {
  var reversedArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

var rev = reverse(['a', 'b', 'c']);
console.log(rev);
},{}],"js/Array/slice.js":[function(require,module,exports) {
function slice(arr, start, end) {
  return arr.slice(start, end);
}

var sliced = slice([1, 2, 3, 4, 5], 1, 3);
console.log(sliced);
},{}],"js/Array/isArray.js":[function(require,module,exports) {
function isArray(arr) {
  return Array.isArray(arr);
}

var isArr = isArray(document.body.children);
console.log(isArr);
},{}],"js/Array/without.js":[function(require,module,exports) {
function without(arr) {
  for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    value[_key - 1] = arguments[_key];
  }

  return arr.filter(function (v) {
    return !value.includes(v);
  });
}

var withEl = without([1, 2, 3, 4, 5, 4], 4);
console.log(withEl);
},{}],"js/Array/find.js":[function(require,module,exports) {
var users = [{
  'user': 'barney',
  'age': 36,
  'active': true
}, {
  'user': 'fred',
  'age': 40,
  'active': false
}, {
  'user': 'pebbles',
  'age': 1,
  'active': true
}];

function check() {
  return users.filter(function (element, i) {
    if (element.age < 40) {
      return element;
    }
  });
}

function matches() {
  return users.filter(function (e) {
    if (e.age == 1 && e.active == true) {
      console.log(e);
    }
  });
}

function find(arr, callback) {
  return arr.find(callback);
}

var cdwqkld = find(users, matches);
console.log(cdwqkld);
},{}],"js/Array/findIndex.js":[function(require,module,exports) {
var users = [{
  'user': 'barney',
  'age': 36,
  'active': true
}, {
  'user': 'fred',
  'age': 40,
  'active': false
}, {
  'user': 'pebbles',
  'age': 1,
  'active': true
}];

function checkInd() {
  return users.filter(function (ele) {
    if (ele.age < 40) {
      return ele;
    }
  });
}

function findIndex(arr, callback) {
  return arr.findIndex(callback);
}

var findEl = findIndex(users, checkInd);
console.log(findEl);
},{}],"js/Array/tail.js":[function(require,module,exports) {
function tail(arr) {
  return arr.slice(1, arr.length);
}

var tailEl = tail([1, 2, 3, 4, 5]);
console.log(tailEl);
},{}],"js/String/repeat.js":[function(require,module,exports) {
function repeat(str, i) {
  return str.repeat(i);
}

var repeatEl = repeat('abc', 1);
console.log(repeatEl);
},{}],"js/String/toLower.js":[function(require,module,exports) {
function toLower(str) {
  return str.toLowerCase();
}

var toLowerEl = toLower('FOobaR');
console.log(toLowerEl);
},{}],"js/String/toUpper.js":[function(require,module,exports) {
function toUpper(str) {
  return str.toUpperCase();
}

var toUpperEl = toUpper('skxsaxgsjagcuisagcsaukcxas');
console.log(toUpperEl);
},{}],"js/String/trim.js":[function(require,module,exports) {
function trim(str, charsSpace) {
  return str.trim().split(charsSpace).join('');
}

var trimEl = trim('-_-bscdskjfsdjkfs-_-', '-_-');
console.log(trimEl);
},{}],"js/String/replace.js":[function(require,module,exports) {
function replace(str, pattern, replaceEl) {
  return str.replace(pattern, replaceEl);
}

var replaceStr = replace('Hi Fred', 'Fred', 'Barney');
console.log(replaceStr);
},{}],"js/Collection/each.js":[function(require,module,exports) {
function each(arr) {
  return arr.forEach(function (element, i, array) {
    console.log(element);
  });
}

var forEach = each([1, 2, 3, 4]);
console.log(forEach);
},{}],"js/Collection/every.js":[function(require,module,exports) {
function every(collection, callback) {
  return collection.every(callback);
}

var everyEl = every([true, 1, null, 'yes'], Boolean);
console.log(everyEl);
},{}],"js/Collection/filter.js":[function(require,module,exports) {
var users = [{
  'user': 'barney',
  'age': 36,
  'active': true
}, {
  'user': 'fred',
  'age': 40,
  'active': false
}];

function filter(arr, callback) {
  return arr.filter(callback);
}

var filterEl = filter(users, function (o) {
  return o.active;
});
console.log(filterEl);
},{}],"js/Collection/groupBy.js":[function(require,module,exports) {
function groupByObj(arr) {
  return arr.reduce(function (acc, v) {
    if (acc[v.length] || (acc[v.length] = [])) {
      acc[v.length].push(v);
    }

    return acc;
  }, {});
}

var groupByEl = groupByObj(['one', 'two', 'three']);
console.log(groupByEl);

function groupBy(arr) {
  return arr.reduce(function (acc, v) {
    if (acc[Math.floor(v)] || (acc[Math.floor(v)] = [])) {
      acc[Math.floor(v)].push(v);
    }

    return acc;
  }, {});
}

var groupByFloor = groupBy([1.3, 2.1, 2.4]);
console.log(groupByFloor);
},{}],"js/Collection/includes.js":[function(require,module,exports) {
function includes(arr, val, index) {
  return arr.includes(val, index);
}

var includesEl = includes('abcd', 'bc');
console.log(includesEl);
},{}],"js/Collection/map.js":[function(require,module,exports) {
function square(n) {
  return n * n;
}

function map(arr, callback) {
  return arr.map(callback);
}

var mapEl = map([2, 4], square);
console.log(mapEl); // let object = {'a': 4, 'b': 8}
// let mapObj = (function(object) {
//   console.log(Object.keys(object));
//   for (const i of object) {
//     console.log(i);
//   } 
// })(object);
// console.log(mapObj);
},{}],"js/Collection/minBy.js":[function(require,module,exports) {
function minBy(arr) {
  return arr.reduce(function (acc, v) {
    for (var key in acc, v) {
      return acc[key] <= v[key] ? acc : v;
    }
  }, {});
}

var minByEl = minBy([{
  'n': 1
}, {
  'n': 2
}]);
console.log(minByEl);
},{}],"js/Collection/maxBy.js":[function(require,module,exports) {
function maxBy(arr) {
  return arr.reduce(function (a, b) {
    for (var key in a, b) {
      return a[key] >= b[key] ? a : b;
    }
  }, {});
}

var maxByEl = maxBy([{
  'n': 1
}, {
  'n': 2
}]);
console.log(maxByEl);
},{}],"js/Collection/orderBy.js":[function(require,module,exports) {
var users = [{
  'user': 'fred',
  'age': 48
}, {
  'user': 'barney',
  'age': 34
}, {
  'user': 'fred',
  'age': 40
}, {
  'user': 'barney',
  'age': 36
}];

function orderBy(newArr, arr, itArr) {
  return newArr.reduce(function (a, b) {
    var _loop = function _loop(key) {
      // console.log(`key = ${key} and value = ${b[key]}`);
      arr.forEach(function (element) {
        if (element == key) {
          console.log(true);
        } else if (element != key) {
          console.log(false);
        }
      });
    };

    for (var key in b) {
      _loop(key);
    }
  }, {});
}

var orderByEl = orderBy(users, ['user', 'age'], ['asc', 'dsc']);
console.log(orderByEl);
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./Array/chunk");

require("./Array/compact");

require("./Array/concat");

require("./Array/difference");

require("./Array/drop");

require("./Array/drop-right");

require("./Array/dropRightWhile");

require("./Array/fill");

require("./Array/flatten");

require("./Array/flattenDeep");

require("./Array/fromPairs");

require("./Array/head");

require("./Array/indexOf");

require("./Array/initial");

require("./Array/intersection");

require("./Array/join");

require("./Array/last");

require("./Array/flattenDepth");

require("./Array/lastIndexOf");

require("./Array/nth");

require("./Array/pull");

require("./Array/pullAll");

require("./Array/remove");

require("./Array/reverse");

require("./Array/slice");

require("./Array/isArray");

require("./Array/without");

require("./Array/find");

require("./Array/findIndex");

require("./Array/tail");

require("./String/repeat");

require("./String/toLower");

require("./String/toUpper");

require("./String/trim");

require("./String/replace");

require("./Collection/each");

require("./Collection/every");

require("./Collection/filter");

require("./Collection/groupBy");

require("./Collection/includes");

require("./Collection/map");

require("./Collection/minBy");

require("./Collection/maxBy");

require("./Collection/orderBy");
},{"./Array/chunk":"js/Array/chunk.js","./Array/compact":"js/Array/compact.js","./Array/concat":"js/Array/concat.js","./Array/difference":"js/Array/difference.js","./Array/drop":"js/Array/drop.js","./Array/drop-right":"js/Array/drop-right.js","./Array/dropRightWhile":"js/Array/dropRightWhile.js","./Array/fill":"js/Array/fill.js","./Array/flatten":"js/Array/flatten.js","./Array/flattenDeep":"js/Array/flattenDeep.js","./Array/fromPairs":"js/Array/fromPairs.js","./Array/head":"js/Array/head.js","./Array/indexOf":"js/Array/indexOf.js","./Array/initial":"js/Array/initial.js","./Array/intersection":"js/Array/intersection.js","./Array/join":"js/Array/join.js","./Array/last":"js/Array/last.js","./Array/flattenDepth":"js/Array/flattenDepth.js","./Array/lastIndexOf":"js/Array/lastIndexOf.js","./Array/nth":"js/Array/nth.js","./Array/pull":"js/Array/pull.js","./Array/pullAll":"js/Array/pullAll.js","./Array/remove":"js/Array/remove.js","./Array/reverse":"js/Array/reverse.js","./Array/slice":"js/Array/slice.js","./Array/isArray":"js/Array/isArray.js","./Array/without":"js/Array/without.js","./Array/find":"js/Array/find.js","./Array/findIndex":"js/Array/findIndex.js","./Array/tail":"js/Array/tail.js","./String/repeat":"js/String/repeat.js","./String/toLower":"js/String/toLower.js","./String/toUpper":"js/String/toUpper.js","./String/trim":"js/String/trim.js","./String/replace":"js/String/replace.js","./Collection/each":"js/Collection/each.js","./Collection/every":"js/Collection/every.js","./Collection/filter":"js/Collection/filter.js","./Collection/groupBy":"js/Collection/groupBy.js","./Collection/includes":"js/Collection/includes.js","./Collection/map":"js/Collection/map.js","./Collection/minBy":"js/Collection/minBy.js","./Collection/maxBy":"js/Collection/maxBy.js","./Collection/orderBy":"js/Collection/orderBy.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35139" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map