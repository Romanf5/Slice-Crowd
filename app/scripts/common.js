'use strict';

(function() {
	var menu = document.querySelector('.header__nav');
	var burger = document.querySelector('.mobile-menu');

	burger.addEventListener('click', function(event) {
		event.preventDefault();
		if (!burger.classList.contains('open')) {
			menu.classList.add('open');
			burger.classList.add('open');
		}
		else {
			menu.classList.remove('open');
			burger.classList.remove('open');
		}
	});
})();

var loader = document.querySelector('.loader-wrap');

setTimeout(function() {
	loader.classList.add('animate-off');
}, 500);
