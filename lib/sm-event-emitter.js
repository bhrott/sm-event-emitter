(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sm-event-emitter", [], factory);
	else if(typeof exports === 'object')
		exports["sm-event-emitter"] = factory();
	else
		root["sm-event-emitter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _eventEmitter = __webpack_require__(1);
	
	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _eventEmitter2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var guid = function guid() {
		var s4 = function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		};
	
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	};
	
	var _listeners = [];
	
	var EventEmitter = function () {
		function EventEmitter() {
			_classCallCheck(this, EventEmitter);
		}
	
		_createClass(EventEmitter, null, [{
			key: 'on',
			value: function on() {
				var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
				var eventId = guid();
	
				_listeners.push({
					eventName: eventName,
					eventId: eventId,
					listener: listener
				});
	
				return eventId;
			}
		}, {
			key: 'remove',
			value: function remove(eventId) {
				_listeners = _listeners.filter(function (event) {
					return event.eventId !== eventId;
				});
			}
		}, {
			key: 'emit',
			value: function emit() {
				var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
				_listeners.filter(function (event) {
					return event.eventName === eventName;
				}).forEach(function (event) {
					event.listener(payload);
				});
			}
		}]);
	
		return EventEmitter;
	}();
	
	exports.default = EventEmitter;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sm-event-emitter.js.map