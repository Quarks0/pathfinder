import Obstacle from './obstacle.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 600;
  canvas.height = 600;

  const stage = new createjs.Stage(canvas);

  let length = 2;

  var [startPoint, endPoint] = initializeGrid(length, stage);
  let obs1 = new Obstacle(stage,"bsq", [150,150]);
  let obs2 = new Obstacle(stage,"twtri", [400,150]);
  let obs3 = new Obstacle(stage,"thtri", [150,400]);
  let obs4 = new Obstacle(stage,"wsq", [400,400]);
  let obs5 = new Obstacle(stage, "otri", [100,100]);
  var moves = [[startPoint.x, startPoint.y]];
  var endPoints = [endPoint.x, endPoint.y];

  stage.update();

  document.onkeydown = keyPressed;

  function initializeGrid(length){
    drawGrid(length);
    return [drawStart(),drawEnd()];
  }

  function drawGrid(length){
    for (var i = 0; i <= length; i++) {
      let line = new createjs.Shape();
      stage.addChild(line);
      line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
      let shift = 500*(i/length);
      line.graphics.moveTo(shift+50,50);
      line.graphics.lineTo(shift+50,550);

      line.graphics.endStroke;
    }
    for (var i = 0; i <= length; i++) {
      let line = new createjs.Shape();
      stage.addChild(line);
      line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
      let shift = 500*(i/length);
      line.graphics.moveTo(50,50+shift);
      line.graphics.lineTo(550,50+shift);

      line.graphics.endStroke;
    }
  }

  function drawStart(){
    let startCircle = new createjs.Shape();
    stage.addChild(startCircle);
    startCircle.graphics.beginFill("white").drawCircle(0,0,25);
    startCircle.x = 50;
    startCircle.y = 550;
    stage.update();
    let pos = [startCircle.x, startCircle.y];
    return startCircle;
  }

  function drawEnd(){
    let endCircle = new createjs.Shape();
    stage.addChild(endCircle);
    endCircle.graphics.beginFill("green").drawCircle(0,0,20);
    endCircle.x = 550;
    endCircle.y = 50;
    return endCircle;
  }

  function keyPressed(event){
    let newPos;
    switch (event.keyCode) {
      case (38):
      case (87):
        newPos = [lastMove()[0], lastMove()[1]-500/length];
        if(validMove(newPos)){
          if (moves.length > 1 && equalArrays(newPos,moves[moves.length-2])) {
            undoMove();
          }else {
            drawPath(newPos);
          }
          endPath();
        }
        break;
      case (40):
      case (83):
        newPos = [lastMove()[0], lastMove()[1]+500/length];
        if(validMove(newPos)){
          if (moves.length > 1 && equalArrays(newPos,moves[moves.length-2])) {
            undoMove();
          }else {
            drawPath(newPos);
          }
          endPath();
        }
        break;
      case (37):
      case (65):
        newPos = [lastMove()[0]-500/length, lastMove()[1]];
        if(validMove(newPos)){
          if (moves.length > 1 && equalArrays(newPos,moves[moves.length-2])) {
            undoMove();
          }else {
            drawPath(newPos);
          }
          endPath();
        }
        break;
      case (39):
      case (68):
        newPos = [lastMove()[0]+500/length, lastMove()[1]];
        if(validMove(newPos)){
          if (moves.length > 1 && equalArrays(newPos,moves[moves.length-2])) {
            undoMove();
          }else {
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
    stage.removeChildAt(stage.children.length-1);
    moves.pop();
    stage.update();
  }

  function drawPath(newPos){
    let line = new createjs.Shape();
    stage.addChild(line);
    line.graphics.setStrokeStyle(20, 'round').beginStroke("white");
    line.graphics.moveTo(lastMove()[0],lastMove()[1]);
    line.graphics.lineTo(newPos[0],newPos[1]);
    moves.push(newPos);
    line.graphics.endStroke;
    stage.update();
  }

  function validMove(pos){
    if (inBounds(pos) || equalArrays(pos,moves[moves.length-2])){
      for (var i = 0; i < moves.length-2; i++) {
        if (equalArrays(moves[i],pos)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  function inBounds(pos){
    return 50 <= pos[0] && 50 <= pos[1] && pos[0] <= 550 && pos[1] <= 550;
  }

  function equalArrays(arr1, arr2){
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

  function lastMove(){
    return moves[moves.length-1];
  }

  function endPath(){
    if (equalArrays(lastMove(), endPoints)) {
      //insert win logic
      console.log("u win");
      return true;
    }else {
      return false;
    }
  }
});
