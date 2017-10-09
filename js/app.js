$(() => {

  console.log('loaded');

  //GRID NAVIGATION

  //Make digger icon appear in a random square on the grid after pressing PLAY button
  //generate random number between 1 - 25
  //make digger icon appear on the corresponding box in the array
  //Assign key bindings to arrow keys to make digger move around the grid

  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b53','b54','b55','b56','b57','b58','b59','b60','b61','b62','b63','b63'];
  const $li = $('.li');
  const digger = $('<img id ="digger" src="images/digger.png" alt="digger image" />'); //does it need te be .digger?
  const $playButton = $('#play-button');
  const gridWidth = 8; //UPDATE WITH BIGGER GRID
  const startSquare = 63; //UPDATE with new game?
  const $beginningSquare = $('#grid li:nth-child(' + startSquare + ')');
  const gameString = ('wwwwwwwwccccccccccccccccccccccccccccccccccccccccccccccccwwwwwwww');



  init();


  function init (){
    //start potioning
    loadBoard();
    $playButton.on('click', function() {
      $beginningSquare.append(digger);
    });
    moveDigger();

    //CREATE OBSTACLES
    function loadBoard (){


    }

    // MOVE DIGGER
    function moveDigger(){
      let n = startSquare;
      const $currentPosition = $('#grid li:nth-child(' + n + ')');

      $(document).keydown(function(e) {
        switch(e.which) {
          case 37: // left
            if (n >= 2 && n <= 64 && n !== 1 && n !== 9 && n !== 17 && n !== 25 && n !== 33 && n !== 41 && n !== 49 && n !== 57) {
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
console.log(n);
            break;
          case 38: // up
            if (n >= 9 && n <= 64) {
              (n -= 8);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
            console.log(n);
            break;
          case 39: // right
            if (n >= 1 && n <= 63 && n !== 8 && n !== 16 && n !== 24 && n !== 32 && n !== 40 && n !== 48 && n !== 56 && n !== 64) {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
            console.log(n);
            break;
          case 40: // down
            if (n >= 1 && n <= 56) {
              (n += 8);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
            console.log(n);
            break;
          default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
      });
    }





    //SPAWN RANDOM OBJECT
    function spawn(){

      objectPosition();
      function objectPosition(){
        const startValue = Math.floor((Math.random() * 25));
        const randomPosition = (grid[startValue]);
console.log(randomPosition);
      //add if functions to stop spawing in blocks
      }

    }
  }
});
