$(() => {
  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b53','b54','b55','b56','b57','b58','b59','b60','b61','b62','b63','b64','b65','b66','b67','b68','b69','b70','b71','b72','b73','b74','b75','b76','b77','b78','b79','b80','b81','b82','b83','b84','b85','b86','b87','b88','b89','b90','b91','b92','b93','b94','b95','b96','b97','b98','b99'];
// gameString1 = 8 x 8 grid
  const gameString1 =
  // ['c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c'];
  ['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','g','g','w','w','c','c','c','c','g','g','w','w','w','w','w','w','g','g'];
  // ['w','w','w','w','w','w','w','w','w','c','w','w','c','w','c','w','w','c','c','c','c','c','c','w','w','c','w','c','w','c','w','w','w','w','c','c','w','c','c','w','w','w','c','w','c','c','g','g','w','c','c','c','c','c','g','g','w','w','w','w','w','w','g','g'];

// gameString2 = 9 x 9 grid
  const gameString2 = ['c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c'];
// gameString3 = 10 x 10 grid
  const gameString3 = ['c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c'];
  const $li = $('.li');
  const $ul = $('.ul');
  const digger = $('<img id ="digger" src="images/digger.png" alt="digger image" />');
  const block = $('<img id ="block" src="images/block.png" alt="block image" />');
  const ruby = $('<img id ="ruby" src="images/ruby.png" alt="ruby image" />');
  const $playButton = $('#play-button');
  const $resetButton = $('#reset-button');
  const gridWidth = Math.sqrt(gameString1.length); //UPDATE WITH BIGGER GRID
  const startSquare = 51; //UPDATE with new game?
  let $beginningSquare = null;
  let level = null; //change according to difficulty
  let score1 = 0;
  let timer = 60;
  const $score = $('#score');
  const $timer = $('#timer');

  init();

  function init (){ //initiates all subsequent functions
    loadBoard();
    moveDigger();
    play();
    reset();


    //CREATE BOARD
    function loadBoard(){
      for (let i = 0; i < gameString1.length; i++) {
        const $li = $(`<li id="${grid[i + 1]}" class="${gameString1[i]}"></li>`);
        $('#grid').append($li);
      }
    }

    //PLAY button
    function play(){
      $playButton.one('click', function() {
        $beginningSquare = $('#grid li:nth-child(' + startSquare + ')');
        $beginningSquare.append(digger);
        countdown();
        spawn();
      });
    }


    // MOVE DIGGER
    function moveDigger(){
      let n = startSquare;
      let score = 0;

      function ruby(){
        if (($('#grid li:nth-child(' + n + ')').attr('class')).includes('ruby')) {
          $('#grid li:nth-child(' + n + ') img').remove();
          const $remove = $('#grid li:nth-child(' + n + ')');
          $($remove).removeClass('ruby');
          spawn();
          score++;
          $('#grid li:nth-child(' + n + ')').append(digger);
        }
      }

      $(document).keydown(function(e) {
        switch(e.which) {
          case 37: // left
            if (n >= 2 && n <= grid.length && n !== 1 && n !== 9 && n !== 17 && n !== 25 && n !== 33 && n !== 41 && n !== 49 && n !== 57 && gameString1[n-2] !== 'w'){
  //Add for loop for if cases to make game expandable for levels 2 & 3!!!!
              (n -= 1);
              ruby();
              $('#grid li:nth-child(' + n + ')').append(digger);
              scoreboard();
            } else {
              return;
            }
            break;

          case 38: // up
            if (n >= (gridWidth + 1) && n <= grid.length && gameString1[n-(gridWidth+1)] !== 'w') {
              (n -= gridWidth);
              ruby();
              $('#grid li:nth-child(' + n + ')').append(digger);
              scoreboard();
            } else {
              return;
            }
            break;

          case 39: // right
            if (n >= 1 && n <= (grid.length-1) && n !== 8 && n !== 16 && n !== 24 && n !== 32 && n !== 40 && n !== 48 && n !== 56 && n !== 64 && gameString1[n] !== 'w') {
    //Add for loop for if cases to make game expandable for levels 2 & 3!!!!
              (n += 1);
              ruby();
              $('#grid li:nth-child(' + n + ')').append(digger);
              scoreboard();
            } else {
              return;
            }
            break;

          case 40: // down
            if (n >= 1 && n <= (grid.length-gridWidth) && gameString1[n+7] !== 'w') {
              (n += gridWidth);
              ruby();
              $('#grid li:nth-child(' + n + ')').append(digger);
              scoreboard();
            } else {
              return;
            }
            break;
          default: return; // exit this handler for other keys

        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
console.log(n);
      });

      //SCOREBOARD
      function scoreboard(){
        if (score >= 0) $score.html(score);
      }
    }

    //SPAWN RANDOM OBJECT
    function spawn(){
      const $clear = $('.c');
      const $randomSpawn = Math.floor(Math.random() * ($($clear).length));
      const $randomLocation = $clear[$randomSpawn];
      $($randomLocation).addClass('ruby').append(ruby);
    }

    // TIMER
    function countdown(){
      const $timer = $('#timer');
      let timeleft = 20;

      const downloadTimer = setInterval(function(){
        $timer.value = 60 - --timeleft;
        if(timeleft <= 0)
          clearInterval(downloadTimer);
        $timer.text(timeleft);
        // console.log(timeleft);
      },1000);
    }

    // RESET GAME
    function reset() {
      // const score = 0;
      // const timer = 60;
      $resetButton.on('click', function(){
        location.reload();
        // $score.html(score);
        // $timer.html(timer);
      });
    }
  }
});
