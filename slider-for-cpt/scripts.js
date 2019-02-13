
	// slider - miquel



	var width = 0;
	var row = $('.slider-m').attr('id');
	var slide = $( '#' + row + ' .slide-m' );
	//var n_slides = $('#' + row + ' .slide-m').length;

	$( slide ).each(function() {
    	width += $(this).outerWidth( true );
	});

	/*$( '#' + row + ' > div').css('width', width + 450);*/

	// add active to first child
	$( '.slide-m:first-child' ).addClass('active  animate');
	$( ".slide-m.active" ).next().addClass('next');
	$( ".slide-m:last-child" ).addClass('prev');


	// next buttton
	  $('.button-next-m').click(function() {


		  $(this).closest('.slider-m ').find('.slide-m').removeClass('next prev');

		if( $(this).closest('.slider-m ').find('.slide-m.active').is(':last-child') ) {

        $(this).closest('.slider-m ').find('.slide-m.active').removeClass('active  animate');
        $(this).closest('.slider-m ').find('.slide-m:first').addClass('active  animate');





			//$('.slider-m').animate({scrollRight:  width }, 800);
		}
		  else {
        $(this).closest('.slider-m').find('.slide-m.active').removeClass('active  animate').next().addClass('active animate');



			 // $('.slider-m').animate({scrollLeft:  width/n_slides }, 800);

		}




	});



	 // prev buttton


	  $('.button-prev-m').click(function() {

        $(this).closest('.slider-m ').find('.slide-m').removeClass('next prev');

		if(   $(this).closest('.slider-m ').find('.slide-m.active').is(':first-child') ) {

			  $(this).closest('.slider-m ').find('.slide-m.active').removeClass('active animate');
			  $(this).closest('.slider-m ').find('.slide-m:last-child').addClass('active  animate');

			//$('.slider-m').animate({scrollLeft:  width }, 800);
		}
		  else {

        $(this).closest('.slider-m ').find('.slide-m.active').removeClass('active  animate').prev().addClass('active  animate');



			 // $('.slider-m').animate({scrollLeft:  width/n_slides }, 800);

		}

	});



	 $( '.slider-m-nav').click(function() {

	 if (   $(this).closest('.slider-m ').find('.slide-m.active').is(':first-child')) {
		 			  $(this).closest('.slider-m ').find('.slide-m.active').next().addClass('next');

					  $(this).closest('.slider-m ').find('.slide-m:last').addClass('prev');

				 }

	else   if (   $(this).closest('.slider-m ').find('.slide-m.active').is(':last-child'))	{
					  $(this).closest('.slider-m ').find('.slide-m.active').prev().addClass('prev');
					  $(this).closest('.slider-m ').find('.slide-m:first').addClass('next');
					}


	else  	{
						  $(this).closest('.slider-m ').find('.slide-m.active').prev().addClass('prev');
		  				  $(this).closest('.slider-m ').find('.slide-m.active').next().addClass('next');

					}

		});
