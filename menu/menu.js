
/**Menu absolute 500px and show on scroll up */
jQuery(document).ready(function( $ ) {
var prev = 0;
var $window = $(window);
var nav = $('.site-header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();



if ( scrollTop < 300) {

$('.site-header').addClass("is-top");
} else if ( scrollTop > 300  &&  scrollTop < 500 ) {
  nav.toggleClass('hidden', scrollTop  > prev);
  prev = scrollTop;

} else if ( scrollTop > 350) {
  $('.site-header').removeClass("is-top");
nav.toggleClass('hidden-menu', scrollTop  > prev);
  nav.toggleClass('hidden', scrollTop  > prev);
  prev = scrollTop;

}

  });

});







//menu toggle
jQuery(document).ready(function( $ ) {

  $(".menu-toggle").click(function(){

		if ( $(".site-header").hasClass('show-menu') ) {
		  $(".site-header").removeClass('show-menu');
      	$(".menu-toggle .container").removeClass('change');



		} else{
			$(".site-header").addClass('show-menu');

      $(".menu-toggle .container").addClass('change');
		}

});
	
	
 //close menu on click link ONE PAGER
 $(".menu-item").click(function(){

   $(".site-header").removeClass('show-menu');
    $(".menu-toggle .container").removeClass('change');

});




$(".menu-item-has-children").click(function(){
$(this).toggleClass('active');
$(this).children().toggleClass('show-menu');
});


// hide menu on link click
$(".site-header .close-menu").click(function(){
$(".site-header").removeClass('show-menu');

});
	
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


