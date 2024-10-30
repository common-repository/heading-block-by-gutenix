<?php
/**
 * Plugin Name: Heading Block by Gutenix
 * Description: Heading block by Gutenix is a plugin for creating responsive heading elements in the native WordPress blocks editor.
 * Version:     1.0.1
 * Requires at least: 5.1.1
 * Requires PHP:      7.1
 * Author:      Gutenix
 * Author URI:  https://webcodebuilder.com/
 * Text Domain: heading-block-by-gutenix
 * License:  GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

define( 'HB_GUTENIX_FILE', __FILE__ );
define( 'HB_GUTENIX_PATH', trailingslashit( plugin_dir_path( HB_GUTENIX_FILE ) ) );
define( 'HB_GUTENIX_URL', plugins_url( '/', HB_GUTENIX_FILE ) );

define( 'HB_GUTENIX_VERSION', '1.0.1' );

require_once HB_GUTENIX_PATH . 'includes/plugin.php';