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
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _obstacle = __webpack_require__(1);
	
	var _obstacle2 = _interopRequireDefault(_obstacle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById("canvas");
	  canvas.width = 600;
	  canvas.height = 600;
	
	  var stage = new createjs.Stage(canvas);
	
	  var length = 2;
	
	  var _initializeGrid = initializeGrid(length, stage),
	      _initializeGrid2 = _slicedToArray(_initializeGrid, 2),
	      startPoint = _initializeGrid2[0],
	      endPoint = _initializeGrid2[1];
	
	  var obs1 = new _obstacle2.default(stage, "bsq", [150, 150]);
	  var obs2 = new _obstacle2.default(stage, "twtri", [400, 150]);
	  var obs3 = new _obstacle2.default(stage, "thtri", [150, 400]);
	  var obs4 = new _obstacle2.default(stage, "wsq", [400, 400]);
	  var obs5 = new _obstacle2.default(stage, "otri", [100, 100]);
	  var moves = [[startPoint.x, startPoint.y]];
	  var endPoints = [endPoint.x, endPoint.y];
	
	  stage.update();
	
	  document.onkeydown = keyPressed;
	
	  function initializeGrid(length) {
	    drawGrid(length);
	    return [drawStart(), drawEnd()];
	  }
	
	  function drawGrid(length) {
	    for (var i = 0; i <= length; i++) {
	      var line = new createjs.Shape();
	      stage.addChild(line);
	      line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
	      var shift = 500 * (i / length);
	      line.graphics.moveTo(shift + 50, 50);
	      line.graphics.lineTo(shift + 50, 550);
	
	      line.graphics.endStroke;
	    }
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
	
	  function drawStart() {
	    var startCircle = new createjs.Shape();
	    stage.addChild(startCircle);
	    startCircle.graphics.beginFill("white").drawCircle(0, 0, 25);
	    startCircle.x = 50;
	    startCircle.y = 550;
	    stage.update();
	    var pos = [startCircle.x, startCircle.y];
	    return startCircle;
	  }
	
	  function drawEnd() {
	    var endCircle = new createjs.Shape();
	    stage.addChild(endCircle);
	    endCircle.graphics.beginFill("green").drawCircle(0, 0, 20);
	    endCircle.x = 550;
	    endCircle.y = 50;
	    return endCircle;
	  }
	
	  function keyPressed(event) {
	    var newPos = void 0;
	    switch (event.keyCode) {
	      case 38:
	      case 87:
	        newPos = [lastMove()[0], lastMove()[1] - 500 / length];
	        if (validMove(newPos)) {
	          if (moves.length > 1 && equalArrays(newPos, moves[moves.length - 2])) {
	            undoMove();
	          } else {
	            drawPath(newPos);
	          }
	          endPath();
	        }
	        break;
	      case 40:
	      case 83:
	        newPos = [lastMove()[0], lastMove()[1] + 500 / length];
	        if (validMove(newPos)) {
	          if (moves.length > 1 && equalArrays(newPos, moves[moves.length - 2])) {
	            undoMove();
	          } else {
	            drawPath(newPos);
	          }
	          endPath();
	        }
	        break;
	      case 37:
	      case 65:
	        newPos = [lastMove()[0] - 500 / length, lastMove()[1]];
	        if (validMove(newPos)) {
	          if (moves.length > 1 && equalArrays(newPos, moves[moves.length - 2])) {
	            undoMove();
	          } else {
	            drawPath(newPos);
	          }
	          endPath();
	        }
	        break;
	      case 39:
	      case 68:
	        newPos = [lastMove()[0] + 500 / length, lastMove()[1]];
	        if (validMove(newPos)) {
	          if (moves.length > 1 && equalArrays(newPos, moves[moves.length - 2])) {
	            undoMove();
	          } else {
	            drawPath(newPos);
	          }
	          endPath();
	        }
	        break;
	      default:
	        console.log('pushed other button');
	        break;
	    }
	  }
	
	  function undoMove() {
	    stage.removeChildAt(stage.children.length - 1);
	    moves.pop();
	    stage.update();
	  }
	
	  function drawPath(newPos) {
	    var line = new createjs.Shape();
	    stage.addChild(line);
	    line.graphics.setStrokeStyle(20, 'round').beginStroke("white");
	    line.graphics.moveTo(lastMove()[0], lastMove()[1]);
	    line.graphics.lineTo(newPos[0], newPos[1]);
	    moves.push(newPos);
	    line.graphics.endStroke;
	    stage.update();
	  }
	
	  function validMove(pos) {
	    if (inBounds(pos) || equalArrays(pos, moves[moves.length - 2])) {
	      for (var i = 0; i < moves.length - 2; i++) {
	        if (equalArrays(moves[i], pos)) {
	          return false;
	        }
	      }
	      return true;
	    }
	    return false;
	  }
	
	  function inBounds(pos) {
	    return 50 <= pos[0] && 50 <= pos[1] && pos[0] <= 550 && pos[1] <= 550;
	  }
	
	  function equalArrays(arr1, arr2) {
	    if (arr1.length === arr2.length) {
	      for (var i = 0; i < arr1.length; i++) {
	        if (arr1[i] !== arr2[i]) {
	          return false;
	        }
	      }
	      return true;
	    }
	    return false;
	  }
	
	  function lastMove() {
	    return moves[moves.length - 1];
	  }
	
	  function endPath() {
	    if (equalArrays(lastMove(), endPoints)) {
	      //insert win logic
	      console.log("u win");
	      return true;
	    } else {
	      return false;
	    }
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Obstacle = function () {
	  function Obstacle(stage, type, pos, length) {
	    _classCallCheck(this, Obstacle);
	
	    this.stage = stage;
	    this.type = type;
	    this.pos = pos;
	    this.length = length;
	
	    this.render();
	  }
	
	  _createClass(Obstacle, [{
	    key: "validated",
	    value: function validated() {
	
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var obs = new createjs.Shape();
	      this.stage.addChild(obs);
	
	      var _pos = _slicedToArray(this.pos, 2),
	          x = _pos[0],
	          y = _pos[1];
	
	      switch (this.type) {
	        case "bsq":
	          console.log("making a black sq");
	          obs.graphics.beginFill("black").drawRoundRect(0, 0, 50, 50, 10);
	          obs.x = x;
	          obs.y = y;
	          break;
	        case "wsq":
	          obs.graphics.beginFill("white").drawRoundRect(0, 0, 50, 50, 10);
	          obs.x = x;
	          obs.y = y;
	          break;
	          break;
	        case "otri":
	          obs.graphics.beginFill("orange").moveTo(x, y).lineTo(x + 20, y + 20).lineTo(x - 20, y + 20).closePath();
	          break;
	        case "twtri":
	          obs.graphics.beginFill("orange").moveTo(x - 20, y).lineTo(x, y + 20).lineTo(x - 40, y + 20).closePath();
	          obs.graphics.beginFill("orange").moveTo(x + 20, y).lineTo(x, y + 20).lineTo(x + 40, y + 20).closePath();
	          break;
	        case "thtri":
	          obs.graphics.beginFill("orange").moveTo(x - 40, y).lineTo(x - 20, y + 20).lineTo(x - 60, y + 20).closePath();
	          obs.graphics.beginFill("orange").moveTo(x, y).lineTo(x + 20, y + 20).lineTo(x - 20, y + 20).closePath();
	          obs.graphics.beginFill("orange").moveTo(x + 40, y).lineTo(x + 20, y + 20).lineTo(x + 60, y + 20).closePath();
	          break;
	        case "gcir":
	          obs.graphics.beginFill("green").drawCircle(x, y, 20);
	          break;
	        default:
	          console.log("nuffin");
	          break;
	      }
	      this.stage.update();
	    }
	  }, {
	    key: "within",
	    value: function within(path) {
	      for (var i = 0; i < path.length; i++) {}
	    }
	  }]);
	
	  return Obstacle;
	}();
	
	exports.default = Obstacle;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map