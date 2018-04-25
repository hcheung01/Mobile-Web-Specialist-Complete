Mobile Web Specialist Important Notes

Lesson 2: STARTING SMALL

1. Setting the Viewport:
Which mean 1:1 ratio Hardware pixel to DIP

EXAMPLE:
<meta name=“viewport” content=“width=device-width, initial-scale=1”>

2. Chrome Canary to Mobile device:
Type into the address bar

EXAMPLE:
chrome://inspect

3. Relative Widths are better suited for responsive designs so use relative positions such as width: 100% in CSS;

4. max-width: 100%;
 -Make sure content fits within the viewport to prevent horizontal scrolling.
 -Should use relative units when specifying widths for elements to prevent them from accidentally overflowing the viewport or within a div box 
-Can prevent this from happening by setting a max-width: 100%;
 -max-width overrides width;  

IMPORTANT TIP: Recommend adding a catch all in your main CSS for image, embed, object and video elements that sets this, just to be safe: 

CSS EXAMPLE:
  img, embed, object, video { 
  max-width: 100% 
} 

5. Tap Target Sizes ( use min-width: 48px; and min-height: 48px; )
 -buttons or tap target minimum size should be 48 pixels wide by 48 pixels tall. 
-that will make sure there is enough room between the elements for fat fingers and fat thumbs 
-it is okay to make some tap targets a little bit smaller but make sure there’s at least 40 pixels of room between any of your tap targets 

  IMPORTANT TIP: Simply using width and height alone, can be a little dangerous, because it won’t allow the element to resize if the content inside of it is bigger than the container. 

  IMPORTANT TIP #2: Add paddings to all of your a tags (1.5em)??  

  EXAMPLE:
	 	nav a, button { 
    min-width: 48px; 
    min-height: 48px;
	}

6. Start Small -Designing a responsive site, uses the same concepts and processes that you go through for a non responsive site. Except instead of drawing a single wide design, there are a few more to accommodate different screen sizes;
 -Start your design for the smallest form factor (starting small) and slowing designing upwards to larger/wider screen display. 
-Beyond designing from small to large, we should also code from small to large. This way I know that my course styles and layout will work for any device, even on legacy browsers that don’t support media queries 
-Also the most important reason to start from small and work up is performance. By designing for the smallest viewport first, we are forced to think about performance form the very beginning and have to make a conscious decision about prioritizing content, and how much data is sending to the user.
