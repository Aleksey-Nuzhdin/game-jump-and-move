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

/***/ "./src/script/control-state.js":
/*!*************************************!*\
  !*** ./src/script/control-state.js ***!
  \*************************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState = /*#__PURE__*/function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.dowm = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'dowm'], [32, 'fire']]);
    document.addEventListener('keydown', function (event) {
      _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
        console.log(this);
      }
    }
  }]);

  return ControlState;
}();

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
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/script/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game_level */ "./src/script/scenes/game_level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/script/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/script/control-state.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 720 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 720 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      player: 'img/player.png',
      menuBG: 'img/menuBG.jpg',
      //title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    });
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      game: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this)
    };
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.game;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
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

/***/ "./src/script/image-loader.js":
/*!************************************!*\
  !*** ./src/script/image-loader.js ***!
  \************************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader = /*#__PURE__*/function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
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

/***/ "./src/script/scene.js":
/*!*****************************!*\
  !*** ./src/script/scene.js ***!
  \*****************************/
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
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/script/scenes/game_level.js":
/*!*****************************************!*\
  !*** ./src/script/scenes/game_level.js ***!
  \*****************************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/script/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/script/sprite-sheet.js");
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



var GameLevel = /*#__PURE__*/function (_Scene) {
  _inherits(GameLevel, _Scene);

  var _super = _createSuper(GameLevel);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _super.call(this, game);
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10);

    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      console.log(this);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.tree);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

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
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/script/scene.js");
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
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill("#000000");
      this.game.screen.print(50, 70, "Загрузка...");

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/script/scenes/menu.js":
/*!***********************************!*\
  !*** ./src/script/scenes/menu.js ***!
  \***********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/script/scene.js");
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


var Menu = /*#__PURE__*/function (_Scene) {
  _inherits(Menu, _Scene);

  var _super = _createSuper(Menu);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _super.call(this, game);
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.fire) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'menuBG');
      this.game.screen.print(200, 350, "Нажми пробел чтобы начать");

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

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
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/script/image-loader.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Screen = /*#__PURE__*/function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var canvas = document.querySelector('canvas');
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "loadImages",
    value: function loadImages(imagePaths) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imagePaths);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
      });
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = "#FFFFFF";
      this.context.font = "22px Georgia";
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context.drawImage(this.images[sprite.imageName], sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/script/sprite-sheet.js":
/*!************************************!*\
  !*** ./src/script/sprite-sheet.js ***!
  \************************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/script/sprite.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SpriteSheet = /*#__PURE__*/function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageHeight = imageHeight;
    this.imageWidth = imageWidth;
    this.spriteHeight = spriteHeight;
    this.spriteWidth = spriteWidth;
  }

  _createClass(SpriteSheet, [{
    key: "getSprite",
    value: function getSprite() {
      var indexX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var indexY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourseX(indexX),
        sourceY: this.getSourseY(indexY),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourseX",
    value: function getSourseX(index) {
      return --index * this.spriteWidth;
    }
  }, {
    key: "getSourseY",
    value: function getSourseY(index) {
      return --index * this.spriteWidth;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/script/sprite.js":
/*!******************************!*\
  !*** ./src/script/sprite.js ***!
  \******************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceY = sourceY;
    this.sourceX = sourceX;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc2NlbmVzL2dhbWVfbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3NjZW5lcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3ByaXRlLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xTdGF0ZSIsInVwIiwiZG93bSIsImxlZnQiLCJyaWdodCIsImZpcmUiLCJrZXlNYXAiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInVwZGF0ZSIsInByZXNzZWQiLCJoYXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiR2FtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsInBsYXllciIsIm1lbnVCRyIsInRpbGVzIiwic2NlbmVzIiwibG9hZGluZyIsIkxvYWRpbmciLCJtZW51IiwiTWVudSIsImdhbWUiLCJHYW1lTGV2ZWwiLCJjb250cm9sIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsInRpbWUiLCJXT1JLSU5HIiwiY2hhbmdlU2NlbmUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibmFtZSIsInB1c2giLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJldmVudFNjb3V0IiwicnVuIiwiY29uc3RydWN0b3IiLCJTcHJpdGVTaGVldCIsImltYWdlTmFtZSIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInRyZWUiLCJnZXRTcHJpdGUiLCJzZXRYWSIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImltYWdlUGF0aHMiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwieCIsInkiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic291cmNlWCIsInNvdXJjZVkiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsImluZGV4WCIsImluZGV4WSIsIlNwcml0ZSIsImdldFNvdXJzZVgiLCJnZXRTb3Vyc2VZIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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LEVBQUk7O0FBQUE7O0FBQ2pFLFNBQUs4QyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUttQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLakYsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBSzBFLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDRDs7QUFUSDtBQUFBO0FBQUEsV0FXRSxlQUFNRCxDQUFOLEVBQVNDLENBQVQsRUFBVztBQUNULFdBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEO0FBZEg7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2NyaXB0L2luZGV4LmpzJ1xyXG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXAgPSBmYWxzZVxyXG4gICAgdGhpcy5kb3dtID0gZmFsc2VcclxuICAgIHRoaXMubGVmdCA9IGZhbHNlXHJcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2VcclxuICAgIHRoaXMuZmlyZSA9IGZhbHNlXHJcbiAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICBbMzcsJ2xlZnQnXSxbMzksJ3JpZ2h0J10sWzM4LCd1cCddLFs0MCwnZG93bSddLFszMiwnZmlyZSddXHJcbiAgICBdKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHsgdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpIH0pXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHsgdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSB9KVxyXG4gIH1cclxuICB1cGRhdGUoZXZlbnQsIHByZXNzZWQpe1xyXG4gICAgaWYodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKXtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICB0aGlzWyB0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSkgXSA9IHByZXNzZWRcclxuICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nXHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJ1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSdcclxuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZV9sZXZlbCdcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJ1xyXG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA3MjAsIGhlaWdodCA9IDcyMH0gPSB7fSl7XHJcbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodClcclxuICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xyXG5cdFx0XHRwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcbiAgICAgIG1lbnVCRzogJ2ltZy9tZW51QkcuanBnJyxcclxuXHRcdFx0Ly90aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxyXG5cdFx0XHR0aWxlczogJ2ltZy90aWxlcy5wbmcnICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxyXG4gICAgICBnYW1lOiBuZXcgR2FtZUxldmVsKHRoaXMpLFxyXG4gICAgfVxyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmdcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKVxyXG4gIH1cclxuICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWU7XHJcbiAgICAgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH0gXHJcbiAgZnJhbWUodGltZSl7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSlcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHt0aGlzLmZyYW1lKHRpbWUpfSlcclxuICB9XHJcbiAgcnVuKCl7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7dGhpcy5mcmFtZSh0aW1lKX0pXHJcbiAgICBcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9nYW1lLmpzXCJcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgbGV0IGV2ZW50U2NvdXQgPSBuZXcgR2FtZVxyXG4gIGV2ZW50U2NvdXQucnVuKClcclxufSIsIlxyXG5leHBvcnQgY2xhc3MgU2NlbmV7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkdcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG4gIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cclxuICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cclxuICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcbiAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cclxuICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lOR1xyXG4gIH1cclxuICBmaW5pc2goc3RhdHVzKXtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzXHJcbiAgfVxyXG4gIHJlbmRlcih0aW1lKXtcclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3Nwcml0ZS1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVMZXZlbCBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgIHN1cGVyKGdhbWUpXHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgIH0pXHJcbiAgICB0aGlzLnRyZWUgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSg3KVxyXG4gICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMClcclxuICB9XHJcbiAgaW5pdCgpe1xyXG4gICAgc3VwZXIuaW5pdCgpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKHRpbWUpe1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJylcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpXHJcbiAgICBzdXBlci5yZW5kZXIodGltZSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlZEF0ICE9IDAgJiYgdGltZSAtIHRoaXMubG9hZGVkQXQgPiA1MDApIHtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbChcIiMwMDAwMDBcIik7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZXtcclxuICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgIHN1cGVyKGdhbWUpXHJcbiAgfTtcclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgc3VwZXIuaW5pdCgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSl7XHJcbiAgICBpZih0aGlzLmdhbWUuY29udHJvbC5maXJlKXtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKXtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpXHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwICwwICwgJ21lbnVCRycpXHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDIwMCwgMzUwLCBcItCd0LDQttC80Lgg0L/RgNC+0LHQtdC7INGH0YLQvtCx0Ysg0L3QsNGH0LDRgtGMXCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpXHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbntcclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KXtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpe1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aFxyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgcmV0dXJuIGNhbnZhc1xyXG4gIH07XHJcblxyXG4gIGZpbGwoY29sb3Ipe1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgfTtcclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZVBhdGhzKXtcclxuICAgIGxldCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VQYXRocylcclxuICAgIGxvYWRlci5sb2FkKCkudGhlbiggbmFtZXMgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcHJpbnQoeCwgeSwgdGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIycHggR2VvcmdpYVwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH07XHJcblxyXG4gIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpe1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKXtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzcHJpdGUuc291cmNlWCxcclxuICAgICAgc3ByaXRlLnNvdXJjZVksXHJcbiAgICAgIHNwcml0ZS53aWR0aCxcclxuICAgICAgc3ByaXRlLmhlaWdodCxcclxuICAgICAgc3ByaXRlLngsXHJcbiAgICAgIHNwcml0ZS55LFxyXG4gICAgICBzcHJpdGUud2lkdGgsXHJcbiAgICAgIHNwcml0ZS5oZWlnaHRcclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0fSl7XHJcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZVxyXG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0XHJcbiAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoXHJcbiAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodFxyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoXHJcbiAgfVxyXG5cclxuICBnZXRTcHJpdGUoaW5kZXhYID0gMSwgaW5kZXhZID0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLCBcclxuICAgICAgc291cmNlWDogdGhpcy5nZXRTb3Vyc2VYKGluZGV4WCksIFxyXG4gICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJzZVkoaW5kZXhZKSwgXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLCBcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFNvdXJzZVgoaW5kZXgpe1xyXG4gICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aClcclxuICB9XHJcblxyXG4gIGdldFNvdXJzZVkoaW5kZXgpe1xyXG4gICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aClcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRle1xyXG4gIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSl7XHJcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZVxyXG4gICAgdGhpcy5zb3VyY2VZID0gc291cmNlWVxyXG4gICAgdGhpcy5zb3VyY2VYID0gc291cmNlWFxyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgdGhpcy54ID0gMFxyXG4gICAgdGhpcy55ID0gMFxyXG4gIH1cclxuXHJcbiAgc2V0WFkoeCwgeSl7XHJcbiAgICB0aGlzLnggPSB4XHJcbiAgICB0aGlzLnkgPSB5XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==