import Obstacle from './obstacle.js';

class Grid{
  constructor(level, stage){
    this.level = level;
    this.stage = stage;
    this.length = LEVELS[level-1].length;

    let [startPoint, endPoint] = this.initializeGrid();
    this.stage.update();
    this.moves = [[startPoint.x, startPoint.y]];
    this.endPos = [endPoint.x, endPoint.y];

    document.onkeydown = this.keyPressed;
    this.lastMove = this.lastMove.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

initializeGrid(){
  this.drawGrid();
  return [this.drawStart(),this.drawEnd()];
}

drawGrid(){
  for (var i = 0; i <= this.length; i++) {
    let line = new createjs.Shape();
    this.stage.addChild(line);
    line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
    let shift = 500*(i/this.length);
    line.graphics.moveTo(shift+50,50);
    line.graphics.lineTo(shift+50,550);

    line.graphics.endStroke;
  }
  for (var i = 0; i <= this.length; i++) {
    let line = new createjs.Shape();
    this.stage.addChild(line);
    line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
    let shift = 500*(i/this.length);
    line.graphics.moveTo(50,50+shift);
    line.graphics.lineTo(550,50+shift);

    line.graphics.endStroke;
  }
}

drawStart(){
  let startCircle = new createjs.Shape();
  this.stage.addChild(startCircle);
  startCircle.graphics.beginFill("white").drawCircle(0,0,25);
  startCircle.x = 50;
  startCircle.y = 550;
  this.stage.update();
  let pos = [startCircle.x, startCircle.y];
  return startCircle;
}

drawEnd(){
  let endCircle = new createjs.Shape();
  this.stage.addChild(endCircle);
  endCircle.graphics.beginFill("green").drawCircle(0,0,20);
  endCircle.x = 550;
  endCircle.y = 50;
  return endCircle;
}

keyPressed(event){
  // doesn't know what lastMove is even at the beginning of this function
  // why
  let newPos;
  switch (event.keyCode) {
    case (38):
    case (87):
      newPos = [this.lastMove()[0], this.lastMove()[1]-500/this.length];
      if(this.validMove(newPos)){
        if (this.moves.length > 1 && this.equalArrays(newPos,this.moves[this.moves.length-2])) {
          this.undoMove();
        }else {
          this.drawPath(newPos);
        }
        this.endPath();
      }
      break;
    case (40):
    case (83):
      newPos = [this.lastMove()[0], this.lastMove()[1]+500/length];
      if(this.validMove(newPos)){
        if (this.moves.length > 1 && this.equalArrays(newPos,this.moves[this.moves.length-2])) {
          this.undoMove();
        }else {
          this.drawPath(newPos);
        }
        this.endPath();
      }
      break;
    case (37):
    case (65):
      newPos = [this.lastMove()[0]-500/length, this.lastMove()[1]];
      if(this.validMove(newPos)){
        if (this.moves.length > 1 && this.equalArrays(newPos,this.moves[this.moves.length-2])) {
          this.undoMove();
        }else {
          this.drawPath(newPos);
        }
        this.endPath();
      }
      break;
    case (39):
    case (68):
      newPos = [this.lastMove()[0]+500/length, this.lastMove()[1]];
      if(this.validMove(newPos)){
        if (this.moves.length > 1 && this.equalArrays(newPos,this.moves[this.moves.length-2])) {
          this.undoMove();
        }else {
          this.drawPath(newPos);
        }
        this.endPath();
      }
      break;
    default:
      break;
  }
}

undoMove() {
  this.stage.removeChildAt(this.stage.children.length-1);
  this.moves.pop();
  this.stage.update();
}

drawPath(newPos){
  let line = new createjs.Shape();
  this.stage.addChild(line);
  line.graphics.setStrokeStyle(20, 'round').beginStroke("white");
  line.graphics.moveTo(this.lastMove()[0],this.lastMove()[1]);
  line.graphics.lineTo(newPos[0],newPos[1]);
  this.moves.push(newPos);
  line.graphics.endStroke;
  this.stage.update();
}

validMove(pos){
  if (this.inBounds(pos) || this.equalArrays(pos,this.moves[this.moves.length-2])){
    for (var i = 0; i < this.moves.length-2; i++) {
      if (this.equalArrays(this.moves[i],pos)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

inBounds(pos){
  return 50 <= pos[0] && 50 <= pos[1] && pos[0] <= 550 && pos[1] <= 550;
}

equalArrays(arr1, arr2){
  if (arr1.length === arr2.length){
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

lastMove(){
  return this.moves[this.moves.length-1];
}

endPath(){
  if (this.equalArrays(lastMove(), endPos)) {
    switch (expression) {
      case expression:

        break;
      default:

    }
  }
  return false;
}
}

export default Grid;
