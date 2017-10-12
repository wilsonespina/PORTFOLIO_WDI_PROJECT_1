$(() => {
  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b53','b54','b55','b56','b57','b58','b59','b60','b61','b62','b63','b64','b65','b66','b67','b68','b69','b70','b71','b72','b73','b74','b75','b76','b77','b78','b79','b80','b81','b82','b83','b84','b85','b86','b87','b88','b89','b90','b91','b92','b93','b94','b95','b96','b97','b98','b99'];
  const rubySquares1 = ['b18','b19','b22','b27','b28','b30','b29','b30','b34','b38','b43','b46','b50','b51','b52','b53'];

  // gameString1 = 8 x 8 grid
  const gameString1 =
  ['w','w','w','w','w','w','w','w','w','s','c','c','c','c','c','w','w','c','c','c','w','w','c','w','w','c','w','c','c','c','c','w','w','c','c','c','c','w','c','w','w','c','w','c','w','w','c','w','w','c','c','c','c','c','g','w','w','w','w','w','w','w','w','w'];
  // ['w','w','w','w','w','w','w','w','w','c','c','c','c','c','w','w','w','c','c','c','w','w','w','w','w','c','c','w','w','w','w','w','w','c','c','w','c','c','c','w','w','c','c','c','c','c','g','w','w','c','s','c','c','c','g','w','w','w','w','w','w','w','w','w'];
  // ['w','w','w','w','w','w','w','w','w','c','c','c','c','c','c','w','w','c','c','c','c','c','c','w','w','c','c','c','c','c','c','w','w','c','c','c','c','c','c','w','w','c','c','c','c','c','c','w','w','c','s','c','c','c','g','w','w','w','w','w','w','w','w','w'];
  // gameString2 = 9 x 9 grid
  const gameString2 = ['c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c'];
  // gameString3 = 10 x 10 grid
  const gameString3 = ['c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c'];
  const $li = $('.li');
  const $ul = $('.ul');
  const $goal = $('.g');
  const digger = $('<img id ="digger" src="images/digger.png" alt="digger image" />');
  const block = $('<img id ="block" src="images/block.png" alt="block image" />');
  const ruby = $('<img id ="ruby" src="images/ruby.png" alt="ruby image" />');
  const $playButton = $('#play-button');
  const $resetButton = $('#reset-button');
  const gridWidth = Math.sqrt(gameString1.length); //UPDATE WITH BIGGER GRID
  const startSquare = 10; //UPDATE with new game?
  let $beginningSquare = null;
  let level = null; //change according to difficulty
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
        if (rubySquares1.indexOf(grid[i]) !== -1) {
          const $li1 = $(`<li id="${grid[i +1]}" class="${gameString1[i]} a"></li>`);
          $('#grid').append($li1);
        } else {
          const $li2 = $(`<li id="${grid[i + 1]}" class="${gameString1[i]}"></li>`);
          $('#grid').append($li2);
        }
      }
    }

    //PLAY button
    function play(){
      $playButton.one('click', function() {
        $beginningSquare = $('#grid li:nth-child(' + startSquare + ')');
        $beginningSquare.append(digger);
        spawnRuby();
        countdown();
      });
    }

    //SPAWN RANDOM OBJECT
    function spawnRuby(){
      const $clear = $('.a');
      const $scored = $('.ruby.g');
      $scored.removeClass('ruby');
      const $randomSpawn = Math.floor(Math.random() * ($($clear).length));
      const $randomLocation = $clear[$randomSpawn];
      $($randomLocation).addClass('ruby').append(ruby);
    }

    // MOVE DIGGER
    function moveDigger(){
      let n = startSquare;
      let score = 0;
      countdown();

      $(document).keydown(function(e) {
        switch(e.which) {
          case 37: // left
            if ($('#grid li:nth-child('+(n-1)+')').attr('class').includes('ruby') && $('#grid   li:nth-child('+(n-2)+')').attr('class').includes('w') || $('#grid li:nth-child('+(n-1)+')').attr('class').includes('w')) {
              break;
            }
            (n -= 1);
            //MOVE BLOCK
            if (($('#grid li:nth-child(' + n + ')').attr('class')).includes('ruby') && (($('#grid li:nth-child(' + (n-1) + ')').attr('class')).includes('c') || ($('#grid li:nth-child(' + (n-1) + ')').attr('class')).includes('g'))) {
              $('#grid li:nth-child(' + n + ') img').remove();
              const $remove = $('#grid li:nth-child(' + n + ')');
              $($remove).removeClass('ruby c');
              $('#grid li:nth-child(' + (n-1) + ')').addClass('ruby').append(ruby);
            }
            //MOVE DIGGER
            $('#grid li:nth-child(' + n + ')').append(digger);
            $('#grid li:nth-child(' + (n+1) + ')').addClass('c');
            scoring();
            // scoreboard();
            // countdown();
            break;

          case 38: // up
            if ($('#grid li:nth-child('+(n-gridWidth)+')').attr('class').includes('ruby') && $('#grid       li:nth-child('+(n-(2*gridWidth))+')').attr('class').includes('w') || $('#grid li:nth-child('+(n-gridWidth)+')').attr('class').includes('w')) {
              break;
            }
            (n -= gridWidth);
            if (($('#grid li:nth-child(' + n + ')').attr('class')).includes('ruby') && (($('#grid li:nth-child(' + (n-(gridWidth)) + ')').attr('class')).includes('c') || ($('#grid li:nth-child(' + (n-(gridWidth)) + ')').attr('class')).includes('g'))) {
              $('#grid li:nth-child(' + n + ') img').remove();
              const $remove = $('#grid li:nth-child(' + n + ')');
              $($remove).removeClass('ruby c');
              $('#grid li:nth-child(' + (n-(gridWidth)) + ')').addClass('ruby').append(ruby);
            }
            $('#grid li:nth-child(' + n + ')').append(digger);
            $('#grid li:nth-child(' + (n+gridWidth) + ')').addClass('c');
            scoring();
            scoreboard();
            break;

          case 39: // right
            if ($('#grid li:nth-child('+(n+1)+')').attr('class').includes('ruby') && $('#grid       li:nth-child('+(n+2)+')').attr('class').includes('w') || $('#grid li:nth-child('+(n+1)+')').attr('class').includes('w')) {
              break;
            }
            (n += 1);
            if (($('#grid li:nth-child(' + n + ')').attr('class')).includes('ruby') && (($('#grid li:nth-child(' + (n+1) + ')').attr('class')).includes('c') || ($('#grid li:nth-child(' + (n+1) + ')').attr('class')).includes('g'))) {
              const $remove = $('#grid li:nth-child(' + n + ')');
              $($remove).removeClass('ruby c');
              $('#grid li:nth-child(' + (n+1) + ')').addClass('ruby').append(ruby);
            }
            $('#grid li:nth-child(' + n + ')').append(digger);
            $('#grid li:nth-child(' + (n-1) + ')').addClass('c');
            scoring();
            scoreboard();
            break;

          case 40: // down
            if ($('#grid li:nth-child('+(n+gridWidth)+')').attr('class').includes('ruby') && $('#grid       li:nth-child('+(n+(2*gridWidth))+')').attr('class').includes('w') || $('#grid li:nth-child('+(n+gridWidth)+')').attr('class').includes('w')) {
              break;
            }
            (n += gridWidth);
            if (($('#grid li:nth-child(' + n + ')').attr('class')).includes('ruby') && (($('#grid li:nth-child(' + (n+(gridWidth)) + ')').attr('class')).includes('c') || ($('#grid li:nth-child(' + (n+(gridWidth)) + ')').attr('class')).includes('g'))) {
              $('#grid li:nth-child(' + n + ') img').remove();
              const $remove = $('#grid li:nth-child(' + n + ')');
              $($remove).removeClass('ruby c');
              $('#grid li:nth-child(' + (n+gridWidth) + ')').addClass('ruby').append(ruby);
            }
            $('#grid li:nth-child(' + n + ')').append(digger);
            $('#grid li:nth-child(' + (n-gridWidth) + ')').addClass('c');
            scoring();
            scoreboard();
            break;
          default: return;
        }
        e.preventDefault(); // prevent the default action

        // SCORE
        function scoring(){
          const arrayLis = $('.g');
          for (var i = 0; i < arrayLis.length; i++) {
            const classesOfLi = $(arrayLis[i]).attr('class');
            if (classesOfLi.includes('ruby')) {
              score+=10;
              spawnRuby();
            }
          }
        }

      });



      //SCOREBOARD
      function countdown(){
        const $timer = $('#timer');
        let timeleft = 30;

        const downloadTimer = setInterval(function(){
          $timer.value = 60 - --timeleft;
          if(timeleft <= 0)
            clearInterval(downloadTimer);
          $timer.text(timeleft);
          console.log(score);
          if (timeleft === 0) alert(
            `GAME OVER
You Scored ${score} points!`);
          // console.log(timeleft);
        },1000);
      }
      function scoreboard(){
        if (score >= 0) $score.html(score);
      }
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
