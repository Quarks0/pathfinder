/******/ (function(modules) { // webpackBootstrap
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
	
	var _grid = __webpack_require__(1);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _grid_view = __webpack_require__(2);
	
	var _grid_view2 = _interopRequireDefault(_grid_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById("canvas");
	  canvas.width = 600;
	  canvas.height = 600;
	
	  var stage = new createjs.Stage(canvas);
	
	  // const circle = new createjs.Shape();
	  // circle.graphics.beginFill("red").drawCircle(0, 0, 40);
	  // circle.x = circle.y = 200;
	  // stage.addChild(circle);
	  //Update stage will render next frame
	
	  createjs.Ticker.setFPS(30);
	
	  createjs.Ticker.addEventListener("click", stage);
	  createjs.Ticker.addEventListener("click", tick);
	
	  var length = 2;
	
	  var startCircle = new createjs.Shape();
	  stage.addChild(startCircle);
	  startCircle.graphics.beginFill("white").drawCircle(50, 550, 25);
	  stage.update();
	
	  function tick(event) {
	    console.log(event);
	    // if (e.key.isPressed('up') || e.key.isPressed('w')){
	    //   console.log("up");
	    // }
	    // if (e.key.isPressed('down') || e.key.isPressed('s')){
	    //   console.log("down");
	    // }
	    // if (e.key.isPressed('left') || e.key.isPressed('a')){
	    //   console.log("left");
	    // }
	    // if (key.isPressed('right') || key.isPressed('d')){
	    //   console.log("right");
	    // }
	  }
	});
	
	function drawGrid(length, stage) {
	  //Draw verticals
	  for (var i = 0; i <= length; i++) {
	    var line = new createjs.Shape();
	    stage.addChild(line);
	    line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
	    var shift = 500 * (i / length);
	    line.graphics.moveTo(shift + 50, 50);
	    line.graphics.lineTo(shift + 50, 550);
	
	    line.graphics.endStroke;
	  }
	  //Draw horizontals
	  for (var i = 0; i <= length; i++) {
	    var _line = new createjs.Shape();
	    stage.addChild(_line);
	    _line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
	    var _shift = 500 * (i / length);
	    _line.graphics.moveTo(50, 50 + _shift);
	    _line.graphics.lineTo(550, 50 + _shift);
	
	    _line.graphics.endStroke;
	  }
	}
	
	function drawStart() {}
	
	function drawEnd() {}
	
	function drawPath() {}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Grid = function () {
	  function Grid(length, stage) {
	    _classCallCheck(this, Grid);
	
	    this.length = length;
	    this.stage = stage;
	  }
	
	  _createClass(Grid, [{
	    key: "drawGrid",
	    value: function drawGrid() {
	      for (var i = 0; i <= this.length; i++) {
	        var line = new createjs.Shape();
	        this.stage.addChild(line);
	        line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
	        var shift = 500 * (i / this.length);
	        line.graphics.moveTo(shift + 50, 50);
	        line.graphics.lineTo(shift + 50, 550);
	
	        line.graphics.endStroke;
	      }
	    }
	  }]);
	
	  return Grid;
	}();
	
	exports.default = Grid;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GridView = function () {
	  function GridView(game, context) {
	    _classCallCheck(this, GridView);
	
	    this.context = context;
	    this.game = game;
	  }
	
	  _createClass(GridView, [{
	    key: "bindKeys",
	    value: function bindKeys() {}
	  }, {
	    key: "start",
	    value: function start() {
	      this.bindKeys();
	      this.lastTime = 0;
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }, {
	    key: "animate",
	    value: function animate(time) {
	      var dTime = time - this.lastTime;
	
	      this.game.step(dTime);
	      this.game.draw(this.context);
	      this.lastTime = time;
	
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }]);
	
	  return GridView;
	}();
	
	GridView.BINDINGS = {
	  "w": [0, -1],
	  "a": [-1, 0],
	  "s": [0, 1],
	  "d": [1, 0]
	};
	
	//For arrow keys
	//$(document).keydown(function(e) {
	//     switch(e.which) {
	//         case 37: // left
	//         break;
	//
	//         case 38: // up
	//         break;
	//
	//         case 39: // right
	//         break;
	//
	//         case 40: // down
	//         break;
	//
	//         default: return; // exit this handler for other keys
	//     }
	//     e.preventDefault(); // prevent the default action (scroll / move caret)
	// });

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map