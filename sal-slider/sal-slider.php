<?php /**
* Plugin Name: Sal Slider
* Description: Slider with custom post types.
* Version: 1.0
* Author: Miquel Capó
**/


/**
 * Enqueue scripts and styles.
 */


function sal_slider_scripts() {
  $plugin_dir =  '/wp-content/plugins/sal-slider/';

    $rands = rand( 1, 99999999999 );

	wp_enqueue_style( 'sal-slider', $plugin_dir. 'sal-slider.css', '',  $rands);


    wp_enqueue_script( 'sal-slider', $plugin_dir. 'scripts.js'  ,array('jquery'),  $rands , true  );
}
add_action( 'wp_enqueue_scripts', 'sal_slider_scripts' );




// Register custom post type

function cptui_register_my_cpts_sliders() {

	/**
	 * Post Type: Sliders.
	 */

	$labels = array(
		"name" => __( "Sliders", "decelera" ),
		"singular_name" => __( "Slider", "decelera" ),
	);

	$args = array(
		"label" => __( "Sliders", "decelera" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "sliders", "with_front" => true ),
		"query_var" => true,
		"menu_icon" => "dashicons-slides",
		"supports" => array( "title", "editor", "thumbnail" ),
	);

	register_post_type( "sliders", $args );
}

add_action( 'init', 'cptui_register_my_cpts_sliders' );



// sal-slider-button

add_shortcode('button-sal-slider', 'add_button_sal_slider');

function add_button_sal_slider($atts){

    $a = shortcode_atts( array(
		'size' => 'w-small',
        'type' => 'next',
        'icon' => 'fa-cutlery',
    ), $atts );
	$b= ' ';

return '<a class=" btn-sal-slider ' . $b . 'btn-s-' . $a['type'] . $b . '" style=""></a>';




/* return '<span class="w-icon-block sal-slider-nav ' . $b . $a['size'] . $b . 'button' . $a['type'] . 'm' . $b . 'w-circle w-effect-none icon-rutas-info" style="">
        <span class="w-border"></span>
                        <i class="fa' . $b . $a['icon'] . $b . '"></i>
            </span>';*/


}




/*Slider miquel*/

add_shortcode('sal-slider', 'add_slider');

function add_slider($atts){


$b = shortcode_atts( array(
        'id' => '3016',
	   'name' => 'slider',

    ), $atts );


$post_id =  $b['id'];
$queried_post = get_post($post_id);
$content = $queried_post->post_content;
$content = apply_filters('the_content', $content);
$content = str_replace(']]>', ']]&gt;', $content);

// return  $content ;
//	intent de emprar id posat desde shortcode
$content = str_replace("src","data-src",$content); 
  $slider = ' <div id="' . $b['name'] .  ' " class="sal-slider border-light">' . $content;
  $slider .= '<section class="w-section box-buttons-slider">

    <div class="container">
        <div class="row">
            <div class="col col-12" style="">
    <div class="col-inner"><div class="w-text-block sal-slider-nav button-prev-m ">
    <a class=" btn-sal-slider  btn-s-prev " style=""></a>
</div><div class="w-text-block sal-slider-nav button-next-m ">
    <a class=" btn-sal-slider  btn-s-next " style=""></a>
</div></div></div>        </div>
    </div>
</section>' ;
$slider .=  '</div>';

return $slider;

	//get_template_part('/templates/shortcodes/sliders/sal-slider');
	}
