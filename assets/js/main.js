;(function () {



	//* FluidVids
	fluidvids.init({
		selector: ['iframe', 'object'],
		players: ['player.youtube.com', 'www.youtube.com']
	});

	//*** Events After Loaded
	document.addEventListener('DOMContentLoaded', function(e) {

		//* offSetMenu
	    var btnMenu = document.querySelectorAll('.offsetMenu');

	    for(var x = 0; x < btnMenu.length; x++) {
	      btnMenu[x].addEventListener('click', function () {
	      	document.body.classList.toggle('nav-opened');
	      }, false);
	    }

	}, false);
	//
})();
