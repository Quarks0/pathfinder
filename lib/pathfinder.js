import Grid from './grid';
import GridView from './grid_view';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 600;
  canvas.height = 600;

  const stage = new createjs.Stage(canvas);

  // const circle = new createjs.Shape();
  // circle.graphics.beginFill("red").drawCircle(0, 0, 40);
  // circle.x = circle.y = 200;
  // stage.addChild(circle);
  //Update stage will render next frame

  createjs.Ticker.setFPS(30);

  createjs.Ticker.addEventListener("click", stage);
  createjs.Ticker.addEventListener("click", tick);

  let length = 2;


  stage.update();

  function tick(event){
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

function drawGrid(length,stage){
  //Draw verticals
  for (var i = 0; i <= length; i++) {
    let line = new createjs.Shape();
    stage.addChild(line);
    line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
    let shift = 500*(i/length);
    line.graphics.moveTo(shift+50,50);
    line.graphics.lineTo(shift+50,550);

    line.graphics.endStroke;
  }
  //Draw horizontals
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

function drawStart(stage){
  let startCircle = new createjs.Shape();
  stage.addChild(startCircle);
  startCircle.graphics.beginFill("white").drawCircle(50,550,25);
}

function drawEnd(stage){
  let endCircle = new createjs.Shape();
  stage.addChild(endCircle);
  endCircle.graphics.beginFill("green").drawCircle(0,0,10);
}

function drawPath() {

}
