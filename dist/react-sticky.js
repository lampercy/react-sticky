(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactSticky"] = factory(require("react"), require("react-dom"));
	else
		root["ReactSticky"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Channel = exports.StickyContainer = exports.Sticky = undefined;

	var _sticky = __webpack_require__(5);

	var _sticky2 = _interopRequireDefault(_sticky);

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	var _channel = __webpack_require__(1);

	var _channel2 = _interopRequireDefault(_channel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Sticky = _sticky2.default;
	exports.StickyContainer = _container2.default;
	exports.Channel = _channel2.default;
	exports.default = _sticky2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _channel = __webpack_require__(1);

	var _channel2 = _interopRequireDefault(_channel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_React$Component) {
	  _inherits(Container, _React$Component);

	  function Container(props) {
	    _classCallCheck(this, Container);

	    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

	    _this.updateOffset = function (_ref) {
	      var inherited = _ref.inherited,
	          offset = _ref.offset;

	      _this.channel.update(function (data) {
	        data.inherited = inherited + offset;
	      }, _this.props.channelName);
	    };

	    _this.channel = new _channel2.default({ inherited: 0, offset: 0, node: null }, props.channelName);
	    return _this;
	  }

	  _createClass(Container, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { 'sticky-channel': this.channel };
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var parentChannel = this.context['sticky-channel'];
	      if (parentChannel) parentChannel.subscribe(this.updateOffset, this.props.channelName);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var node = _reactDom2.default.findDOMNode(this);
	      this.channel.update(function (data) {
	        data.node = node;
	      }, this.props.channelName);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.channel.update(function (data) {
	        data.node = null;
	      }, this.props.channelName);

	      var parentChannel = this.context['sticky-channel'];
	      if (parentChannel) parentChannel.unsubscribe(this.updateOffset, this.props.channelName);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          channelName = _props.channelName,
	          props = _objectWithoutProperties(_props, ['channelName']);

	      return _react2.default.createElement(
	        'div',
	        props,
	        this.props.children
	      );
	    }
	  }]);

	  return Container;
	}(_react2.default.Component);

	Container.contextTypes = {
	  'sticky-channel': _react2.default.PropTypes.any
	};
	Container.childContextTypes = {
	  'sticky-channel': _react2.default.PropTypes.any
	};
	Container.defaultProps = {
	  channelName: 'default'
	};
	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sticky = function (_React$Component) {
	  _inherits(Sticky, _React$Component);

	  function Sticky(props) {
	    _classCallCheck(this, Sticky);

	    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this, props));

	    _this.updateContext = function (_ref) {
	      var inherited = _ref.inherited,
	          node = _ref.node;

	      _this.containerNode = node;
	      _this.setState({
	        containerOffset: inherited,
	        distanceFromBottom: _this.getDistanceFromBottom()
	      });
	    };

	    _this.recomputeState = function () {
	      var isSticky = _this.isSticky();
	      var height = _this.getHeight();
	      var boundingRect = _this.getPlaceholderBoundingRect();
	      var width = boundingRect.width;
	      var xOffset = boundingRect.left;
	      var distanceFromBottom = _this.getDistanceFromBottom();
	      var hasChanged = _this.state.isSticky !== isSticky;

	      _this.setState({ isSticky: isSticky, height: height, width: width, xOffset: xOffset, distanceFromBottom: distanceFromBottom });

	      if (hasChanged) {
	        if (_this.channel) {
	          _this.channel.update(function (data) {
	            data.offset = isSticky ? _this.state.height : 0;
	          }, _this.props.channelName);
	        }

	        _this.props.onStickyStateChange(isSticky);
	      }
	    };

	    _this.state = {};
	    _this.recomputeState = (0, _lodash2.default)(_this.recomputeState.bind(_this), 50);
	    return _this;
	  }

	  _createClass(Sticky, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.channel = this.context['sticky-channel'];
	      this.channel.subscribe(this.updateContext, this.props.channelName);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.on(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
	      this.recomputeState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.recomputeState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.off(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
	      this.channel.unsubscribe(this.updateContext, this.props.channelName);
	    }
	  }, {
	    key: 'getPlaceholderBoundingRect',
	    value: function getPlaceholderBoundingRect() {
	      return this.refs.placeholder.getBoundingClientRect();
	    }
	  }, {
	    key: 'getXOffset',
	    value: function getXOffset() {
	      return this.getPlaceholderBoundingRect().left;
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.getPlaceholderBoundingRect().width;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return _reactDom2.default.findDOMNode(this.refs.children).getBoundingClientRect().height;
	    }
	  }, {
	    key: 'getDistanceFromTop',
	    value: function getDistanceFromTop() {
	      return this.getPlaceholderBoundingRect().top;
	    }
	  }, {
	    key: 'getDistanceFromBottom',
	    value: function getDistanceFromBottom() {
	      if (!this.containerNode) return 0;
	      return this.containerNode.getBoundingClientRect().bottom;
	    }
	  }, {
	    key: 'isSticky',
	    value: function isSticky() {
	      if (!this.props.isActive) return false;

	      var fromTop = this.getDistanceFromTop();
	      var fromBottom = this.getDistanceFromBottom();

	      var topBreakpoint = this.state.containerOffset - this.props.topOffset;
	      var bottomBreakpoint = this.state.containerOffset + this.props.bottomOffset;

	      return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint;
	    }
	  }, {
	    key: 'on',
	    value: function on(events, callback) {
	      events.forEach(function (evt) {
	        window.addEventListener(evt, callback);
	      });
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      events.forEach(function (evt) {
	        window.removeEventListener(evt, callback);
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(newProps, newState) {
	      var _this2 = this;

	      // Have we changed the number of props?
	      var propNames = Object.keys(this.props);
	      if (Object.keys(newProps).length != propNames.length) return true;

	      // Have we changed any prop values?
	      var valuesMatch = propNames.every(function (key) {
	        return newProps.hasOwnProperty(key) && newProps[key] === _this2.props[key];
	      });
	      if (!valuesMatch) return true;

	      // Have we changed any state that will always impact rendering?
	      var state = this.state;
	      if (newState.isSticky !== state.isSticky) return true;

	      // If we are sticky, have we changed any state that will impact rendering?
	      if (state.isSticky) {
	        if (newState.height !== state.height) return true;
	        if (newState.width !== state.width) return true;
	        if (newState.xOffset !== state.xOffset) return true;
	        if (newState.containerOffset !== state.containerOffset) return true;
	        if (newState.distanceFromBottom !== state.distanceFromBottom) return true;
	      }

	      return false;
	    }

	    /*
	     * The special sauce.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var placeholderStyle = { paddingBottom: 0 };
	      var className = this.props.className;

	      // To ensure that this component becomes sticky immediately on mobile devices instead
	      // of disappearing until the scroll event completes, we add `transform: translateZ(0)`
	      // to 'kick' rendering of this element to the GPU
	      // @see http://stackoverflow.com/questions/32875046
	      var style = _extends({}, { transform: 'translateZ(0)' }, this.props.style);

	      if (this.state.isSticky) {
	        var _stickyStyle = {
	          position: 'fixed',
	          top: this.state.containerOffset,
	          left: this.state.xOffset,
	          width: this.state.width
	        };

	        var bottomLimit = this.state.distanceFromBottom - this.state.height - this.props.bottomOffset;
	        if (this.state.containerOffset > bottomLimit) {
	          _stickyStyle.top = bottomLimit;
	        }

	        placeholderStyle.paddingBottom = this.state.height;

	        className += ' ' + this.props.stickyClassName;
	        style = _extends({}, style, _stickyStyle, this.props.stickyStyle);
	      }

	      var _props = this.props,
	          topOffset = _props.topOffset,
	          isActive = _props.isActive,
	          stickyClassName = _props.stickyClassName,
	          stickyStyle = _props.stickyStyle,
	          bottomOffset = _props.bottomOffset,
	          onStickyStateChange = _props.onStickyStateChange,
	          channelName = _props.channelName,
	          props = _objectWithoutProperties(_props, ['topOffset', 'isActive', 'stickyClassName', 'stickyStyle', 'bottomOffset', 'onStickyStateChange', 'channelName']);

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', { ref: 'placeholder', style: placeholderStyle }),
	        _react2.default.createElement(
	          'div',
	          _extends({}, props, { ref: 'children', className: className, style: style }),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Sticky;
	}(_react2.default.Component);

	Sticky.propTypes = {
	  isActive: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object,
	  stickyClassName: _react2.default.PropTypes.string,
	  stickyStyle: _react2.default.PropTypes.object,
	  topOffset: _react2.default.PropTypes.number,
	  bottomOffset: _react2.default.PropTypes.number,
	  onStickyStateChange: _react2.default.PropTypes.func,
	  channelName: _react2.default.PropTypes.string
	};
	Sticky.defaultProps = {
	  isActive: true,
	  className: '',
	  style: {},
	  stickyClassName: 'sticky',
	  stickyStyle: {},
	  topOffset: 0,
	  bottomOffset: 0,
	  onStickyStateChange: function onStickyStateChange() {},
	  channelName: 'default'
	};
	Sticky.contextTypes = {
	  'sticky-channel': _react2.default.PropTypes.any
	};
	exports.default = Sticky;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = throttle;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;