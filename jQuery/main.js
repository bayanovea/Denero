$(document).ready(function(){

	$(window).keydown(function(eventObject){
  		switch(eventObject.which) {
  			case 37:
  				alert('left arrow');
  				break;
  			case 38:
  				alert('up arrow');
  				break;
  			case 39:
  				alert('right arrow');
  				break;
  			case 40:
  				alert('down arrow');
  				break;
  			default:
  				break;
  		}  		
	});

});