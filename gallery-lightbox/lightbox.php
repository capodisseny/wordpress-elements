
		<div class="section lightbox see-<?php echo $seewhat ?>  hide dark">


				<div class="column">
					<div class="section  bg-popup see-<?php echo $seewhat ?> hide close-btn-<?php echo $seewhat ?>">
						<div class="bg-img  "></div>
						</div>
							<div  id="single-<?php echo $seewhat ?>-container" class="inner-column" >

									<?php if($seewhat == "image"):?>

										<img />
										<?php endif; ?>


								<!-- content to load--></div>
				</div>

        <?php if( $seewhat == 'image'): ?>
        <div class="button btn-arrow  prev"><i class="arrow left"></i></div>
        <div class="button  btn-arrow next"> <i class="arrow right"></i></div>
      <?php endif;?>
		</div>


			<a class="button close-btn see-<?php echo $seewhat ?> close-btn-<?php echo $seewhat ?> hide"></a>
