(function($) {
 'use strict';



  //lightbox imatge

  // obrir lightbox per imatge
  	$(".image-link").click(function(){
  		 var image_link = $(this ).attr("data-url");
  		  var image_alt = $(this ).attr("data-alt");


  	 $("#single-image-container img").attr("src", image_link );
  	 $("#single-image-container img").attr("src", image_alt );
  		 $(this).parent().addClass("selected");
  		$(".see-image").removeClass("hide");


  	 });

  // tancar light box imatge
  	 $(".close-btn-image").click(function(){
  	 	 $(".see-image").addClass("hide");
  	 				});


  // next button
  			 $(".see-image .next").click(function(){


  						 if( $('.galeria li:last-child').hasClass('selected')){

  							 $('.galeria li:last-child' ).removeClass('selected');
  							 $('.galeria li:first-child' ).addClass('selected');

  						 }

  						 else {
  							  $('.galeria .selected' ).removeClass('selected').next().addClass('selected');
  						 };

  						 var image_link = $('li.selected .image-link' ).attr("data-url");

  					 	  $("#single-image-container img").attr("src", image_link );
  			 	});

  // next button
  			 $(".see-image .prev").click(function(){


  						 if( $('.galeria li:first-child').hasClass('selected')){

  							 $('.galeria li:first-child' ).removeClass('selected');
  							 $('.galeria li:last-child' ).addClass('selected');

  						 }

  						 else {
  								$('.galeria .selected' ).removeClass('selected').prev().addClass('selected');
  						 };

  						 var image_link = $('li.selected .image-link' ).attr("data-url");

  							$("#single-image-container img").attr("src", image_link );
  				});

})( jQuery )
