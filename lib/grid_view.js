class GridView {
  constructor(game,context){
    this.context = context;
    this.game = game;
  }

  bindKeys(){
  }

  start(){
    this.bindKeys();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time){
    const dTime = time - this.lastTime;

    this.game.step(dTime);
    this.game.draw(this.context);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

GridView.BINDINGS = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
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
