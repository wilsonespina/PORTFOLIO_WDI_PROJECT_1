$(() => {

console.log('loaded');

  //GRID NAVIGATION

  //Make digger icon appear in a random square on the grid after pressing PLAY button
  //generate random number between 1 - 25
  //make digger icon appear on the corresponding box in the array
  //Assign key bindings to arrow keys to make digger move around the grid


  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24'];
  const $li = $('.li');
  const digger = $('<img id ="digger" src="images/digger.png" alt="digger image" />'); //does it need te be .digger?
  const $playButton = $('#play-button');


//start potioning
  startPosition();
  function startPosition(){
    const startValue = Math.floor((Math.random() * 25));
    const position = (grid[startValue]);
console.log(position);

    $playButton.on('click', function() {
      ('#b0').append(digger);

    });



  }



//SPAWN RANDOM OBJECT


});
