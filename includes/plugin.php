<?php
/**
 * Class description
 *
 * @package   package_name
 * @author    Gutenix
 * @license   GPL-2.0+
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'HeadingBlockByGutenix_Plugin' ) ) {

	/**
	 * Define HeadingBlockByGutenix_Plugin class
	 */
	class HeadingBlockByGutenix_Plugin {

		/**
		 * A reference to an instance of this class.
		 *
		 * @since 1.0.0
		 * @var   object
		 */
		private static $instance = null;

		/**
		 * Constructor for the class
		 */
		public function __construct() {

			$this->includes();

			$this->register_blocks();
			$this->admin_init();
			$this->define_constants();

		}

		/**
		 * Defines all constants
		 *
		 * @since 1.0.0
		 */
		public function define_constants() {
			define( 'HB_GUTENIX_TABLET_BREAKPOINT', '1025' );
			define( 'HB_GUTENIX_MOBILE_BREAKPOINT', '767' );
		}

		/**
		 * Register blocks
		 *
		 * @since 1.0.0
		 */
		public function register_blocks() {

			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}
			
			wp_register_script(
				'heading-block-by-gutenix-blocks-editor',
				HB_GUTENIX_URL . 'assets/js/admin.js',
				array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
				HB_GUTENIX_VERSION,
				true
			);

			// Load View
			$heading_block_by_gutenix_ajax_nonce = wp_create_nonce( 'heading_block_by_gutenix_ajax_nonce' );


			// Editor Scripts.

			wp_localize_script( 
				'heading-block-by-gutenix-blocks-editor',
				'HeadingBlockByGutenixSettings',
				array(
					'blocks'										=> HeadingBlockByGutenix_Config::get_heading_block_by_gutenix_block_attributes(),
					'heading_block_by_gutenix_tablet_breakpoint' 	=> 'HB_GUTENIX_TABLET_BREAKPOINT',
					'heading_block_by_gutenix_mobile_breakpoint' 	=> 'HB_GUTENIX_MOBILE_BREAKPOINT',
					'heading_block_by_gutenix_ajax_nonce'			=> $heading_block_by_gutenix_ajax_nonce,
					'ajax_url' 										=> admin_url( 'admin-ajax.php' ),
				)
			);
			wp_localize_script( 
				'heading-block-by-gutenix-blocks',
				'heading_block_by_gutenix_subscribe_vars',
				[

					'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
				]
			);
			// Styles.
			wp_register_style(
				'heading-block-by-gutenix-blocks',
				HB_GUTENIX_URL . 'assets/css/style.css',
				array(),
				HB_GUTENIX_VERSION
			); 
			// Gutenix font.
			wp_register_style(
				'heading-block-by-gutenix-font',
				HB_GUTENIX_URL . 'assets/lib/heading-block-by-gutenix-font/css/heading-block-by-gutenix.css',
				array( 'wp-edit-blocks' ),
				HB_GUTENIX_VERSION
			);
			// Editor Styles.
			wp_register_style(
				'heading-block-by-gutenix-blocks-editor',
				HB_GUTENIX_URL . 'assets/css/editor.css',
				array( 'wp-edit-blocks', 'heading-block-by-gutenix-font' ),
				HB_GUTENIX_VERSION
			);

			$blocks = array(
				'heading',
			);

			foreach ( $blocks as $block) {
				register_block_type( 'heading-block-by-gutenix/' . $block, array(
					'editor_script' => 'heading-block-by-gutenix-blocks-editor',
					'editor_style'  => 'heading-block-by-gutenix-blocks-editor',
					'script'        => 'heading-block-by-gutenix-blocks',
					'style'         => 'heading-block-by-gutenix-blocks',
				) );
			}

		}


		/**
		 * Include required files
		 *
		 * @return void
		 */
		public function includes() {
			
			require_once HB_GUTENIX_PATH . 'includes/classes/class-heading-block-by-gutenix-block-helper.php';
			require_once HB_GUTENIX_PATH . 'includes/classes/class-heading-block-by-gutenix-config.php';
			require_once HB_GUTENIX_PATH . 'includes/classes/class-heading-block-by-gutenix-helper.php';

		}


		/**
		 * Initializtions for admin-only parts
		 *
		 * @return void
		 */
		public function admin_init() {

			if ( ! is_admin() ) {
				return;
			}

		}

		/**
		 * Returns the instance.
		 *
		 * @since  1.0.0
		 * @return object
		 */
		public static function get_instance() {

			// If the single instance hasn't been set, set it now.
			if ( null == self::$instance ) {
				self::$instance = new self;
			}
			return self::$instance;
		}
	}

}

add_action( 'plugins_loaded', 'heading_block_by_gutenix_gutenberg_loader' );
add_action( 'after_setup_theme', 'heading_block_by_gutenix_theme_setup' );
add_filter( 'render_block', 'heading_block_by_gutenix_wrap_alignment', 10, 2 );
add_action( 'wp_enqueue_scripts', 'hdng_gutenix_load_dashicons', 999 );
 
/**
* Initialize the blocks
*/
function heading_block_by_gutenix_gutenberg_loader() {
/**
 * Load Posts Block
 */
}


function heading_block_by_gutenix_theme_setup() {
	add_theme_support( 'align-wide' );
}

function heading_block_by_gutenix_wrap_alignment( $block_content, $block ) {
	if ( isset( $block['attrs']['align'] ) && in_array( $block['attrs']['align'], array( 'wide', 'full' ) ) ) {
		$block_content = sprintf(
			'<div class="%1$s">%2$s</div>',
			'align-wrap align-wrap-' . esc_attr( $block['attrs']['align'] ),
			$block_content
		);
	}
	return $block_content;
}


/**
* Gutenberg block category for HeadingBlockByGutenix.
*
* @param array  $categories Block categories.
* @param object $post Post object.
* @since 1.0.0
*/

add_filter('block_categories', function( $categories, $post ) {
	return array_merge(
		$categories, array(
			array(
				'slug'  => 'heading-block-by-gutenix',
				'title' => esc_html__( 'Heading Block By Gutenix', 'heading-block-by-gutenix' ),
			),
		)
	);
},10, 2);

// Adds support for editor color palette.
add_theme_support( 'editor-color-palette', array(
	array(
		'name'  => esc_html__( 'Light gray', 'heading-block-by-gutenix'  ),
		'slug'  => 'light-gray',
		'color'	=> '#f5f5f5',
	),
	array(
		'name'  => esc_html__( 'Medium gray', 'heading-block-by-gutenix'  ),
		'slug'  => 'medium-gray',
		'color' => '#999',
	),
	array(
		'name' => esc_html__( 'light grayish magenta', 'heading-block-by-gutenix' ),
		'slug' => 'light-grayish-magenta',
		'color' => '#d0a5db',
	),
	array(
		'name' => esc_html__( 'very light gray', 'heading-block-by-gutenix' ),
		'slug' => 'very-light-gray',
		'color' => '#eee',
	),
	array(
		'name' => esc_html__( 'very dark gray', 'heading-block-by-gutenix' ),
		'slug' => 'very-dark-gray',
		'color' => '#444',
	),
) );


/**
 * Initialize plugin
 *
 * @return void
 */

add_action( 'init', array( 'HeadingBlockByGutenix_Plugin', 'get_instance' ) );

/**
 * Add Dashicons
 */
function hdng_gutenix_load_dashicons(){
	wp_enqueue_style('dashicons');
}
