<?php 

/* 
 Theme Support
*/
function berkelium_add_theme_support() {
    $custom_logo_defaults = array(
        'height' => 100,
        'width' => 400,
        'flex-height' => true,
        'flex-width' => true,
        'header-text' => array( 'site-title', 'site-description' ),
        'unlink-homepage-logo' => false, 
    );

    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo', $custom_logo_defaults );
    add_theme_support( 'post-thumbnails' );
}

add_action( 'after_setup_theme', 'berkelium_add_theme_support');

function berkelium_menus() {
    $menu_locations = array(
        'primary' => 'Primary Menu',
        'footer-menu' => 'Footer menu'
    );

    register_nav_menus( $menu_locations );
}

add_action( 'init', 'berkelium_menus' );

function berkelium_register_styles() {
    $theme_version = wp_get_theme()->get("Version");
    wp_enqueue_style( "berkelium-styles", get_template_directory_uri() . "/style.css", array('material-styles'), $theme_version, "all" );
    wp_enqueue_style( "material-styles", get_template_directory_uri() . "/core/material-components-web/dist/material-components-web.min.css", array(), "1.0", "all" );
    wp_enqueue_style( "berkelium-styles-main", get_template_directory_uri() . "/scss/styles.css", array('material-styles'), $theme_version, "all" );
    wp_enqueue_style( "material-icons", "https://fonts.googleapis.com/icon?family=Material+Icons", array(), "1.0", "all" );
}

add_action( 'wp_enqueue_scripts', 'berkelium_register_styles' );

function berkelium_register_scripts() {
    $theme_version = wp_get_theme()->get("Version");
    wp_enqueue_script( "material-script", get_template_directory_uri() . "/core/material-components-web/dist/material-components-web.min.js", array(), $theme_version, true);
}

add_action( 'wp_enqueue_scripts', 'berkelium_register_scripts' );

?>