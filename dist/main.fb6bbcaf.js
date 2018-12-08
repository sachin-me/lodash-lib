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
})({"js/chunk.js":[function(require,module,exports) {
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
},{}],"js/compact.js":[function(require,module,exports) {
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
},{}],"js/concat.js":[function(require,module,exports) {
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
},{}],"js/difference.js":[function(require,module,exports) {
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
},{}],"js/drop.js":[function(require,module,exports) {
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
},{}],"js/drop-right.js":[function(require,module,exports) {
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
},{}],"js/dropRightWhile.js":[function(require,module,exports) {
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
},{}],"js/fill.js":[function(require,module,exports) {
function fill(arr, val, start, end) {
  return arr.fill(val, start, end);
}

var f = fill([1, 2, 3, 4, 5, 6], 0, 1, 3);
console.log(f);
},{}],"js/flatten.js":[function(require,module,exports) {
function flatten(arr) {
  return arr.reduce(function (acc, v) {
    return acc.concat(v);
  }, []);
} // let f = flatten([1, [2], 3, "sjdgkj", [6]]);
// console.log(f);
},{}],"js/flattenDeep.js":[function(require,module,exports) {
// function flattenDeep(arr) {
//   return arr.reduce((acc, v) => {
//     return Array.isArray(v) ? acc.concat(flattenDeep(v)) : acc.concat(v);
//   }, [])
// }
// let flat = flattenDeep([1, [2, 3], [["shdgash"]]]);
// console.log(flat);
},{}],"js/fromPairs.js":[function(require,module,exports) {
function fromPairs(pairs) {
  return pairs.reduce(function (acc, v) {
    acc[v[0]] = v[1];
    return acc;
  }, {});
}

var pair = fromPairs([['a', 1], ['b', 2], ['c', 3]]);
console.log(pair);
},{}],"js/head.js":[function(require,module,exports) {
function head(arr) {
  return arr[0];
} // let h1 = head([1, 2, 3, 4])
// console.log(h1);
// let h2 = head([]);
// console.log(h2);
},{}],"js/indexOf.js":[function(require,module,exports) {
function indexOf(arr, value, fromIndex) {
  return arr.indexOf(value, fromIndex);
}

var i1 = indexOf([1, 2, 3, 4, 5], 3, 1);
console.log(i1);
},{}],"js/initial.js":[function(require,module,exports) {
function initial(arr) {
  var newArr = arr.concat();
  newArr.splice(newArr.length - 1);
  return newArr;
}

var init = initial([1, 2, 3, 4, 5, 6, 7]);
console.log(init);
},{}],"js/intersection.js":[function(require,module,exports) {
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
},{}],"js/join.js":[function(require,module,exports) {
function join(arr) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  return arr.join(separator);
}

var j = join(['a', 'b', 'c', 'd', 1, 2], '-');
console.log(j);
},{}],"js/last.js":[function(require,module,exports) {
function last(arr) {
  return arr.slice(arr.length - 1);
}

var last1 = last([1, 2, 3, 's', 'd', 10]);
console.log(last1);
},{}],"js/flattenDepth.js":[function(require,module,exports) {
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
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./chunk");

require("./compact");

require("./concat");

require("./difference");

require("./drop");

require("./drop-right");

require("./dropRightWhile");

require("./fill");

require("./flatten");

require("./flattenDeep");

require("./fromPairs");

require("./head");

require("./indexOf");

require("./initial");

require("./intersection");

require("./join");

require("./last");

require("./flattenDepth");
},{"./chunk":"js/chunk.js","./compact":"js/compact.js","./concat":"js/concat.js","./difference":"js/difference.js","./drop":"js/drop.js","./drop-right":"js/drop-right.js","./dropRightWhile":"js/dropRightWhile.js","./fill":"js/fill.js","./flatten":"js/flatten.js","./flattenDeep":"js/flattenDeep.js","./fromPairs":"js/fromPairs.js","./head":"js/head.js","./indexOf":"js/indexOf.js","./initial":"js/initial.js","./intersection":"js/intersection.js","./join":"js/join.js","./last":"js/last.js","./flattenDepth":"js/flattenDepth.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32915" + '/');

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