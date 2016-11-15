class Grid{
  constructor(length, stage){
    this.length = length;
    this.stage = stage;
  }

  drawGrid(){
    for (var i = 0; i <= this.length; i++) {
      const line = new createjs.Shape();
      this.stage.addChild(line);
      line.graphics.setStrokeStyle(20, 'round').beginStroke("black");
      const shift = 500*(i/this.length);
      line.graphics.moveTo(shift+50,50);
      line.graphics.lineTo(shift+50,550);

      line.graphics.endStroke;
    }
  }
}

export default Grid;
