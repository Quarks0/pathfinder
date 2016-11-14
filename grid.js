class Grid{
  constructor (length) {
    const gridLength = 2*length-1;
    this.grid = Array(gridLength).fill().map(() => Array(gridLength));
  }

  InitializeGrid(obstacleArray){
    
  }
}

export default Grid;
