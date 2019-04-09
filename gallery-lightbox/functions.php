			function capodisseny_scripts_new() {
				wp_enqueue_script( 'capodisseny',  get_template_directory_uri() . '/js/miquel.js',array('jquery'), '', true  );
}

			add_action( 'wp_enqueue_scripts', 'capodisseny_scripts_new' );
