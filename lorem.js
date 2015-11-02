// Still need to flesh out list of words. Haven't been able to find a list anywhere online though.
var loremDictionary = [ "lorem", "ipsum", "dolor", "sit", "amet" ];


function getLoremString(qty, type) {
	
	var loremString = [];
	
	switch (type) {
		case 'p':
			while( qty-- ) {
				var paragraph = '';
				
				// Randomly decide how many sentences long to make this next paragraph.
				var paraLength = Math.floor( Math.random() * (15 - 5 + 1) ) + 3;
				// get a paragraph
				paragraph = getLoremString(paraLength,'s');
				// add html p tags to our paragraph
				paragraph = '<p>' + paragraph + '</p>';
				// add the paragraph to our array
				loremString.push(paragraph);
			}
			return loremString.join('');
		case 's':
 			while( qty-- ) {
				var sentence = '';
				
				// Randomly decide how long to make this next sentence
				var sentLength = Math.floor( Math.random() * (15 - 5 + 1) ) + 5;
				// get a sentence
				sentence = getLoremString(sentLength,'w');
				// end the sentence with a period
				sentence += '.';
				// add the sentence to our array
				loremString.push(sentence);
			}
			return loremString.join(' ');
		case 'w':
			// get random word(s) from dictionary
			while( qty-- ) {
				loremString.push( loremDictionary[ Math.floor( Math.random() * loremDictionary.length ) ] );
			}
			// capitalize the first letter of the first word
			loremString[0] = loremString[0].charAt(0).toUpperCase() + loremString[0].substr(1);
			return loremString.join(' ');
		default:
			return '';
	}
	
}



window.onload = function() {
	
	// find all document elements with our lorem class
	var elements = document.querySelectorAll('[class^="lorem"');
	
	// act on each element returned
	for ( var i=0; i<elements.length; i++ ) {
		
		// get the type (word, sentence, or paragraph) and quantity
		var query = elements[i].className.replace(/lorem/i, '');
 		var type = query.replace(/[0-9]*[0-9]*/, '');
		var qty = query.replace(/[a-z]+/i, '');
			
		var loremstring = getLoremString(qty, type);
		
		//console.log('query: ' + query);
		//console.log('type: ' + type);
		//console.log('qty: ' + qty);
		//console.log('loremstring: ' + loremstring);
		
		elements[i].innerHTML += loremstring;
		
	} //end for
	
	
	
	
};
