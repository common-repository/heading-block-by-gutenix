<?php
/**
 * HeadingBlockByGutenix Helper.
 *
 * @package HeadingBlockByGutenix
 */

if ( ! class_exists( 'HeadingBlockByGutenix_Helper' ) ) {

    /**
     * Class HeadingBlockByGutenix_Helper.
     */
    final class HeadingBlockByGutenix_Helper {


        /**
         * Member Variable
         *
         * @since 0.0.1
         * @var instance
         */
        private static $instance;

        /**
         * Member Variable
         *
         * @since 0.0.1
         * @var instance
         */
        public static $block_list;

        /**
         * Current Block List
         *
         * @since 1.13.4
         * @var current_block_list
         */
        public static $current_block_list = array();

        /**
         * UAG Block Flag
         *
         * @since 1.13.4
         * @var heading_block_by_gutenix_flag
         */
        public static $heading_block_by_gutenix_flag = false;

        /**
         * Stylesheet
         *
         * @since 1.13.4
         * @var stylesheet
         */
        public static $stylesheet;

        /**
         * Script
         *
         * @since 1.13.4
         * @var script
         */
        public static $script;

        /**
         * Store Json variable
         *
         * @since 1.8.1
         * @var instance
         */
        public static $icon_json;

        /**
         * Page Blocks Variable
         *
         * @since 1.6.0
         * @var instance
         */
        public static $page_blocks;

        /**
         * Google fonts to enqueue
         *
         * @var array
         */
        public static $gfonts = array();

        /**
         *  Initiator
         *
         * @since 0.0.1
         */
        public static function get_instance() {
            if ( ! isset( self::$instance ) ) {
                self::$instance = new self;
            }
            return self::$instance;
        }

        /**
         * Constructor
         */
        public function __construct() {

            self::$block_list = HeadingBlockByGutenix_Config::get_heading_block_by_gutenix_block_attributes();

            add_action( 'wp', array( $this, 'generate_stylesheet' ), 10 );
            add_action( 'wp', array( $this, 'generate_script' ), 11 );
            add_action( 'wp_head', array( $this, 'frontend_gfonts' ), 120 );
            add_action( 'wp_head', array( $this, 'print_stylesheet' ), 80 );
            add_action( 'wp_footer', array( $this, 'print_script' ), 1000 );
        }



        /**
         * Print the Script in footer.
         */
        public function print_script() {

            if ( is_null( self::$script ) || '' === self::$script ) {
                return;
            }

            ob_start();
            ?>
            <script type="text/javascript" id="heading-block-by-gutenix-script-frontend">( function( $ ) { <?php echo self::$script; ?> })(jQuery) </script>
            <?php
            ob_end_flush();
        }

        /**
         * Print the Stylesheet in header.
         */
        public function print_stylesheet() {

            global $content_width;

            if ( is_null( self::$stylesheet ) || '' === self::$stylesheet ) {
                return;
            }

            self::$stylesheet = str_replace( '#CONTENT_WIDTH#', $content_width . 'px', self::$stylesheet );

            ob_start();
            ?>
            <style type="text/css" media="all" id="heading-block-by-gutenix-style-frontend"><?php echo self::$stylesheet; ?></style>
            <?php
            ob_end_flush();
        }

        /**
         * Load the front end Google Fonts.
         */
        public function frontend_gfonts() {
            if ( empty( self::$gfonts ) ) {
                return;
            }
            $show_google_fonts = apply_filters( 'heading_block_by_gutenix_blocks_show_google_fonts', true );
            if ( ! $show_google_fonts ) {
                return;
            }
            $link    = '';
            $subsets = array();
            foreach ( self::$gfonts as $key => $gfont_values ) {
                if ( ! empty( $link ) ) {
                    $link .= '%7C'; // Append a new font to the string.
                }
                $link .= $gfont_values['fontfamily'];
                if ( ! empty( $gfont_values['fontvariants'] ) ) {
                    $link .= ':';
                    $link .= implode( ',', $gfont_values['fontvariants'] );
                }
                if ( ! empty( $gfont_values['fontsubsets'] ) ) {
                    foreach ( $gfont_values['fontsubsets'] as $subset ) {
                        if ( ! in_array( $subset, $subsets, true ) ) {
                            array_push( $subsets, $subset );
                        }
                    }
                }
            }
            if ( ! empty( $subsets ) ) {
                $link .= '&amp;subset=' . implode( ',', $subsets );
            }
            echo '<link href="//fonts.googleapis.com/css?family=' . esc_attr( str_replace( '|', '%7C', $link ) ) . '" rel="stylesheet">';
        }


        /**
         * Parse CSS into correct CSS syntax.
         *
         * @param array  $selectors The block selectors.
         * @param string $id The selector ID.
         * @since 0.0.1
         */
        public static function generate_heading_block_by_gutenix_css( $selectors, $id ) {

            $styling_css = '';
            

            if ( empty( $selectors ) ) {
                return;
            }

            foreach ( $selectors as $key => $value ) {

                $css = '';

                foreach ( $value as $j => $val ) {

                    if ( ! empty( $val ) || 0 === $val ) {
                        $css .= $j . ': ' . $val . ';';
                    }
                }

                if ( ! empty( $css ) ) {
                    $styling_css .= $id;
                    $styling_css .= $key . '{';
                    $styling_css .= $css . '}';
                }
            }

            return $styling_css;
        }

        /**
         * Get CSS value
         *
         * Syntax:
         *
         *  get_css_value( VALUE, UNIT );
         *
         * E.g.
         *
         *  get_css_value( VALUE, 'em' );
         *
         * @param string $value  CSS value.
         * @param string $unit  CSS unit.
         * @since 1.13.4
         */
        public static function get_heading_block_by_gutenix_css_value( $value = '', $unit = '' ) {

            // @codingStandardsIgnoreStart

             
            
            if ( '' == $value ) {
                 return $value;
            }
             
            // @codingStandardsIgnoreEnd

            $css_val = '';

            if ( ! empty( $value ) ) {
                $css_val = esc_attr( $value ) . $unit;
            }

            return $css_val;
        }

        /**
         * Generates CSS recurrsively.
         *
         * @param object $block The block object.
         * @since 0.0.1
         */
        public function get_block_css( $block ) {

            // @codingStandardsIgnoreStart

            $block = ( array ) $block;

            $name = $block['blockName'];
            $css  = array();

            if( ! isset( $name ) ) {
                return;
            }

            if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
                $blockattr = $block['attrs'];
                if ( isset( $blockattr['block_id'] ) ) {
                    $block_id = $blockattr['block_id'];
                }
            }

            self::$current_block_list[] = $name;

            if ( strpos( $name, 'heading-block-by-gutenix/' ) !== false ) {
                self::$heading_block_by_gutenix_flag = true;
            }

            switch ( $name ) {
				case 'heading-block-by-gutenix/logo':
				    $css += HeadingBlockByGutenix_Block_Helper::get_heading_block_by_gutenix_logo_css( $blockattr, $block_id );
				    HeadingBlockByGutenix_Block_Helper::blocks_heading_block_by_gutenix_logo_gfont( $blockattr );
				break;

				case 'heading-block-by-gutenix/heading':
				    $css += HeadingBlockByGutenix_Block_Helper::get_heading_block_by_gutenix_heading_css( $blockattr, $block_id );
				    HeadingBlockByGutenix_Block_Helper::blocks_heading_block_by_gutenix_heading_gfont( $blockattr );
				break;

                default:
                    // Nothing to do here.
                    break;
            }

            if ( isset( $block['innerBlocks'] ) ) {
                foreach ( $block['innerBlocks'] as $j => $inner_block ) {
                    if ( 'core/block' == $inner_block['blockName'] ) {
                        $id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

                        if ( $id ) {
                            $content = get_post_field( 'post_content', $id );

                            $reusable_blocks = $this->parse( $content );

                            self::$stylesheet .= $this->get_stylesheet( $reusable_blocks );
                        }
                    } else {
                        // Get CSS for the Block.
                        $inner_block_css = $this->get_block_css( $inner_block );

                        $css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
                        $css_tablet = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
                        $css_mobile = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

                        if( isset( $inner_block_css['desktop'] ) ){
                            $css['desktop'] = $css_desktop . $inner_block_css['desktop'];
                            $css['tablet'] = $css_tablet . $inner_block_css['tablet'];
                            $css['mobile'] = $css_mobile . $inner_block_css['mobile'];
                        }
                    }
                }
            }

            self::$current_block_list = array_unique( self::$current_block_list );

            return $css;

            // @codingStandardsIgnoreEnd
        }

        /**
         * Adds Google fonts all blocks.
         *
         * @param array $load_google_font the blocks attr.
         * @param array $font_family the blocks attr.
         * @param array $font_weight the blocks attr.
         * @param array $font_subset the blocks attr.
         */
        public static function blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset ) {

            if ( true === $load_google_font ) {
                if ( ! array_key_exists( $font_family, self::$gfonts ) ) {
                    $add_font                     = array(
                        'fontfamily'   => $font_family,
                        'fontvariants' => ( isset( $font_weight ) && ! empty( $font_weight ) ? array( $font_weight ) : array() ),
                        'fontsubsets'  => ( isset( $font_subset ) && ! empty( $font_subset ) ? array( $font_subset ) : array() ),
                    );
                    self::$gfonts[ $font_family ] = $add_font;
                } else {
                    if ( isset( $font_weight ) && ! empty( $font_weight ) ) {
                        if ( ! in_array( $font_weight, self::$gfonts[ $font_family ]['fontvariants'], true ) ) {
                            array_push( self::$gfonts[ $font_family ]['fontvariants'], $font_weight );
                        }
                    }
                    if ( isset( $font_subset ) && ! empty( $font_subset ) ) {
                        if ( ! in_array( $font_subset, self::$gfonts[ $font_family ]['fontsubsets'], true ) ) {
                            array_push( self::$gfonts[ $font_family ]['fontsubsets'], $font_subset );
                        }
                    }
                }
            }
        }

        /**
         * Generates stylesheet and appends in head tag.
         *
         * @since 0.0.1
         */
        public function generate_stylesheet() {

            $this_post = array();

            if ( class_exists( 'WooCommerce' ) ) {

                if ( is_cart() ) {

                    $id        = get_option( 'woocommerce_cart_page_id' );
                    $this_post = get_post( $id );

                } elseif ( is_account_page() ) {

                    $id        = get_option( 'woocommerce_myaccount_page_id' );
                    $this_post = get_post( $id );

                } elseif ( is_checkout() ) {

                    $id        = get_option( 'woocommerce_checkout_page_id' );
                    $this_post = get_post( $id );

                } elseif ( is_checkout_pay_page() ) {

                    $id        = get_option( 'woocommerce_pay_page_id' );
                    $this_post = get_post( $id );

                } elseif ( is_shop() ) {

                    $id        = get_option( 'woocommerce_shop_page_id' );
                    $this_post = get_post( $id );
                }

                if ( is_object( $this_post ) ) {
                    $this->_generate_stylesheet( $this_post );
                    return;
                }
            }

            if ( is_single() || is_page() ) {

                global $post;
                $this_post = $post;

                if ( ! is_object( $this_post ) ) {
                    return;
                }
                $this->_generate_stylesheet( $this_post );

            } elseif ( is_archive() || is_home() || is_search() || is_404() ) {

                global $wp_query;

                foreach ( $wp_query as $post ) {
                    $this->_generate_stylesheet( $post );
                }
            }
        }

        /**
         * Generates stylesheet in loop.
         *
         * @param object $this_post Current Post Object.
         * @since 1.7.0
         */
        public function _generate_stylesheet( $this_post ) {

            if ( ! is_object( $this_post ) ) {
                return;
            }

            if ( ! isset( $this_post->ID ) ) {
                return;
            }

            if ( has_blocks( $this_post->ID ) ) {

                if ( isset( $this_post->post_content ) ) {

                    $blocks            = $this->parse( $this_post->post_content );
                    self::$page_blocks = $blocks;

                    if ( ! is_array( $blocks ) || empty( $blocks ) ) {
                        return;
                    }

                    self::$stylesheet .= $this->get_stylesheet( $blocks );
                }
            }
        }

        /**
         * Generates scripts and appends in footer tag.
         *
         * @since 1.5.0
         */
        public function generate_script() {

            $blocks = self::$page_blocks;

            if ( ! is_array( $blocks ) || empty( $blocks ) ) {
                return;
            }

            $this->get_scripts( $blocks );
        }

        /**
         * Parse Guten Block.
         *
         * @param string $content the content string.
         * @since 1.1.0
         */
        public function parse( $content ) {

            global $wp_version;

            return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
        }

        /**
         * Generates stylesheet for reusable blocks.
         *
         * @param array $blocks Blocks array.
         * @since 1.1.0
         */
        public function get_stylesheet( $blocks ) {

            $desktop = '';
            $tablet  = '';
            $mobile  = '';

            $tab_styling_css = '';
            $mob_styling_css = '';

            foreach ( $blocks as $i => $block ) {

                if ( is_array( $block ) ) {

                    if ( '' === $block['blockName'] ) {
                        continue;
                    }
                    if ( 'core/block' === $block['blockName'] ) {
                        $id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

                        if ( $id ) {
                            $content = get_post_field( 'post_content', $id );

                            $reusable_blocks = $this->parse( $content );

                            self::$stylesheet .= $this->get_stylesheet( $reusable_blocks );

                        }
                    } else {
                        // Get CSS for the Block.
                        $css = $this->get_block_css( $block );

                        if ( isset( $css['desktop'] ) ) {
                            $desktop .= $css['desktop'];
                            $tablet  .= $css['tablet'];
                            $mobile  .= $css['mobile'];
                        }
                    }
                }
            }

            if ( ! empty( $tablet ) ) {
                $tab_styling_css .= '@media only screen and (max-width: ' . HB_GUTENIX_TABLET_BREAKPOINT . 'px) {';
                $tab_styling_css .= $tablet;
                $tab_styling_css .= '}';
            }

            if ( ! empty( $mobile ) ) {
                $mob_styling_css .= '@media only screen and (max-width: ' . HB_GUTENIX_MOBILE_BREAKPOINT . 'px) {';
                $mob_styling_css .= $mobile;
                $mob_styling_css .= '}';
            }

            return $desktop . $tab_styling_css . $mob_styling_css;
        }


        /**
         * Generates scripts for reusable blocks.
         *
         * @param array $blocks Blocks array.
         * @since 1.6.0
         */
        public function get_scripts( $blocks ) {

            foreach ( $blocks as $i => $block ) {
                if ( is_array( $block ) ) {
                    if ( 'core/block' === $block['blockName'] ) {
                        $id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

                        if ( $id ) {
                            $content = get_post_field( 'post_content', $id );

                            $reusable_blocks = $this->parse( $content );

                            $this->get_scripts( $reusable_blocks );
                        }
                    } else {
                        // Get JS for the Block.
                        //self::$script .= $this->get_block_js( $block );
                    }
                }
            }
        }

        /**
         * Get Json Data.
         *
         * @since 1.8.1
         * @return Array
         */
        public static function backend_load_font_awesome_icons() {

            $json_file = HB_GUTENIX_PATH . 'src/components/icon-picker/HeadingBlockByGutenixIconPicker.json';
           
            if ( ! file_exists( $json_file ) ) {
                return array();
            }

            // Function has already run.
            if ( null !== self::$icon_json ) {
                return self::$icon_json;
            }

            $str             = file_get_contents( $json_file );
            self::$icon_json = json_decode( $str, true );
            return self::$icon_json;
        }

        /**
         * Generate SVG.
         *
         * @since 1.8.1
         * @param  array $icon Decoded fontawesome json file data.
         * @return string
         */
        public static function render_svg_html( $icon ) {
            $icon = str_replace( 'far', '', $icon );
            $icon = str_replace( 'fas', '', $icon );
            $icon = str_replace( 'fab', '', $icon );
            $icon = str_replace( 'fa-', '', $icon );
            $icon = str_replace( 'fa', '', $icon );
            $icon = sanitize_text_field( esc_attr( $icon ) );

            $json = HeadingBlockByGutenix_Helper::backend_load_font_awesome_icons();
            $path = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['path'] : $json[ $icon ]['svg']['solid']['path'];
            $view = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['viewBox'] : $json[ $icon ]['svg']['solid']['viewBox'];
            if ( $view ) {
                $view = implode( ' ', $view );
            }
            $htm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox= "' . $view . '"><path d="' . $path . '"></path></svg>';
            return $htm;
        }

    

        /**
         * Get size information for all currently-registered image sizes.
         *
         * @global $_wp_additional_image_sizes
         * @uses   get_intermediate_image_sizes()
         * @link   https://codex.wordpress.org/Function_Reference/get_intermediate_image_sizes
         * @since  1.9.0
         * @return array $sizes Data for all currently-registered image sizes.
         */
        public static function get_heading_block_by_gutenix_image_sizes() {

            global $_wp_additional_image_sizes;

            $sizes       = get_intermediate_image_sizes();
            $image_sizes = array();

            $image_sizes[] = array(
                'value' => 'full',
                'label' => esc_html__( 'Full', 'heading-block-by-gutenix'),
            );

            foreach ( $sizes as $size ) {
                if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ), true ) ) {
                    $image_sizes[] = array(
                        'value' => $size,
                        'label' => ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
                    );
                } else {
                    $image_sizes[] = array(
                        'value' => $size,
                        'label' => sprintf(
                            '%1$s (%2$sx%3$s)',
                            ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
                            $_wp_additional_image_sizes[ $size ]['width'],
                            $_wp_additional_image_sizes[ $size ]['height']
                        ),
                    );
                }
            }

            $image_sizes = apply_filters( 'heading_block_by_gutenix_post_featured_image_sizes', $image_sizes );

            return $image_sizes;
        }

        /**
         * Get Post Types.
         *
         * @since 1.11.0
         * @access public
         */
        public static function get_heading_block_by_gutenix_post_types() {

            $post_types = get_post_types(
                array(
                    'public'       => true,
                    'show_in_rest' => true,
                ),
                'objects'
            );

            $options = array();

            foreach ( $post_types as $post_type ) {
                if ( 'product' === $post_type->name ) {
                    continue;
                }

                $options[] = array(
                    'value' => $post_type->name,
                    'label' => $post_type->label,
                );
            }

            return apply_filters( 'heading_block_by_gutenix_loop_post_types', $options );
        }


        /**
         *  Get - RGBA Color
         *
         *  Get HEX color and return RGBA. Default return RGB color.
         *
         * @param  var   $color      Gets the color value.
         * @param  var   $opacity    Gets the opacity value.
         * @param  array $is_array Gets an array of the value.
         * @since   1.11.0
         */
        public static function hex2rgba( $color, $opacity = false, $is_array = false ) {

            $default = $color;

            // Return default if no color provided.
            if ( empty( $color ) ) {
                return $default;
            }

            // Sanitize $color if "#" is provided.
            if ( '#' === $color[0] ) {
                $color = substr( $color, 1 );
            }

            // Check if color has 6 or 3 characters and get values.
            if ( strlen( $color ) === 6 ) {
                    $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
            } elseif ( strlen( $color ) === 3 ) {
                    $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
            } else {
                    return $default;
            }

            // Convert hexadec to rgb.
            $rgb = array_map( 'hexdec', $hex );

            // Check if opacity is set(rgba or rgb).
            if ( false !== $opacity && '' !== $opacity ) {
                if ( abs( $opacity ) >= 1 ) {
                    $opacity = $opacity / 100;
                }
                $output = 'rgba(' . implode( ',', $rgb ) . ',' . $opacity . ')';
            } else {
                $output = 'rgb(' . implode( ',', $rgb ) . ')';
            }

            if ( $is_array ) {
                return $rgb;
            } else {
                // Return rgb(a) color string.
                return $output;
            }
        }
    }
       
    HeadingBlockByGutenix_Helper::get_instance();
}
