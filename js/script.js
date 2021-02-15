

(function($) {

	//------------ ANIMOVANE LOGO V INDEX HEADERI-------

	var mainlogo = $('.mainlogo');

	mainlogo.delay(800).animate({opacity: '1'}, 1000, 'swing');

	 //------------ ANIMOVANE LOGO V REF HEADERI-------

	 var reflogo = $('.reflogoanim');

	 reflogo.delay(800).animate({opacity: '1'}, 1000, 'swing');

	//------------ Po kliknuti na odkaz v menu sa menu zroluje hore -------
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggler:visible').click();
	});

	// po kliknuti hocikde na dokument sa menu zroluje ak je rozrolovane
		$(document).click(function (event) {
			var clickover = $(event.target);
			var _opened = $(".navbar-collapse").hasClass("show");
			if (_opened === true && !clickover.hasClass("navbar-toggler")) {
				$(".navbar-toggler:visible").click();
			}
		});
	
	//------------------------ SKROLOVANIE -----------------------------
		// po kliknuti na link v menu sa zoskroluje na vybranú sekciu

	$('.page-scroll').on('click', function() {
	
	var id = this.hash;
	
	$('html,body').animate({ scrollTop: $(id).offset().top}, 1250,'easeInOutExpo');
	});

	// -------------- ANIMOVANIE HEADERA ---------------
		var cover = $('#cover'),
			covers = $('.fadecovers');

	
		covers.children(':not(:last)').hide();


		var Slider = {
			intervalID: null,
			running: false,
			config: {
				fadeSpeed: 1500,
				delayTime: 8000
			},

			set: function (id) {
				this.intervalID = id;
			},

			get: function () {
				return 'IDcko intervalu je: ' + this.intervalID 
			},

			start: function() {
				var slider = this;
				this.intervalID = setInterval(function() {
					covers.children(':last')
						.fadeOut(slider.config.fadeSpeed, function() { $(this).prependTo( covers ); })
						.prev().fadeIn(slider.config.fadeSpeed);
				}, slider.config.delayTime);

				this.running = true;
				},

			pause: function() {
				clearInterval( this.intervalID);
				this.intervalID = null;

				this.running = false;

			},

			resume: function () {

				if( !this.intervalID ) this.start();

			},

			toggle: function(){
				if( this.running ) this.pause();
				else this.resume();

			}
				}

			Slider.start();	

			cover.on('click', function() {
				Slider.toggle();
			});

	
			
	//------------------------ SKROLOVACI BUTTON BACK TO TOP -----------------------------
		var backToTop = $('a.backToTop');

		backToTop.on('click', function() {
				$('html,body').animate({ scrollTop: $('#backToTop').offset().top }, 1250,'easeInOutExpo');
			});	
			
			


})(jQuery);