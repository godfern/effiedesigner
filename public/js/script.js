(function() {

	// var homeBtn = document.getElementById('home');
	// var bioBtn = document.getElementById('bio');
	// var workBtn = document.getElementById('work');
	var linkBtn = document.getElementsByClassName('nav-link');
	var defaultBlock = document.getElementById('home');
	var prevClass = defaultBlock;
	var textClass = document.getElementsByClassName('animate-me');
	var text = textClass[0].innerHTML;
	var chars = text.split("");
	var textString = '<span>' + chars.join('</span><span>') + '</span>';



	// linkBtn[0].addEventListener('click', function(e) {  do stuff here 
	// 	console.log(e.target);
	// }, false);
	// bioBtn.addEventListener('click', function() { /* do stuff here*/ }, false);
	// workBtn.addEventListener('click', function() { /* do stuff here*/ }, false);
	// contactBtn.addEventListener('click', function() { /* do stuff here*/ }, false);
	// 
	var myFunction = function(e) {
		var attribute = this.getAttribute("data-button");

		if (prevClass) {
			// prevClass.remove('show');
			prevClass.classList.remove("show");
		}
		var containerBlc = document.getElementById(attribute);
		prevClass = containerBlc;
		containerBlc.className = 'show';

	};

	for (var i = 0; i < linkBtn.length; i++) {
		linkBtn[i].addEventListener('click', myFunction, false);
	}
	textClass[0].innerHTML = textString;

})();