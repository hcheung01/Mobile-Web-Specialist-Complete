Lesson 5 notes-OPTIMIZATIONS

Facts: images take up 65% of every website

-Images should be changing base on the device  we are using. Best way to do it is
using the source set attribute on a image tag.
-With source set, the browser will choose which file it wants, and then only
download that one.
-It also does not make sense to show a big, wide image on a narrow phone. We can
also use a different crop of an image which is call, art direction. This is where
the new picture element comes in. It uses media queries to select which image to
use.

TABLES
-If there are more than a few columns, there is a high chance it will overflow the
the viewport on smaller screens, forcing horizontal scrolling.
-To fix this, there are several options but we will use the best 3 ways

1. Hidden Columns
  -essentially hides columns based on their on their importance as the viewports
  get smaller
  -use display:none to hide everything else in MEDIA QUERIES!!!!
  -use this technique with caution because if table is on a device with a narrow
  viewport, its just not there and cannot see it.

  EXAMPLE:
  @media screen and (max-width: 499px) {
    .gametime {
      display: none;
    }
  }

2. No More Tables
  -When viewport is narrow, the tables collapse and resembles a long list, as
  opposed to a table data.
  -The nice thing about this technique is all the data is visible no matter the
  viewport size.

  EXAMPLE:
  //FIRST MAKE SURE TO FORCE ALL SELECTED TO RENDER AS DISPLAY:BLOCK;
  @media screen and (max-width: 500px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }
  }

 //TO HIDE TABLE HEADER BY POSITIONING THE CONTENT WAY OFF SCREEN
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

 //TO MAKE ROOM FOR HEADER
  td {
    position: relative;
    padding-left: 50%;
  }

 //ADD ROW LABELS
  td:before {
    position: absolute;
    left: 6px;
    content: attr(data-th);  //TO PULL VALUES FROM THE DATA-TH OF EACH OF THE TD ELEMENTS
    font-weight: bold;
  }

3. Contained Tables
