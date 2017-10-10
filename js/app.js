$(() => {

  console.log('loaded');

  //GRID NAVIGATION

  //Make digger icon appear in a random square on the grid after pressing PLAY button
  //generate random number between 1 - 25
  //make digger icon appear on the corresponding box in the array
  //Assign key bindings to arrow keys to make digger move around the grid

  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b53','b54','b55','b56','b57','b58','b59','b60','b61','b62','b63','b63'];
  const gameString1 = ['w','w','w','w','w','w','w','w','w','c','c','c','c','c','c','w','w','c','c','c','c','c','c','w','w','c','c','c','w','c','w','w','w','c','c','c','w','c','c','w','w','c','c','c','c','c','c','w','w','c','c','c','c','c','w','w','w','w','w','w','w','w','w','w'];
  const $li = $('.li');
  const $ul = $('.ul');
  const digger = $('<img id ="digger" src="images/digger.png" alt="digger image" />');
  const block = $('<img id ="block" src="images/block.png" alt="block image" />');
  const $playButton = $('#play-button');
  const gridWidth = 8; //UPDATE WITH BIGGER GRID
  const startSquare = 42; //UPDATE with new game?
  const $beginningSquare = $('#grid li:nth-child(' + startSquare + ')');
  let score = 0;
  let timer = 60;
  const $score = $('#score');
  const $timer = $('#timer');

  init();

  function init (){
    loadBoard();
    $playButton.on('click', function() {
      $beginningSquare.append(digger);
    });
    reset();
    moveDigger();
    spawn();

    //CREATE BOARD
    function loadBoard(){
      // const gameString = [];
      for (let i = 0; i < grid.length; i++) {
        $('#grid li:nth-child(' + i + ')').html(gameString1[i-1]);
      }
      for (let i = 0; i < grid.length; i++) {
        (gameString1[i] === 'w');
        $('#grid li:nth-child(' + i + ')').append(block);
      }
    }


    //CREATE WALLS
    // function walls(){
    //   for (let i = 0; i < grid.length; i++) {
    //     if ($li.text() == gameString1[i]) {
    //       console.log(gameString1[i]);
    //     // $('#grid li:nth-child(' + i + ')').append(block);
    //     } else {
    //       return;
    //     }
    //   }
    // }2


    // MOVE DIGGER
    function moveDigger(){
      let n = startSquare;
      const $currentPosition = $('#grid li:nth-child(' + n + ')');

      $(document).keydown(function(e) {
        switch(e.which) {
          case 37: // left
            if (n >= 2 && n <= 64 && n !== 1 && n !== 9 && n !== 17 && n !== 25 && n !== 33 && n !== 41 && n !== 49 && n !== 57 && gameString1[n-2] !== 'w'){
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
console.log(n);
            } else {
              return;
            }
            break;
          case 38: // up
            if (n >= 9 && n <= 64 && gameString1[n-9] !== 'w') {
              (n -= 8);
              $('#grid li:nth-child(' + n + ')').append(digger);
console.log(n);
            } else {
              return;
            }
            break;
          case 39: // right
            if (n >= 1 && n <= 63 && n !== 8 && n !== 16 && n !== 24 && n !== 32 && n !== 40 && n !== 48 && n !== 56 && n !== 64 && gameString1[n] !== 'w') {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
console.log(n);
            } else {
              return;
            }
            break;
          case 40: // down
            if (n >= 1 && n <= 56 && gameString1[n+7] !== 'w') {
              (n += 8);
              $('#grid li:nth-child(' + n + ')').append(digger);
console.log(n);
            } else {
              return;
            }
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

        // for (var i = 0; i < array.length; i++) {
        //   array[i]
        // }
        const startValue = Math.floor((Math.random() * 64));
        const randomPosition = (grid[startValue]);
console.log(randomPosition);
      //add if functions to stop spawing in blocks
      }
    }

    // SCOREBOARD
    function scoreboard(){
    }

    // RESET GAME
    function reset() {
      score = 0;
      timer = 60;

      $score.html(score);
      $timer.html(timer);
    }

  }
});
