(function ($) {
    "use strict";

    window.$ = $;

// slider - miquel



	var width = 0;
	var row = $('.sal-slider').attr('id');
	var slide = $( '#' + row + ' .sal-slide' );
	//var n_slides = $('#' + row + ' .sal-slide').length;

	$( slide ).each(function() {
    	width += $(this).outerWidth( true );
	});

	/*$( '#' + row + ' > div').css('width', width + 450);*/

	// add active to first child
	$( '.sal-slide:first-child' ).addClass('active  animate');
	$( ".sal-slide.active" ).next().addClass('next');
	$( ".sal-slide:last-child" ).addClass('prev');


	// next buttton
	  $('.button-next-m').click(function() {


		  $(this).closest('.sal-slider ').find('.sal-slide').removeClass('next prev');

		if( $(this).closest('.sal-slider ').find('.sal-slide.active').is(':last-child') ) {

        $(this).closest('.sal-slider ').find('.sal-slide.active').removeClass('active  animate');
        $(this).closest('.sal-slider ').find('.sal-slide:first').addClass('active  animate');





			//$('.sal-slider').animate({scrollRight:  width }, 800);
		}
		  else {
        $(this).closest('.sal-slider').find('.sal-slide.active').removeClass('active  animate').next().addClass('active animate');



			 // $('.sal-slider').animate({scrollLeft:  width/n_slides }, 800);

		}




	});



	 // prev buttton


	  $('.button-prev-m').click(function() {

        $(this).closest('.sal-slider ').find('.sal-slide').removeClass('next prev');

		if(   $(this).closest('.sal-slider ').find('.sal-slide.active').is(':first-child') ) {

			  $(this).closest('.sal-slider ').find('.sal-slide.active').removeClass('active animate');
			  $(this).closest('.sal-slider ').find('.sal-slide:last-child').addClass('active  animate');

			//$('.sal-slider').animate({scrollLeft:  width }, 800);
		}
		  else {

        $(this).closest('.sal-slider ').find('.sal-slide.active').removeClass('active  animate').prev().addClass('active  animate');



			 // $('.sal-slider').animate({scrollLeft:  width/n_slides }, 800);

		}

	});



	 $( '.sal-slider-nav').click(function() {

     var slider = $(this).closest('.sal-slider');



	 if (   $(this).closest('.sal-slider ').find('.sal-slide.active').is(':first-child')) {
		 			  $(this).closest('.sal-slider ').find('.sal-slide.active').next().addClass('next');

					  $(this).closest('.sal-slider ').find('.sal-slide:last').addClass('prev');

				 }

	else   if (   $(this).closest('.sal-slider ').find('.sal-slide.active').is(':last-child'))	{
					  $(this).closest('.sal-slider ').find('.sal-slide.active').prev().addClass('prev');
					  $(this).closest('.sal-slider ').find('.sal-slide:first').addClass('next');
					}


	else  	{
						  $(this).closest('.sal-slider ').find('.sal-slide.active').prev().addClass('prev');
		  				  $(this).closest('.sal-slider ').find('.sal-slide.active').next().addClass('next');

					}


load_data_src(slider);

		});



// set  data-src iamge as css background
/* NOT NECESARY WITH PRE LOAD ON CLICK
jQuery(document).ready(function( $ ) {

  //general
$(".sal-slide").each(function(){

  var imgBg = $(this).find("img").attr("src");

   $(this).attr("style", "background-image:url(" +  imgBg + ");");
   $(this).find("img").attr("style" ,"display:none;");

});
});*/



/*
function load_data_src_(slider){
var slide = slider.find('.sal-slide.next');
var img = slide.find('img');
var src = slide.attr('data-src');

slide.attr('style', 'background-image: url('+src+')');
//img.attr('src', src);


}*/





var slider = $('.sal-slider');
load_data_src(slider);

function load_data_src(slider){
var slide_a = slider.find('.sal-slide.active');
var slide_n = slider.find('.sal-slide.next');
var slide_p = slider.find('.sal-slide.prev');
var img_a = slide_a.find('img');
var img_n = slide_n.find('img');
var img_p = slide_p.find('img');

var src_a = img_a.attr('data-src');
var src_n = img_n.attr('data-src');
var src_p = img_p.attr('data-src');


if(slide_a.css('background-image') == 'none'){
img_to_slide(slide_a, img_a, src_a);
}
if(slide_n.css('background-image') == 'none'){
img_to_slide(slide_n, img_n, src_n);
}
if(slide_p.css('background-image') == 'none'){
img_to_slide(slide_p, img_p, src_p);
}

}



function img_to_slide(slide, img, src){
  slide.css( 'background-image', 'url('+src+')');
  img.attr( 'src', src);
}






})(jQuery);
