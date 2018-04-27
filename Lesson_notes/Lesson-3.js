LESSON 3 - BUILDING UP


MEDIA QUERY

Two best ways to apply Media Query

1. Adding Media Query with a linked stylesheet (usually many small files but many http requests)

add a new style sheet first
<link rel="stylesheet" href="styles.css">

adding a new linked CSS file with a media attribute, and set value to screen and min width 500 pixels so that its only applied when the screen is
over 500 pixels
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">

Example above for media query that applies only when the view port is wider than 500 pixels

2. Embed with an @media tag (usually for fewer big http requests but files tend to be bigger)

EXAMPLE:
@media screen and (min-width: 500px) {
  body { background-color: green; }
}

MORE EXAMPLES:

@media screen and (min-width: 0px) and (max-width: 400px) {
  background-color: red;
  }

@media screen and (min-width: 401px) and (max-width: 599px) {
  background-color: green;
  }

@media screen and (min-width: 600px) {
  background-color: blue;
  }


IMPORTANT TIP:
The media queries used most often is min-width and max-width for responsive web design
Dont use min-device-width or max-device-width.


BREAKPOINTS:
Changing/reorganizing the layout for certain viewport size

IMPORTANT TIP FOR BREAKPOINTS:
-focus on content for picking BREAKPOINTS
-start on the desktop browser with the viewport set as small as I can get it and also have chrome devtools open because it shows the screen width
 in the upper right-hand corner as I resize the window.
-Slowly start resizing the window, looking to see when the content tells me that it wants a breakpoint.

EXAMPLE: 2 breakpoints link with 2 style sheets

<link ref="stylesheet" media="screen and (min-width: 550px)" href="weather-medium.css">
<link ref="stylesheet" media="screen and (min-width: 700px)" href="weather-large.css">

COMPLEX MEDIA QUERIES

@media screen and (min-width: 500px and (max-width: 600px) {
  //.........
}

FLEXBOX

display: flex
elements within the viewport will be align in a row instead of column
when resizing to smaller viewport elements will automatically evenly shrink and stay within the viewport or larger container

flex-wrap: wrap
when resizing to smaller viewport, elements will reorganize to next row automatically

flex item: order
as the viewport changes size, the order of the elements starts to change. To set the order you just need to add an order attribute
to each element.

EXAMPLE:
@media screen and (min-width: 700px) {
  .dark_blue { order: 4; }
  .light_blue { order: 5; }
  .green { order: 2; }
  .orange { order: 3; }
  .red { order: 1; }
}

EXAMPLE 2:
header { width: 100%; order: 1; }
.red { width: 50%; order: 2; }
.orange { width: 50%; order: 3; }
footer { width: 100%; order: 4; }
.light_blue { width: 20%; order: 5; }
.dark_blue { width: 60%; order: 6; }
.green { width: 20%; order: 7; }
