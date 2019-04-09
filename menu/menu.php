<header id="masthead" class="site-header is-top">
		<div class="site-branding">

				<img class="menu-logo top-logo" src="<?php	echo get_field('d_logo_menu_top', 'option')?>" alt= "<?php get_bloginfo('name')?>"/>
						<img  class="menu-logo scroll-logo"src="<?php	the_field('d_logo_menu_scroll', 'option')?>" alt= "<?php get_bloginfo('name')?>"/>


		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">


			<!--  old menu <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php //esc_html_e( 'Primary Menu', 'decelera' ); ?></button> -->
			<div class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">

				<div class="container" >
					<div class="bar bar1"></div>
					<div class="bar bar2"></div>
					<div class="bar bar3"></div>
				</div>

			</div>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
