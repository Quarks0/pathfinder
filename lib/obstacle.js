class Obstacle{
  constructor(type, pos,length){
    this.type = type;
    this.pos = pos;
    this.length = length;

    this.render=this.render.bind(this);
  }

  validated(){

    return false;
  }

  render(){
    var obs = new createjs.Shape();
    this.stage.addChild(obs);
    let [x,y] = this.pos;
    switch (this.type) {
      case "bsq":
        obs.graphics.beginFill("black").drawRoundRect(0,0,50,50,10);
        obs.x = x;
        obs.y = y;
        break;
      case "wsq":
        obs.graphics.beginFill("white").drawRoundRect(0,0,50,50,10);
        obs.x = x;
        obs.y = y;
      break;
        break;
      case "otri":
        obs.graphics.beginFill("orange").moveTo(x, y).lineTo(x+20,y+20).lineTo(x-20,y+20).closePath();
      break;
      case "twtri":
        obs.graphics.beginFill("orange").moveTo(x-20, y).lineTo(x,y+20).lineTo(x-40,y+20).closePath();
        obs.graphics.beginFill("orange").moveTo(x+20, y).lineTo(x,y+20).lineTo(x+40,y+20).closePath();
      break;
      case "thtri":
        obs.graphics.beginFill("orange").moveTo(x-40, y).lineTo(x-20,y+20).lineTo(x-60,y+20).closePath();
        obs.graphics.beginFill("orange").moveTo(x, y).lineTo(x+20,y+20).lineTo(x-20,y+20).closePath();
        obs.graphics.beginFill("orange").moveTo(x+40, y).lineTo(x+20,y+20).lineTo(x+60,y+20).closePath();
      break;
      case "gcir":
        obs.graphics.beginFill("green").drawCircle(x,y,20);
      break;
      default:
        break;
    }
    this.stage.update();
  }

  within(path){
    for (var i = 0; i < path.length; i++) {

    }
  }
}

export default Obstacle;
