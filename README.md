# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) WDI PROJECT 1: JavaScript Game - 'Can You Diglett?'

**[https://can-you-diglett.herokuapp.com/](https://can-you-diglett.herokuapp.com/)**

![Game screenshot](images/README_files/screenshot_game.jpg)


## SUMMARY

My first project at GA was to build an interactive game using JavaScript and jQuery for `DOM` manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. 

### Concept

The overall look and feel of the app reflected a retro 8-bit arcade game. I used a simple colour scheme and mocked-up game controllers in the user interface. 

Being inspired by games I used to play when younger, the game consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and retro sound files to add an extra dimension to the user experience. 


### Programming and Technology Library:

* HTML5
* CSS3
* jQuery
* JavaScript

## CODING HIGHLIGHTS

### Creating the game board

The game board consists of a grid of different styled `<li>` elements which appear when the DOM loads. The type of `<li>` is determined by a predefined `gameString` array eg:

```js
  const gameString1 =
  ['w','w','w','w','w','w','w','w','w','s','c','c','c','c','c','w',
  'w','c','c','c'...'g'...];
```
Each letter represents a different type of `<li>` style or functionality within the game:

* `w` - wall tile
* `s` - starting spot
* `c` - clear areas
* `g` - goal area

The function below iterates through a `for` loop and loads in a different `<li>` elements with specific attributes according to what's in the `gameString` array:

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

By loading in the game board in this way, it means that fewer lines of code are needed in the `html`. It also allows for the game to be upscaled by only having to substitute a larger `gameString` array.

### Responsive game controller

When playing the game, the 'controller' at the bottom of the page reflects the user's key presses by turning either blue or orange, according to the 'key up' or 'key down' action. This is handled by key bindings where the event or 'e' is passed in as an argument into the function below for the keydown press. Here, an event listener is looking for the keyCode of the arrow keys and, using jQuery, specific `div`s are being found and are changed to blue. The button `div`s are changed back to orange on the keyup action further down in the code.

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

When navigating around the game board, the character moves from one square to the next after each key press. What's happening is different classes are being assigned to adjacent tiles and being removed from the starting tile after each key press. When certain classes are added, the `css` changes the styling and different background images are rendered. This gives the impression that the character has moved from one block to the next.

To give the impression that the walls are solid and the player cannot pass through them, collision logic was needed. The code below uses `if` statements and boolean logic within a `switch case` block to determine how the player moves around the board. Here, the `class` attributes are being assessed and are either being removed or added according to the game logic. When moving around the gird, the 'n' number (or current position) is being altered if the statements are satisfied.

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
			...
```

### Lessons Learned
After my first JavaScript project, there were many lessons that I could take away from the experience, including:

1. It's important to plan out and wireframe your design before starting to write any CSS. I found that I rushed into the project without having a full understanding of how I wanted it be laid out. The idea to give it a retro theme came quite last minute and that helped guide the rest of the styling process.
2. Going through this process for the first time, I gained an appreciation for the concept of having a minimum viable product (MVP). Through understanding what was the minimum level needed to achieve, it was easier to 'draw a line' before working on additional nice-to-have features. Although this meant having to park some features for a later date, it meant that I had a viable product to submit on time.
3. Having had to use several online tools to research JavaScript methods, it was an eye opener in seeing what was actually possible with the language. Prior to making the game, I was unaware of methods such as `.append` and `.includes` however I feel more confident in being able to search for new methods online through Google and [stackoverflow.com 
](https://stackoverflow.com/)

## FEATURES BACKLOG

Having only spent a week on this first project, there were a number of features I would have liked have added. Given more time, I would have liked to add the following:

1. Adding additional levels to the game so you can increase the difficulty after each successive level.
2. Storing the high-score so a player can see other people's scores from previous efforts.
3. If a player moves the object to a position where it's impossible to move, the game would deduct points and you would reset in a new position.
4. Adding the ability to stop the music by binding it to a keypress.










