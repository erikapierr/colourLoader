(function($){
	$.fn.colourLoader = function(colourScheme, options) {
		settings = $.extend({
			opacity: 1,
			speed: 300,
			myColourList: []
		}, options);

		//show and hide <body> overflow when the colourLoader is run; make the loader fade out
		showAndHide = function () {
			$('body').css('overflow', 'hidden');
			$(window).load(function() {
				$('.loader').fadeOut(300).css('display', 'none').stop(true, false);
				$('body').css('overflow', 'auto');
			});
		}

		//variables for rainbow colour scheme
		saturation = 50;
		lightness = 65;
		hue = [0,30,60,90,120,150,180,210,240,270,300];
		rainbowArray= [];
		for (var i=0;i<hue.length;i++){
			rainbowArray.push("hsl("+hue[i]+","+saturation+"%,"+lightness+"%)");
		}
		hue.reverse();
		for (var i=0; i<hue.length;i++){
			rainbowArray.push("hsl("+hue[i]+","+saturation+"%,"+lightness+"%)");
		}
		
		//variables for random colour scheme
		coloursArray=[];
		for (var i=0;i<=255;i++) {
			coloursArray.push(i);	
		}
		getRandom=function () {
	  		return coloursArray[Math.floor(Math.random()*255)];
		};
		//random colour loader function
		animateRandomLoader = function() {
			getRandom();
			var randomBgColor= "rgb(" + getRandom() + "," + getRandom() + "," + getRandom() + ")";
			$('.loader').animate({
				backgroundColor: randomBgColor
			}, settings.speed, function() {
				animateRandomLoader();
			});
			showAndHide();
		}

		//rainbow background function
		animateRainbowLoader = function() {
			for (var i=0;i<rainbowArray.length;i++){
				$('.loader').animate({
					backgroundColor: rainbowArray[i]
				}, settings.speed, function() {
					animateRainbowLoader();
				});
			}
			showAndHide();
		}

		//choose your own colours
		animateMyColours= function() {
			for (var i=0;i<settings.myColourList.length;i++) {
				console.log(settings.myColourList);
				$('.loader').animate({
					backgroundColor: settings.myColourList[i]
					}, settings.speed, function() {
					animateMyColours();
					});
				}
				showAndHide();
			}		
		//set colour scheme
		if (colourScheme === "random") {
			animateRandomLoader();
		} else if (colourScheme === "rainbow") {
			animateRainbowLoader();
		} else if (colourScheme === "myColours") {
			animateMyColours();
		}
	}
})(jQuery);