# colourLoader: a jQuery pre-loader

## What is it?
colourLoader is a preloader - it cycles through either rainbow colours, random colours, or colours of your choice before all the assets on your page have loaded. Once everything has loaded, it disappears. 

## Cool! How do I use it?
Good question. To use colourLoader, you'll need: 
- [the jQuery library](http://code.jquery.com/jquery-2.1.1.min.js)
- [the jQuery.color plugin](https://github.com/jquery/jquery-color/)
- the [colourLoader plugin](http://erikapierre.com/colourloader/colourloader-plugin.js) plus [CSS file](http://erikapierre.com/colourloader/colourloader.css) (also available as a [SCSS partial](http://erikapierre.com/colourloader/_colourloader.scss)

Make sure that the script files are all loaded in the head of your html in the order listed above, with your JS file coming last, and ensure that the colourLoader css file precedes your own.

After that, you'll need to include the below code in your html, **right after your `<body>`tag**:
```
<div class="loader"></div>
```

Then, you'll need the below code included in your JavaScript file, inside your `$(document).ready()`:
```
$(document).ready(function() {
	$('body').colourLoader("<insertcolourshere>");
	//fade out when page is done loading
	$(window).load(function() {
		$('.loader').fadeOut(300).css('display', 'none').stop();
	});
})
```

You'll need to replace `<insertcolourshere>` with either `"rainbow"`, `"random"`, or `"myColours"`. **If you choose `"myColours"`, you'll also need to pass in an array of colours as an argument -- see below for an example.**

##Options
colourLoader also offers a few other options that can be passed in as parameters:


| Parameter     | Default | Options                                                         |
| ------------- | ------- | --------------------------------------------------------------- |
| myColourList  | false   | An array of colours (name, hex, RGB(A), or HSL(A).              |
| opacity       | 1       | Any number between 0-1 (0 is transparent and 1 is fully opaque) |
| speed         | 300     | Number of milliseconds (higher# = slower).                      |
*Note*: myColourList is only available if you select "myColours" as your first argument. *Example: ["red", "#fff", "rgb(124,210,25)"]*

## Examples
[Random colours](http://erikapierre.com/colourloader/example-random.html)

[Rainbow colours](http://erikapierre.com/colourloader/example-rainbow.html)

[My colours](http://erikapierre.com/colourloader/example-mycolours.html)