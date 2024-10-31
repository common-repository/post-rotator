<?php
/*
Plugin Name: Post Rotator
Plugin URI: https://github.com/sirbolkins/postrotator
Description: A very simple jQuery slider for posts by category.
Version: 0.9.1
Author: Shai Barash
Author URI: https://github.com/sirbolkins/
License: GPL3
*/

define('ROTATOR_URL', plugin_dir_url(__FILE__));

wp_register_script( 'post-rotator.js', ROTATOR_URL . 'post-rotator.js', array('jquery') );

wp_enqueue_script( 'post-rotator.js' );

add_action( 'wp_enqueue_scripts', 'wppr_add_css' );

function wppr_add_css() {
  wp_register_style( 'post-rotator.css', ROTATOR_URL . 'post-rotator.css' );
	wp_enqueue_style( 'post-rotator.css' );
}

function wppr_postrotator_func( $atts, $content=null ) {
  $qcfg = array( 'numberposts' => 5 );
  $posts_string = "";
  $post_rotator_height = ' style="height: 350px;" ';
  $post_rotator_speed = '4500';
  $post_rotator_auto = 'on';
  
  if(isset($atts["numberposts"]))
   $qcfg['numberposts'] = $atts["numberposts"];
   
  if(isset($atts["cat"]))
   $qcfg['category'] = $atts["cat"];
   
  if(isset($atts["speed"]))
   $post_rotator_speed = $atts["speed"];
   
  if(isset($atts["height"]))
   $post_rotator_height = ' style="height: '.$atts["height"].';" ';
   
  if(isset($atts["autorotate"]))
    $post_rotator_auto = $atts["autorotate"];

  $posts_string = '<div id="post_rotator_params" class="'.$post_rotator_auto.' " '.$post_rotator_height. '>'.$post_rotator_speed.'</div>';
  $rotate_posts = get_posts( $qcfg );
  foreach($rotate_posts as $post)  {
    $posts_string .= '<div class="post_rotator"><div class="post_rotator_wrap"><h1><a href="'.$post->guid.'">'.$post->post_title.'</a></h1><div>'.$post->post_content.'</div><div class="rotator_end"></div></div></div>';
  }
 return do_shortcode($posts_string);
}
add_shortcode( 'postrotator' , 'wppr_postrotator_func');
add_filter('widget_text', 'do_shortcode');
