

// load More images
add_action('wp_ajax_load_images_by_ajax', 'load_images_by_ajax_callback');
add_action('wp_ajax_nopriv_load_images_by_ajax', 'load_images_by_ajax_callback');

function load_images_by_ajax_callback() {
    check_ajax_referer('load_more_images', 'security');
    $paged_image = $_POST['page'];


    $args = array(
			'post_parent' => $post->ID,
			'post_status' => 'inherit',
				'post_type'		=> 'attachment',
				  'post_mime_type' => 'image/jpeg,image/gif,image/jpg,image/png',
			'orderby' => 'date',
			'order' => 'DESC',
			'posts_per_page'	=> 12,
       'paged' => $paged_image,
    );



  $my_images = new WP_Query( $args );


    if ( $my_images->have_posts() ) :
        ?>
        <?php while ( $my_images->have_posts() ) : $my_images->the_post() ?>

				<?php	$image_id = $post->ID;
				$size = 'full'; // (thumbnail, medium, large, full or custom size)?>

					<li class="gallery-image-item">
						<?php echo wp_get_attachment_image( $image_id , $size ); ?>
					</li>

        <?php endwhile; ?>

 <?php wp_reset_postdata()?>



        <?php


			else:

				?>

				<script type="text/javascript">
					(function($) {


					$(".load-text-image").text("No more images");
					$(".load-image").removeClass("loadmore-images");


					})( jQuery )
					</script>


				<?php
    endif;

    wp_die();
}
