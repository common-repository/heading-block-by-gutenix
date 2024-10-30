<?php

/**
 * HeadingBlockByGutenix Config.
 *
 * @package HeadingBlockByGutenix
 */
if (!class_exists('HeadingBlockByGutenix_Config')) {

	/**
	 * Class HeadingBlockByGutenix_Config.
	 */
	class HeadingBlockByGutenix_Config {

		/**
		 * HeadingBlockByGutenix Block Attributes 
		 *
		 * @var heading_block_by_gutenix_block_attributes
		 */
		public static $heading_block_by_gutenix_block_attributes = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_heading_block_by_gutenix_block_attributes() {

			if (null === self::$heading_block_by_gutenix_block_attributes) {
				self::$heading_block_by_gutenix_block_attributes = array(

					'heading-block-by-gutenix/logo' => array(
						'slug'          => '',
						'title'         => esc_html__( 'Logo', 'heading-block-by-gutenix' ),
						'description'   => esc_html__( 'Display a logo image of your Site Header', 'heading-block-by-gutenix' ),
						'default'       => true,
						'attributes'    => array(
							'block_id'                      => '',
							'logoType'                      => '',
							'logoImageId'                   => '',
							'logoImageUrl'                  => '',
							'logoRetinaImageId'             => '',
							'logoRetinaImageUrl'            => '',
							'logoImgGap'                    => '',
							'logo_text_from'                => '',
							'logo_text'                     => '',
							'logoTextLoadGoogleFonts'       => '',
							'logoTextFontFamily'            => '',
							'logoTextFontWeight'            => '',
							'logoTextFontSubset'            => '',
							'logoTextFontStyle'             => '',
							'logoTextTextTransform'         => '',
							'logoTextTextDecoration'        => '',
							'logoTextTag'                   => '',
							'logoTextFontSizeType'          => '',
							'logoTextFontSize'              => '',
							'logoTextFontSizeMobile'        => '',
							'logoTextFontSizeTablet'        => '',
							'logoTextLineHeightType'        => '',
							'logoTextLineHeight'            => '',
							'logoTextLineHeightMobile'      => '',
							'logoTextLineHeightTablet'      => '',
							'logoTextLetterSpacingType'     => '',
							'logoTextLetterSpacing'         => '',
							'logoTextLetterSpacingMobile'   => '',
							'logoTextLetterSpacingTablet'   => '',
							'logoTextColor'                 => '',
							'logoLinked'                    => '',
							'logo_display_style'            => '',
							'logoAlignY'                    => '',
							
							//  Block Background
							'blockBGColor'                  => '',
							'blockBorderStyle'              => '',
							'blockBorderWidthType'          => '',
							'blockBorderWidthTop'           => '',
							'blockBorderWidthTopMobile'     => '',
							'blockBorderWidthTopTablet'     => '',
							'blockBorderWidthLeft'          => '',
							'blockBorderWidthLeftMobile'    => '',
							'blockBorderWidthLeftTablet'    => '',
							'blockBorderWidthBottom'        => '',
							'blockBorderWidthBottomMobile'  => '',
							'blockBorderWidthBottomTablet'  => '',
							'blockBorderWidthRight'         => '',
							'blockBorderWidthRightMobile'   => '',
							'blockBorderWidthRightTablet'   => '',
							'blockBorderSizeType'           => '',
							'blockBorderRadiusTop'          => '',
							'blockBorderRadiusTopMobile'    => '',
							'blockBorderRadiusTopTablet'    => '',
							'blockBorderRadiusLeft'         => '',
							'blockBorderRadiusLeftMobile'   => '',
							'blockBorderRadiusLeftTablet'   => '',
							'blockBorderRadiusBottom'       => '',
							'blockBorderRadiusBottomMobile' => '',
							'blockBorderRadiusBottomTablet' => '',
							'blockBorderRadiusRight'        => '',
							'blockBorderRadiusRightMobile'  => '',
							'blockBorderRadiusRightTablet'  => '',
							'blockBorderColor'              => '',
							'blockShadowHorizontal'         => '',
							'blockShadowVertical'           => '',
							'blockShadowBlur'               => '',
							'blockShadowSpread'             => '',
							'blockShadowColor'              => '',
							'blockShadowPosition'           => '',

							//  Spacing
							'PaddingType'                   => 'px',
							'paddingTop'                    => '',
							'paddingTopMobile'              => '',
							'paddingTopTablet'              => '',
							'paddingLeft'                   => '',
							'paddingLeftMobile'             => '',
							'paddingLeftTablet'             => '',
							'paddingBottom'                 => '',
							'paddingBottomMobile'           => '',
							'paddingBottomTablet'           => '',
							'paddingRight'                  => '',
							'paddingRightMobile'            => '',
							'paddingRightTablet'            => '',  
							'MarginType'                    => 'px',
							'marginTop'                     => '',
							'marginTopMobile'               => '',
							'marginTopTablet'               => '',
							'marginLeft'                    => '',
							'marginLeftMobile'              => '',
							'marginLeftTablet'              => '',
							'marginBottom'                  => '',
							'marginBottomMobile'            => '',
							'marginBottomTablet'            => '',
							'marginRight'                   => '',
							'marginRightMobile'             => '',
							'marginRightTablet'             => '',
						),
					),
					'heading-block-by-gutenix/heading' => array(
						'slug'          => '',
						'title'         => esc_html__( 'Heading', 'heading-block-by-gutenix' ),
						'description'   => esc_html__( 'Add a responsive heading with and style it up according to your design', 'heading-block-by-gutenix' ),
						'default'       => true,
						'attributes'    => array(
							'block_id'                      => '',
							'title'                         => '',
							'align'                         => '',

							//  Text Shadow
							'textShadow'                    => '',
							'textShadowHorizontal'          => '',
							'textShadowVertical'            => '',
							'textShadowBlur'                => '',
							'textShadowColor'               => '',
							
							//  Typography
							'textLoadGoogleFonts'           => '',
							'textFontFamily'                => '',
							'textFontWeight'                => '',
							'textFontSubset'                => '',
							'textFontStyle'                 => '',
							'textTextTransform'             => '',
							'textTextDecoration'            => '',
							'textTag'                       => '',
							'textFontSizeType'              => 'px',
							'textFontSize'                  => '',
							'textFontSizeMobile'            => '',
							'textFontSizeTablet'            => '',
							'textLineHeightType'            => 'px',
							'textLineHeight'                => '',
							'textLineHeightMobile'          => '',
							'textLineHeightTablet'          => '',
							'textLetterSpacingType'         => 'px',
							'textLetterSpacing'             => '',
							'textLetterSpacingMobile'       => '',
							'textLetterSpacingTablet'       => '',
							'textColor'                     => '',
							
							//  Block Background
							'blockBGColor'                  => '',
							'blockBorderStyle'              => '',
							'blockBorderWidthType'          => 'px',
							'blockBorderWidthTop'           => '',
							'blockBorderWidthTopMobile'     => '',
							'blockBorderWidthTopTablet'     => '',
							'blockBorderWidthLeft'          => '',
							'blockBorderWidthLeftMobile'    => '',
							'blockBorderWidthLeftTablet'    => '',
							'blockBorderWidthBottom'        => '',
							'blockBorderWidthBottomMobile'  => '',
							'blockBorderWidthBottomTablet'  => '',
							'blockBorderWidthRight'         => '',
							'blockBorderWidthRightMobile'   => '',
							'blockBorderWidthRightTablet'   => '',
							'blockBorderSizeType'           => 'px',
							'blockBorderRadiusTop'          => '',
							'blockBorderRadiusTopMobile'    => '',
							'blockBorderRadiusTopTablet'    => '',
							'blockBorderRadiusLeft'         => '',
							'blockBorderRadiusLeftMobile'   => '',
							'blockBorderRadiusLeftTablet'   => '',
							'blockBorderRadiusBottom'       => '',
							'blockBorderRadiusBottomMobile' => '',
							'blockBorderRadiusBottomTablet' => '',
							'blockBorderRadiusRight'        => '',
							'blockBorderRadiusRightMobile'  => '',
							'blockBorderRadiusRightTablet'  => '',
							'blockBorderColor'              => '',
							'blockShadowHorizontal'         => '',
							'blockShadowVertical'           => '',
							'blockShadowBlur'               => '',
							'blockShadowSpread'             => '',
							'blockShadowColor'              => '',
							'blockShadowPosition'           => '',

							//  Spacing
							'PaddingType'                   => 'px',
							'paddingTop'                    => '',
							'paddingTopMobile'              => '',
							'paddingTopTablet'              => '',
							'paddingLeft'                   => '',
							'paddingLeftMobile'             => '',
							'paddingLeftTablet'             => '',
							'paddingBottom'                 => '',
							'paddingBottomMobile'           => '',
							'paddingBottomTablet'           => '',
							'paddingRight'                  => '',
							'paddingRightMobile'            => '',
							'paddingRightTablet'            => '',  
							'MarginType'                    => 'px',
							'marginTop'                     => '',
							'marginTopMobile'               => '',
							'marginTopTablet'               => '',
							'marginLeft'                    => '',
							'marginLeftMobile'              => '',
							'marginLeftTablet'              => '',
							'marginBottom'                  => '',
							'marginBottomMobile'            => '',
							'marginBottomTablet'            => '',
							'marginRight'                   => '',
							'marginRightMobile'             => '',
							'marginRightTablet'             => '',
						),
					),

				);
			}
			return self::$heading_block_by_gutenix_block_attributes;
		}

	}

}