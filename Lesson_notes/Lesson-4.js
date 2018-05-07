LESSON 4: COMMON RESPONSIVE PATTERNS

4 common patterns used by responsive web pages
  -mostly fluid
  -column drop
  -layout shifter
  -off canvas

Some cases, a page may use a combination of PATTERNS

1. COLUMN DROP
At its narrowest viewport each element simply stacks vertically, one on top of the other.
As things get wider the elements expand, until the first break point is hit. At the first
breakpoint instead of having all the elements stacked, two elements are now side by side.
------------------------------------------------------------------------------------------------------------------------------------------------
OFF CANVAS
Off Canvas places less frequently used content, for example navigation or app menus, off screen, only showing them if the screen is large enough

IMPORTANT NOTES: the JavaScript thats shown tells us that we are adding an event listener to do something when the user clicks the (hamburger) menu button. The event listener tells the drawer to toggle the class open which means that if the drawer does not have the class open then it will add it and if it does have the class open it will remove it. The rule for nav.open tells the nav to translate back into place to position 0,0. This is when it is open. Without this class it is translated off screen at (-300px, 0).


1. In order to make sure the elements take up the full viewport width, set the width on HTML, body and main to 100%
EXAMPLE:

html, body, main {
  height: 100%;
  width: 100%;
}

2. Set the EVENT LISTENER IN JAVASCRIPT to do something when the user clicks the hamburger menu button:
EXAMPLE:

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

3. Set the styles for the off-canvas nav element
EXAMPLE:

nav {
  width: 300px;
  position: absolute;
  /* This trasform moves the drawer off canvas. */
  -webkit-transform: translate(-300px, 0);
  transform: translate(-300px, 0);
  /* Optionally, we animate the drawer. */
  transition: transform 0.3s ease;
}

4. When you want it to appear by adding an open class that resets the transform

nav.open {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

5. Add a break point at 600 pixels that repositions everything back to its normal spot
EXAMPLE:

@media screen and (min-width: 600px) {
  nav {
    position: relative;
    transform: translate(0, 0);
  }
  body {
    display: flex;
    flex-flow: row nowrap;
  }
  main {
    width: auto;
    flex-grow: 1;
  }
}
