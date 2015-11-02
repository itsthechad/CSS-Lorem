# JS-Lorem
Quick Description:
Auto-fill placeholder text simply by adding a CSS class. No more trips to lorem ipsum generator sites!

More Details:
There are plenty of lorem ipsum generators online, but I find it time-consuming to visit a site, punch in my preferences, generate the text, and then copy and paste it into my site.

So, I had a simple idea: Create a JS tool which can be used to auto-fill a site with placeholder text. By including this JS file on in-development sites, you can get all the lorem ipsum goodness you need wihtout breaking flow and leaving your dev environment.

Note: Not unexpectedly, research has just proven that this idea is not unique and that there may even be an easier way to get lorem ipsum (see below). Still, I'd like to make this myself for the experience and fun of it. :)
 - What I'm doing has been done, to a degree, here: https://github.com/bzzrckt/lorem.css
 - Also, I learned that Emmet can add placeholder text. See http://docs.emmet.io/abbreviations/lorem-ipsum/ for details. This is convenient, but I still think a JS approach would make it easier to later get rid of the placeholder text. Rather than highlighting and deleting the Emmet generated text, you can do a find/replace to more easily remove all the JS-lorem classes.
 
# Usage
 1. Download and include lorem.js in your HTML.
 2. Anytime you want placeholder text, add a JS-Lorem class to any HTML element, as shown here:
 	
class="lorem1w" ---> 1 word of lorem

class="lorem2w" ---> 2 words of lorem

class="lorem1s" ---> 1 sentence of lorem

class="lorem1p" ---> 1 paragraph of lorem

class="lorem55p" ---> 55 paragraphs of lorem

	
In other words, say how many pieces you want and what type.

w = word

s = sentence

p = paragraph

 
 
 Change Log:
 2015/11/2 - 17:30 - I originally intended to do this project using CSS instead of JS but decided to go the JS route in order to allow for the lorem test to be randomly generated.
 2015/10/22 - 16:45 - First commit. Includes readme and a very early, simple proof of concept, not that something this simple really needs a proof of concept. ;)