'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Channel = function Channel(data) {
  var channelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

  _classCallCheck(this, Channel);

  var listeners = [];
  data = data || {};

  this.subscribe = function (fn) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

    if (name === channelName) {
      listeners.push(fn);
    }
  };

  this.unsubscribe = function (fn) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

    if (name === channelName) {
      var idx = listeners.indexOf(fn);
      if (idx !== -1) listeners.splice(idx, 1);
    }
  };

  this.update = function (fn) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

    if (name === channelName) {
      if (fn) fn(data);
      listeners.forEach(function (l) {
        return l(data);
      });
    }
  };
};

exports.default = Channel;
module.exports = exports['default'];