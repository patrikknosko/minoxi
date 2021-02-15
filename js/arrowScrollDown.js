(function($) {
//------------------------ SKROLOVACI BUTTON -----------------------------

		// vytvorime link button, cez ktorý sa vieme scrollovat na prvú sekciu
		var scrollDown = $('<a>', { 
			href: '#uvod', 
			class: 'scrollDownArrow animate__animated animate__bounce animate__infinite	infinite',
			html: '<i class="fa fa-angle-double-down fa-4x"></i>'
			}).attr("aria-label","šípka dole");

			

		// link pridame na stranku a naviazeme nan scrollovaciu funkciu
		
		

		scrollDown.appendTo('body').on('click', function() {
				$('html,body').animate({ scrollTop: $('#uvod').offset().top}, 1250,'easeInOutExpo');
			});	
	

		// button down skryjeme ak prideme hlbsie do stranky stranke
		var win = $(window);
		
		
		win.scroll(function() {
			if ( win.scrollTop() <= 100 ) scrollDown.fadeIn();
				else scrollDown.hide();
				});

})(jQuery);