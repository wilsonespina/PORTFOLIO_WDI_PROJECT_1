$(() => {

console.log('loaded');

  //GRID NAVIGATION

  //Make digger icon appear in a random square on the grid after pressing PLAY button
  //generate random number between 1 - 25
  //make digger icon appear on the corresponding box in the array
  //Assign key bindings to arrow keys to make digger move around the grid


  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24'];
console.log(grid[5]);

  startPosition();
  function startPosition(){
    const startValue = Math.floor((Math.random() * 25));
console.log(startValue);
    
  }

//random generator


//SPAWN RANDOM OBJECT


});
