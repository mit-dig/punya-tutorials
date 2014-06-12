$(function(){

/*-----------------------------------------------------------------------------------*/
/*	Slider - http://slidesjs.com/
/*-----------------------------------------------------------------------------------*/
			
					$('#slider').css({ display : 'block' });
						
					$("#slider").slides({
						preload: true,
						preloadImage: 'images/slider/loading.gif',
						play: 6000, //Auto play time. Set to 0 to stop auto rotate.
						width: 960,
						pause: 4500,
						slideSpeed: 1000, //Slide rotation speed.
						generatePagination: true,
						hoverPause: true,
						autoHeight: true
					});	

});