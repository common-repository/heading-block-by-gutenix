import heading_block_by_gutenix_generateCSS from "components/heading_block_by_gutenix_generateCSS";
import generateCSSUnit from "components/heading_block_by_gutenix_generateCSSUnit";
import merge from "lodash/merge"

/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function heading_block_by_gutenix_styling( props, id) {

	const {
		block_id,

		title,
		align,
		textLink,
		textLinkUrl,
		textLinkTarget,

		//	Text Shadow
		textShadow,
		textShadowHorizontal,
		textShadowVertical,
		textShadowBlur,
		textShadowColor,

		//	Typography
		textLoadGoogleFonts,
		textFontFamily,
		textFontWeight,
		textFontSubset,
		textFontStyle,
		textTextTransform,
		textTextDecoration,
		textTag,
		textFontSizeType,
		textFontSize,
		textFontSizeMobile,
		textFontSizeTablet,
		textLineHeightType,
		textLineHeight,
		textLineHeightMobile,
		textLineHeightTablet,
		textLetterSpacingType,
		textLetterSpacing,
		textLetterSpacingMobile,
		textLetterSpacingTablet,
		textColor,

		//	Block Background
		blockBGColor,
		blockBorderStyle,
		blockBorderWidthType,
		blockBorderWidthTop,
		blockBorderWidthTopMobile,
		blockBorderWidthTopTablet,
		blockBorderWidthLeft,
		blockBorderWidthLeftMobile,
		blockBorderWidthLeftTablet,
		blockBorderWidthBottom,
		blockBorderWidthBottomMobile,
		blockBorderWidthBottomTablet,
		blockBorderWidthRight,
		blockBorderWidthRightMobile,
		blockBorderWidthRightTablet,
		blockBorderSizeType,
		blockBorderRadiusTop,
		blockBorderRadiusTopMobile,
		blockBorderRadiusTopTablet,
		blockBorderRadiusLeft,
		blockBorderRadiusLeftMobile,
		blockBorderRadiusLeftTablet,
		blockBorderRadiusBottom,
		blockBorderRadiusBottomMobile,
		blockBorderRadiusBottomTablet,
		blockBorderRadiusRight,
		blockBorderRadiusRightMobile,
		blockBorderRadiusRightTablet,
		blockBorderColor,
		blockShadowHorizontal,
		blockShadowVertical,
		blockShadowBlur,
		blockShadowSpread,
		blockShadowColor,
		blockShadowPosition,

		// Spacing
		PaddingType,
		paddingTop,
		paddingTopMobile,
		paddingTopTablet,
		paddingLeft,
		paddingLeftMobile,
		paddingLeftTablet,
		paddingBottom,
		paddingBottomMobile,
		paddingBottomTablet,
		paddingRight,
		paddingRightMobile,
		paddingRightTablet,

		MarginType,
		marginTop,
		marginTopMobile,
		marginTopTablet,
		marginLeft,
		marginLeftMobile,
		marginLeftTablet,
		marginBottom,
		marginBottomMobile,
		marginBottomTablet,
		marginRight,
		marginRightMobile,
		marginRightTablet,

	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {
		" .heading-block-by-gutenix-heading__wrap": {
			"padding-top": generateCSSUnit( paddingTop, PaddingType ),
			"padding-right": generateCSSUnit( paddingRight, PaddingType ),
			"padding-bottom": generateCSSUnit( paddingBottom, PaddingType ),
			"padding-left": generateCSSUnit( paddingLeft, PaddingType ),

			"margin-top": generateCSSUnit( marginTop, MarginType ),
			"margin-right": generateCSSUnit( marginRight, MarginType ),
			"margin-bottom": generateCSSUnit( marginBottom, MarginType ),
			"margin-left": generateCSSUnit( marginLeft, MarginType ),

			"border-top-left-radius" : generateCSSUnit( blockBorderRadiusTop, blockBorderSizeType ),
			"border-top-right-radius" : generateCSSUnit( blockBorderRadiusRight, blockBorderSizeType ),
			"border-bottom-left-radius" : generateCSSUnit( blockBorderRadiusLeft, blockBorderSizeType ),
			"border-bottom-right-radius" : generateCSSUnit( blockBorderRadiusBottom , blockBorderSizeType ),

			"background-color": blockBGColor,
		},
		" .heading-block-by-gutenix-heading__text": {
			"font-family": textFontFamily,
			"font-style": textFontStyle,
			"font-weight": textFontWeight,
			"font-size": generateCSSUnit( textFontSize, textFontSizeType ),
			"line-height": generateCSSUnit( textLineHeight, textLineHeightType ),
			"letter-spacing": generateCSSUnit( textLetterSpacing, textLetterSpacingType ),
			"text-transform": textTextTransform,
			"text-decoration": textTextDecoration,
			"color" : textColor,
		},
	}

	if ( textShadow ) {
		merge(selectors, { " .heading-block-by-gutenix-heading__text" :{
				"text-shadow" : textShadowHorizontal + "px " + textShadowVertical + "px " + textShadowBlur + "px " + textShadowColor,
				}
			}
		)
	}

	if ( blockBorderStyle  != "" && blockBorderStyle != 0 ) {
		merge(selectors, { " .heading-block-by-gutenix-heading__wrap" :{
				"border-style" : blockBorderStyle,
				"border-top-width" : generateCSSUnit(  blockBorderWidthTop , blockBorderWidthType  ),
				"border-right-width" : generateCSSUnit(  blockBorderWidthRight , blockBorderWidthType  ),
				"border-bottom-width" : generateCSSUnit(  blockBorderWidthBottom , blockBorderWidthType  ),
				"border-left-width" : generateCSSUnit(  blockBorderWidthLeft, blockBorderWidthType ),
				"border-color" : blockBorderColor,
				}
			}
		)
	}

	if ( blockShadowColor !== undefined && blockShadowColor !== "" ) {
		merge(selectors, { " .heading-block-by-gutenix-heading__wrap" :{
				"box-shadow" : ( undefined !== blockShadowHorizontal ? blockShadowHorizontal : '0' ) + "px " + ( undefined !== blockShadowVertical ? blockShadowVertical : '0' ) + "px " + ( undefined !== blockShadowBlur ? blockShadowBlur : '0' ) + "px " + ( undefined !== blockShadowSpread ? blockShadowSpread : '0' ) + "px " + blockShadowColor + " " + ( undefined !== blockShadowPosition ? blockShadowPosition : '' ),
				}
			}
		)
	}

	tablet_selectors = {
		" .heading-block-by-gutenix-heading__wrap": {
			"padding-top": generateCSSUnit( paddingTopTablet, PaddingType ),
			"padding-right": generateCSSUnit( paddingRightTablet, PaddingType ),
			"padding-bottom": generateCSSUnit( paddingBottomTablet, PaddingType ),
			"padding-left": generateCSSUnit( paddingLeftTablet, PaddingType ),

			"margin-top": generateCSSUnit( marginTopTablet, MarginType ),
			"margin-right": generateCSSUnit( marginRightTablet, MarginType ),
			"margin-bottom": generateCSSUnit( marginBottomTablet, MarginType ),
			"margin-left": generateCSSUnit( marginLeftTablet, MarginType ),

			"border-top-left-radius" : generateCSSUnit( blockBorderRadiusTopTablet, blockBorderSizeType ),
			"border-top-right-radius" : generateCSSUnit( blockBorderRadiusRightTablet, blockBorderSizeType ),
			"border-bottom-left-radius" : generateCSSUnit( blockBorderRadiusLeftTablet, blockBorderSizeType ),
			"border-bottom-right-radius" : generateCSSUnit(  blockBorderRadiusBottomTablet, blockBorderSizeType ), 
		},
		" .heading-block-by-gutenix-heading__text": {
			"font-size": generateCSSUnit( textFontSizeTablet, textFontSizeType ),
			"line-height": textLineHeightTablet + textLineHeightType,
			"letter-spacing": textLetterSpacingTablet + textLetterSpacingType,
		}
	}

	if ( blockBorderStyle  != "" && blockBorderStyle != 0 ) {
		merge(tablet_selectors, { " .heading-block-by-gutenix-heading__wrap" :{
				"border-top-width" : generateCSSUnit(  blockBorderWidthTopTablet, blockBorderWidthType ),
				"border-right-width" : generateCSSUnit(  blockBorderWidthRightTablet, blockBorderWidthType ),
				"border-bottom-width" : generateCSSUnit( blockBorderWidthBottomTablet, blockBorderWidthType ),
				"border-left-width" : generateCSSUnit( blockBorderWidthLeftTablet, blockBorderWidthType ),
				}
			}
		)
	}


	mobile_selectors = {
		" .heading-block-by-gutenix-heading__wrap": {
			"padding-top": generateCSSUnit( paddingTopMobile, PaddingType ),
			"padding-right": generateCSSUnit( paddingRightMobile, PaddingType ),
			"padding-bottom": generateCSSUnit( paddingBottomMobile, PaddingType ),
			"padding-left": generateCSSUnit( paddingLeftMobile, PaddingType ),

			"margin-top": generateCSSUnit( marginTopMobile, MarginType ),
			"margin-right": generateCSSUnit( marginBottomMobile, MarginType ),
			"margin-bottom": generateCSSUnit( marginLeftMobile, MarginType ),
			"margin-left": generateCSSUnit( marginRightMobile, MarginType ),

			"border-top-left-radius" : generateCSSUnit( blockBorderRadiusTopMobile, blockBorderSizeType ),
			"border-top-right-radius" : generateCSSUnit( blockBorderRadiusRightMobile, blockBorderSizeType ),
			"border-bottom-left-radius" : generateCSSUnit( blockBorderRadiusLeftMobile , blockBorderSizeType ),
			"border-bottom-right-radius" : generateCSSUnit( blockBorderRadiusBottomMobile, blockBorderSizeType ), 
		},
		" .heading-block-by-gutenix-heading__text": {
			"font-size": generateCSSUnit( textFontSizeMobile, textFontSizeType ),
			"line-height": textLineHeightMobile + textLineHeightType,
			"letter-spacing": textLetterSpacingMobile + textLetterSpacingType,
		}
	}

	if ( blockBorderStyle  != "" && blockBorderStyle != 0 ) {
		merge(mobile_selectors, { " .heading-block-by-gutenix-heading__wrap" :{
				"border-top-width" : generateCSSUnit(  blockBorderWidthTopMobile, blockBorderWidthType ),
				"border-right-width" : generateCSSUnit(  blockBorderWidthRightMobile, blockBorderWidthType ),
				"border-bottom-width" : generateCSSUnit( blockBorderWidthBottomMobile, blockBorderWidthType ),
				"border-left-width" : generateCSSUnit( blockBorderWidthLeftMobile, blockBorderWidthType ),
				}
			}
		)
	}

	
	var heading_block_by_gutenix_styling_css = ""

	var id = `#${id}-${ props.clientId }`
	
	heading_block_by_gutenix_styling_css = heading_block_by_gutenix_generateCSS( selectors, id )

	heading_block_by_gutenix_styling_css += heading_block_by_gutenix_generateCSS( tablet_selectors, id, true, "tablet" )

	heading_block_by_gutenix_styling_css += heading_block_by_gutenix_generateCSS( mobile_selectors, id, true, "mobile" )

	return heading_block_by_gutenix_styling_css
}

export default heading_block_by_gutenix_styling
