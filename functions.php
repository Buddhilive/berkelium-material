<?php 

function berkelium_register_styles() {
    $theme_version = wp_get_theme()->get("Version");
    wp_enqueue_style( "berkelium-styles", get_template_directory_uri() . "/style.css", array('material-styles'), $theme_version, "all" );
    wp_enqueue_style( "material-styles", get_template_directory_uri() . "/core/material-components-web/dist/material-components-web.min.css", array(), "1.0", "all" );
    wp_enqueue_style( "material-icons", "https://fonts.googleapis.com/icon?family=Material+Icons", array(), "1.0", "all" );
}

add_action( 'wp_enqueue_scripts', 'berkelium_register_styles' );

?>