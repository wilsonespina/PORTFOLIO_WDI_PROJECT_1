# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) WDI PROJECT 1: JavaScript Game - 'Can You Diglett?'

**[https://can-you-diglett.herokuapp.com/](https://can-you-diglett.herokuapp.com/)**

![Game screenshot](images/README_files/screenshot_game.jpg)


## SUMMARY

My first project at GA was to build an interactive game using JavaScript and jQuery for `DOM` manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. 

### Concept

The overall look and feel of the app was that of a retro 8-bit arcade game with a simple colour scheme and mocked-up game controllers in the user interface. 

Being inspired by games I used to play when younger, the game itself consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and sound files to add an extra dimension to the user experience. 


### Programming and Technology Library:
* HTML5
* CSS3
* jQuery
* JavaScript

## CODING HIGHLIGHTS

### Creating the game board

The game board consists of a grid of different styled `<li>` elements which are loaded when the DOM loads. The type of `<li>` is determined by predefined `gameString` arrays eg:

```js
  const gameString1 =
  ['w','w','w','w','w','w','w','w','w','s','c','c','c','c','c','w',
  'w','c','c','c'...'g'...];
```
Each letter represents the following type of `<li>`:

* `w` - wall tile
* `s` - starting spot
* `c` - clear areas
* `g` - goal area

The function below iterates through a `for` loop and loads in a different `<li>` with specfic attributes according to what's in the gameString array:

```js
  function loadBoard(){
  for (let i = 0; i < gameString1.length; i++) {
    if (rubySquares1.indexOf(grid[i]) !== -1) {
      const $li1 = $(`<li id="${grid[i + 1]}" class="${gameString1[i]} a"></li>`);
      $('#grid').append($li1);
    } else {
      const $li2 = $(`<li id="${grid[i + 1]}" class="${gameString1[i]}"></li>`);
      $('#grid').append($li2);
    }
  }
}
  
```

By loading in the game board in this way, it means that fewer lines of code are needed in the `html`. It also allows for the game to be upscaled by only having to use a larger `gameString` array.

### Responsive game controller

When playing the game, the game controller at the bottom of the page reflects the user's key presses by turning either blue or orange, according to the 'key up' or 'key down' action.

```js
function arrows(){
  $(document).keydown(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 37) {
      $('#b4left').css('background-color', 'blue');
    }
    if(code === 38) {
      $('#b2up').css('background-color', 'blue');
    }
    if(code === 39) {
      $('#b6right').css('background-color', 'blue');
    }
    if(code === 40) {
      $('#b5down').css('background-color', 'blue');
    }
	...      
        
```

### Moving the character and block logic

The

Adding and removing classes accoording to the input

```js
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
            scoreboard();
            break;       
			...
```

### Lessons Learned
After my first 


## FEATURES BACKLOG

Having only spent a week on on this first project, there were a number of features I would have liked have added. Given more time, I'll owkron the following:

1. Adding additional levels to the game so you can increase the difficulty after each successive level.










