//
//  javascript:(function(){ /*code*/ })();
//

function() {
	
	/* Create the div */
	var div = document.createElement('div');
    div.setAttribute('class', 'bookmarklet');
	div.innerHTML = 'hawdh<br/><br/><br/>awdnjawd<br/><br/>awd';
	
	/* Create the CSS */
	var css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '.bookmarklet { text-align: center; font-family: Helvetica; font-size: 12px; padding: 10px; width: 100px; height: auto; position: absolute; top: 50; left: 0; background-color: #EEE; border: 1px solid #CCC; border-left: none; -webkit-border-top-right-radius: 10px; -webkit-border-bottom-right-radius: 10px; -moz-border-radius-topright: 10px; -moz-border-radius-bottomright: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; }';
	document.body.appendChild(css);
	
	/* Add the bookmarklet */
	document.body.appendChild(div);
	
}
