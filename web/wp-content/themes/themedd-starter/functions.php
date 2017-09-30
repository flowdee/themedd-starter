<?php
/**
 * Constants
 */
define('TEDDS_VERSION', wp_get_theme()->get( 'Version' ) );
define('TEDDS_URL', trailingslashit( get_stylesheet_directory_uri() ) );
define('TEDDS_ASSETS_URL', trailingslashit( get_stylesheet_directory_uri() ) . 'assets' );
define('TEDDS_DIR', trailingslashit( get_stylesheet_directory() ) );
define('TEDDS_INCLUDES_DIR', trailingslashit( get_stylesheet_directory() ) . 'includes' );

/**
 * Loading styles and scripts
 */
function tedds_enqueue_scripts() {

    // Styles
    wp_enqueue_style( 'tedds-site',
        get_stylesheet_directory_uri() . '/assets/css/main.min.css',
        array( 'themedd' ),
        wp_get_theme()->get( 'Version' )
    );

    // Scripts
    wp_enqueue_script( 'tedds-site', TEDDS_URL . '/assets/js/main.min.js', array(), TEDDS_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'tedds_enqueue_scripts' );

/**
 * Remove the migrate script from the list of jQuery dependencies.
 *
 * @see https://github.com/cedaro/dequeue-jquery-migrate
 *
 * @param WP_Scripts $scripts WP_Scripts scripts object. Passed by reference.
 */
add_action( 'wp_default_scripts', function( $scripts ) {

    if ( ! is_admin() && ! empty( $scripts->registered['jquery'] ) ) {
        $jquery_dependencies = $scripts->registered['jquery']->deps;
        $scripts->registered['jquery']->deps = array_diff( $jquery_dependencies, array( 'jquery-migrate' ) );
    }
});

/**
 * Re-Register widget area
 */
add_action( 'after_setup_theme', function() {

    load_theme_textdomain( 'tedds', get_stylesheet_directory() . '/languages' );

    // Image sizes
    add_image_size( 'tedds-gallery', 480, 252, array( 'center', 'top' ) );
});

/**
 * Add custom image sizes to selector
 */
add_filter( 'image_size_names_choose', function( $sizes ) {

    $custom_sizes = array(
        'tedds-gallery' => __( 'Gallery', 'tedds' ),
    );

    return array_merge( $sizes, $custom_sizes );
});