'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mousemove = require('./mousemove');

Object.keys(_mousemove).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mousemove[key];
    }
  });
});
