<?php

/**
 * PL Block Helper.
 *
 * @package PL
 */
if (!class_exists('HeadingBlockByGutenix_Block_Helper')) {

	/**
	 * Class PL_Block_Helper.
	 */
	class HeadingBlockByGutenix_Block_Helper {


		/**
		 * Get Heading Block CSS
		 *
		 * @since 1.0.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_heading_block_by_gutenix_heading_css ( $attr, $id ) {        // @codingStandardsIgnoreStart

			$defaults               = HeadingBlockByGutenix_Helper::$block_list['heading-block-by-gutenix/heading']['attributes'];
			$attr                   = array_merge( $defaults, (array) $attr );
			$mobile_selectors       = array();
			$tablet_selectors       = array();

			$selectors = array(
				' .heading-block-by-gutenix-heading__wrap' => array(
					'padding-top'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingTop'], $attr['PaddingType'] ),
					'padding-bottom'        => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingBottom'], $attr['PaddingType'] ),
					'padding-left'          => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingLeft'], $attr['PaddingType'] ),
					'padding-right'         => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingRight'], $attr['PaddingType'] ),

					'margin-top'            => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginTop'], $attr['MarginType'] ),
					'margin-bottom'         => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginBottom'], $attr['MarginType'] ),
					'margin-left'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginLeft'], $attr['MarginType'] ),
					'margin-right'          => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginRight'], $attr['MarginType'] ),

					'border-top-left-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusTop'], $attr['blockBorderSizeType'] ),
					'border-top-right-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusRight'], $attr['blockBorderSizeType'] ),
					'border-bottom-left-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusLeft'], $attr['blockBorderSizeType'] ),
					'border-bottom-right-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusBottom'], $attr['blockBorderSizeType'] ),

					'background-color'      => $attr['blockBGColor'],
				),
				' .heading-block-by-gutenix-heading__text' => array(
					'font-size'             => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textFontSize'], $attr['textFontSizeType'] ),
					'font-family'           => $attr['textFontFamily'],
					'font-style'            => $attr['textFontStyle'],
					'text-transform'        => $attr['textTextTransform'],
					'text-decoration'       => $attr['textTextDecoration'],
					'font-weight'           => $attr['textFontWeight'],
					'line-height'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textLineHeight'], $attr['textLineHeightType'] ),
					'letter-spacing'        => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textLetterSpacing'], $attr['textLetterSpacingType'] ),
					'color'                 => $attr['textColor'],
				),
			);

			if ( isset( $attr['textShadow'] ) && $attr['textShadow'] == true ) {
				$selectors = array_merge_recursive( $selectors, [' .heading-block-by-gutenix-heading__text' => array(
					'text-shadow'           => $attr['textShadowHorizontal'] . 'px ' . $attr['textShadowVertical'] . 'px ' . $attr['textShadowBlur'] . 'px ' . $attr['textShadowColor'],
					)
				] );
			}

			if ( isset( $attr['blockBorderStyle'] ) && $attr['blockBorderStyle'] != 'none' ) {
				$selectors = array_merge_recursive( $selectors, [' .heading-block-by-gutenix-heading__wrap' => array(
					'border-style'          => $attr['blockBorderStyle'],
					'border-top-width'      => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthTop'], $attr['blockBorderWidthType'] ),
					'border-right-width'    => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthRight'], $attr['blockBorderWidthType'] ),
					'border-bottom-width'   => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthBottom'], $attr['blockBorderWidthType'] ),
					'border-left-width'     => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthLeft'], $attr['blockBorderWidthType'] ),
					'border-color'          => $attr['blockBorderColor'],
					)
				] );
			}

			if ( isset( $attr['blockShadowColor'] ) && $attr['blockShadowColor'] != '' ) {
				$selectors = array_merge_recursive( $selectors, [' .heading-block-by-gutenix-heading__wrap' => array(
					'box-shadow'            => $attr['blockShadowHorizontal'] . 'px ' . $attr['blockShadowVertical'] . 'px ' . $attr['blockShadowBlur'] . 'px ' . $attr['blockShadowSpread'] . 'px ' . $attr['blockShadowColor'] . ' ' . $attr['blockShadowPosition'],
					)
				] );
			}


			$tablet_selectors = array(
				' .heading-block-by-gutenix-heading__wrap'  => array(
					'padding-top'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingTopTablet'], $attr['PaddingType'] ),
					'padding-bottom'        => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingBottomTablet'], $attr['PaddingType'] ),
					'padding-left'          => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingLeftTablet'], $attr['PaddingType'] ),
					'padding-right'         => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingRightTablet'], $attr['PaddingType'] ),

					'margin-top'            => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginTopTablet'], $attr['MarginType'] ),
					'margin-bottom'         => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginBottomTablet'], $attr['MarginType'] ),
					'margin-left'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginLeftTablet'], $attr['MarginType'] ),
					'margin-right'          => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginRightTablet'], $attr['MarginType'] ),

					'border-top-left-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusTopTablet'], $attr['blockBorderSizeType'] ),
					'border-top-right-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusRightTablet'], $attr['blockBorderSizeType'] ),
					'border-bottom-left-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusLeftTablet'], $attr['blockBorderSizeType'] ),
					'border-bottom-right-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusBottomTablet'], $attr['blockBorderSizeType'] ),
				),
				' .heading-block-by-gutenix-heading__text' => array(
					'font-size'             => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textFontSizeTablet'], $attr['textFontSizeType'] ),
					'line-height'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textLineHeightTablet'], $attr['textLineHeightType'] ),
					'letter-spacing'        => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textLetterSpacingTablet'], $attr['textLetterSpacingType'] ),
				),
			);

			if ( isset( $attr['blockBorderStyle'] ) && $attr['blockBorderStyle'] != 'none' ) {
				$tablet_selectors = array_merge_recursive( $tablet_selectors, [' .heading-block-by-gutenix-heading__wrap' => array(
					'border-top-width'      => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthTopTablet'], $attr['blockBorderWidthType'] ),
					'border-right-width'    => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthRightTablet'], $attr['blockBorderWidthType'] ),
					'border-bottom-width'   => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthBottomTablet'], $attr['blockBorderWidthType'] ),
					'border-left-width'     => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthLeftTablet'], $attr['blockBorderWidthType'] ),
					)
				] );
			}


			$mobile_selectors = array(
				' .heading-block-by-gutenix-heading__wrap' => array(
					'padding-top'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingTopMobile'], $attr['PaddingType'] ),
					'padding-bottom'        => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingBottomMobile'], $attr['PaddingType'] ),
					'padding-left'          => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingLeftMobile'], $attr['PaddingType'] ),
					'padding-right'         => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['paddingRightMobile'], $attr['PaddingType'] ),

					'margin-top'            => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginTopMobile'], $attr['MarginType'] ),
					'margin-bottom'         => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginBottomMobile'], $attr['MarginType'] ),
					'margin-left'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginLeftMobile'], $attr['MarginType'] ),
					'margin-right'          => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['marginRightMobile'], $attr['MarginType'] ),

					'border-top-left-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusTopMobile'], $attr['blockBorderSizeType'] ),
					'border-top-right-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusRightMobile'], $attr['blockBorderSizeType'] ),
					'border-bottom-left-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusLeftMobile'], $attr['blockBorderSizeType'] ),
					'border-bottom-right-radius' => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderRadiusBottomMobile'], $attr['blockBorderSizeType'] ),
				),
				' .heading-block-by-gutenix-heading__text' => array(
					'font-size'             => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textFontSizeMobile'], $attr['textFontSizeType'] ),
					'line-height'           => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textLineHeightMobile'], $attr['textLineHeightType'] ),
					'letter-spacing'        => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['textLetterSpacingMobile'], $attr['textLetterSpacingType'] ),
				)
			);

			if ( isset( $attr['blockBorderStyle'] ) && $attr['blockBorderStyle'] != 'none' ) {
				$mobile_selectors = array_merge_recursive( $mobile_selectors, [' .heading-block-by-gutenix-heading__wrap' => array(
					'border-top-width'      => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthTopMobile'], $attr['blockBorderWidthType'] ),
					'border-right-width'    => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthRightMobile'], $attr['blockBorderWidthType'] ),
					'border-bottom-width'   => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthBottomMobile'], $attr['blockBorderWidthType'] ),
					'border-left-width'     => HeadingBlockByGutenix_Helper::get_heading_block_by_gutenix_css_value( $attr['blockBorderWidthLeftMobile'], $attr['blockBorderWidthType'] ),
					)
				] );
			}


			$desktop = HeadingBlockByGutenix_Helper::generate_heading_block_by_gutenix_css( $selectors, '#heading-block-by-gutenix-heading-' . $id );

			$tablet = HeadingBlockByGutenix_Helper::generate_heading_block_by_gutenix_css( $tablet_selectors, '#heading-block-by-gutenix-heading-' . $id );

			$mobile = HeadingBlockByGutenix_Helper::generate_heading_block_by_gutenix_css( $mobile_selectors, '#heading-block-by-gutenix-heading-' . $id );


			$generated_css = array(
				'desktop' => $desktop,
				'tablet'  => $tablet,
				'mobile'  => $mobile,
			);

			return $generated_css;
		}

		/**
		 * Adds Google fonts for Heading block.
		 *
		 * @since 1.0.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_heading_block_by_gutenix_heading_gfont( $attr ) {

			$heading_text_load_google_font  = isset( $attr['textLoadGoogleFonts'] ) ? $attr['textLoadGoogleFonts'] : '';
			$heading_text_font_family       = isset( $attr['textFontFamily'] ) ? $attr['textFontFamily'] : '';
			$heading_text_font_weight       = isset( $attr['textFontWeight'] ) ? $attr['textFontWeight'] : '';
			$heading_text_font_subset       = isset( $attr['textFontSubset'] ) ? $attr['textFontSubset'] : '';

			HeadingBlockByGutenix_Helper::blocks_google_font( $heading_text_load_google_font, $heading_text_font_family, $heading_text_font_weight, $heading_text_font_subset );

		}

    }

}