/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/index.js */ "./src/script/index.js");


/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/script/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/script/scenes/loading.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](720, 720);
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.isActive === false) {
        this.currentScene = this.scenes[this.currentScene.nextScene];
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/script/game.js");


window.onload = function () {
  var eventScout = new _game_js__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  eventScout.run();
};

/***/ }),

/***/ "./src/script/scenes/loading.js":
/*!**************************************!*\
  !*** ./src/script/scenes/loading.js ***!
  \**************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/script/scenes/scene.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Loading = /*#__PURE__*/function (_Scene) {
  _inherits(Loading, _Scene);

  var _super = _createSuper(Loading);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, game);
    _this.nextScene = "menu";
    return _this;
  }

  _createClass(Loading, [{
    key: "render",
    value: function render(time) {
      this.game.screen.fill('#000000');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/script/scenes/scene.js":
/*!************************************!*\
  !*** ./src/script/scenes/scene.js ***!
  \************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene = /*#__PURE__*/function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.isActive = true;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/script/screen.js":
/*!******************************!*\
  !*** ./src/script/screen.js ***!
  \******************************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Screen = /*#__PURE__*/function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas();
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d');
  }

  _createClass(Screen, [{
    key: "createCanvas",
    value: function createCanvas() {
      var element = document.querySelector('canvas');

      if (element) {
        return element;
      }

      var canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      return canvas;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY2VuZXMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY3JlZW4uanMiXSwibmFtZXMiOlsiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInRpbWUiLCJpc0FjdGl2ZSIsIm5leHRTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwid2luZG93Iiwib25sb2FkIiwiZXZlbnRTY291dCIsInJ1biIsImdhbWUiLCJmaWxsIiwiU2NlbmUiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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TCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLFlBQUwsRUFBZDtBQUNBLFNBQUtELE1BQUwsQ0FBWUYsS0FBWixHQUFvQkEsS0FBcEI7QUFDQSxTQUFLRSxNQUFMLENBQVlELE1BQVosR0FBcUJBLE1BQXJCO0FBQ0EsU0FBS0csT0FBTCxHQUFlLEtBQUtGLE1BQUwsQ0FBWUcsVUFBWixDQUF1QixJQUF2QixDQUFmO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBLFdBU0Usd0JBQWM7QUFDWixVQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkOztBQUNBLFVBQUdGLE9BQUgsRUFBVztBQUNULGVBQU9BLE9BQVA7QUFDRDs7QUFDRCxVQUFJSixNQUFNLEdBQUdLLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FGLGNBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCVCxNQUExQjtBQUNBLGFBQU9BLE1BQVA7QUFDRDtBQWpCSDtBQUFBO0FBQUEsV0FrQkUsY0FBS1UsS0FBTCxFQUFXO0FBQ1QsV0FBS1IsT0FBTCxDQUFhUyxTQUFiLEdBQXlCRCxLQUF6QjtBQUNBLFdBQUtSLE9BQUwsQ0FBYVUsUUFBYixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixLQUFLZCxLQUFqQyxFQUF3QyxLQUFLQyxNQUE3QztBQUNEO0FBckJIOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3NjcmlwdC9pbmRleC5qcydcclxuIiwiaW1wb3J0IHtTY3JlZW59IGZyb20gJy4vc2NyZWVuJ1xyXG5pbXBvcnQge0xvYWRpbmd9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKDcyMCwgNzIwKVxyXG4gICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KClcclxuICB9XHJcbiAgZnJhbWUodGltZSl7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5pc0FjdGl2ZSA9PT0gZmFsc2Upe1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lLm5leHRTY2VuZV1cclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSlcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHt0aGlzLmZyYW1lKHRpbWUpfSlcclxuICB9XHJcbiAgcnVuKCl7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7dGhpcy5mcmFtZSh0aW1lKX0pXHJcbiAgICBcclxuICB9XHJcbn0iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuL2dhbWUuanNcIlxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBsZXQgZXZlbnRTY291dCA9IG5ldyBHYW1lXHJcbiAgZXZlbnRTY291dC5ydW4oKVxyXG59IiwiaW1wb3J0IHtTY2VuZX0gZnJvbSAnLi9zY2VuZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmV7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMubmV4dFNjZW5lID0gXCJtZW51XCJcclxuICB9XHJcbiAgcmVuZGVyKHRpbWUpe1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJylcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFNjZW5le1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICB9XHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcclxuICB9XHJcbiAgcmVuZGVyKHRpbWUpe1xyXG4gICAgXHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjcmVlbntcclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KXtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICB9XHJcbiAgY3JlYXRlQ2FudmFzKCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICBpZihlbGVtZW50KXtcclxuICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpXHJcbiAgICByZXR1cm4gY2FudmFzXHJcbiAgfVxyXG4gIGZpbGwoY29sb3Ipe1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==