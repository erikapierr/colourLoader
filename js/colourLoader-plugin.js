(function($){
	$.fn.colourLoader = function(colourScheme, options) {
		
		settings = $.extend({
			opacity: 1,
			speed: 300,
			myColourList: []
		}, options);

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
		}

		//rainbow background function
		animateRainbowLoader = function() {
			console.log(rainbowArray.length);
			for (var i=0;i<rainbowArray.length;i++){
				$('.loader').animate({
					backgroundColor: rainbowArray[i]
				}, settings.speed, function() {
					animateRainbowLoader();
				});
			}
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