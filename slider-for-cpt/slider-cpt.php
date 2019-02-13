
// Slider-m miquel


// Slider-m-button

add_shortcode('button-slider-m', 'add_button_slider_m');

function add_button_slider_m($atts){   

    $a = shortcode_atts( array(
		'size' => 'w-small',
        'type' => 'next',
        'icon' => 'fa-cutlery',
    ), $atts );
	$b= ' ';

return '<a class=" btn-slider-m ' . $b . 'btn-s-' . $a['type'] . $b . '" style=""></a>';
       
          
         
/* return '<span class="w-icon-block slider-m-nav ' . $b . $a['size'] . $b . 'button' . $a['type'] . 'm' . $b . 'w-circle w-effect-none icon-rutas-info" style="">
        <span class="w-border"></span>
                        <i class="fa' . $b . $a['icon'] . $b . '"></i>
            </span>';*/


}




/*Slider miquel*/

add_shortcode('slider-m', 'add_slider');

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
	return  ' <div id="' . $b['name'] .  ' " class="slider-m border-light">' . $content . '</div>'; 
	
	
	//get_template_part('/templates/shortcodes/sliders/slider-m');
	}
