
$args = array(
	'post_parent' => $post->ID,
	'post_status' => 'inherit',
		'post_type'		=> 'attachment',
		  'post_mime_type' => 'image/jpeg,image/gif,image/jpg,image/png',
	'orderby' => 'date',
	'order' => 'DESC',
	'posts_per_page'	=> '6',
	'paged' => 1,


);


// query
$the_query = new WP_Query( $args );


			if( $the_query->have_posts() ): ?>



			<div class="info gallery">

				<span class="title">Gallery<?php //echo get_field('awards', 'option');?></span>
			</div>

			    <ul class="gallery-image load-image-container ">
					<?php while( $the_query->have_posts() ) : $the_query->the_post();?>
						<?php $image_id = $post->ID;?>

							<li class="gallery-image-item">
								<?php echo wp_get_attachment_image( $image_id , $size ); ?>
							</li>
						<?php endwhile; ?>

				</ul>


				<div class="btn-load load-image loadmore-images">
					<?php echo the_frame();?>
					<div class="load-text-image">		Load More	</div>
				</div>








				<?php wp_reset_query();	 // Restore global post data stomped by the_post(). ?>
	<?php endif;//if( $the_query->have_posts() )?>




					<script type="text/javascript">
					var ajaxurl = "<?php echo admin_url( 'admin-ajax.php' ); ?>";
					var page_image = 2;


					jQuery(function($) {




						$('body').on('click', '.loadmore-images', function() {

								var scroll = $(document).scrollTop();

										var data_image = {
										'action': 'load_images_by_ajax',
										'page': page_image,
										'security': '<?php echo wp_create_nonce("load_more_images"); ?>'
										};

										$.post(ajaxurl, data_image, function(response) {
										$('.load-image-container').append(response);
										page_image++;
										});


										$('html, body').animate({scrollTop: scroll}, 800);

								});

					});
					</script>
