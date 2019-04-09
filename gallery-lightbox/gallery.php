<?php


      if( $images ): ?>

      <div class="section  galeria   contain light " id="galeria">
        <div class="column">
          <div class="inner-column">
          <ul class="masonry">
              <?php foreach( $images as $image ): ?>
                  <li class="item">
                    <div class="image-link"  data-url="<?php echo $image['url']; ?>">

												 <?php echo wp_get_attachment_image( $image['ID'], $image['sizes']['medium'] ); ?>
                    </div>

                  </li>
              <?php endforeach; ?>
          </ul>
      <?php endif; ?>

        <!--end loop -->
      </div>
      </div>
      </div>


