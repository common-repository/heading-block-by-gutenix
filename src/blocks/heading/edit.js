/**
 * External dependencies
 */
import classnames from "classnames"

import TypographyControl from "components/typography";


// Import Web font loader for google fonts.
import WebfontLoader from "components/typography/fontloader"

import HeadingBlockByGutenixSpacingControl from "components/spacing";
import HeadingBlockByGutenixBorderControl from "components/border";
import HeadingBlockByGutenixShadowControl from "components/shadow";
import HeadingBlockByGutenixColorPicker from "components/color-picker";
import heading_block_by_gutenix_styling from './heading_block_by_gutenix_styling';
import HeadingBlockByGutenixUiIcons from "components/heading-block-by-gutenix-ui-icons";

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

const {
	InspectorControls,
	RichText
} = wp.editor;

const {
	PanelBody,
	TextControl,
	Toolbar,
	SelectControl,
	ToggleControl,
	RangeControl
} = wp.components;

/**
* Module Constants
*/
const className = 'heading-block-by-gutenix-heading';

class Edit extends Component {
			
	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
		const $styles = document.createElement( "style" )
		$styles.setAttribute( "id", "heading-block-by-gutenix-style-" + this.props.clientId )
		document.head.appendChild( $styles )
	}

	render() {

		var element = document.getElementById( "heading-block-by-gutenix-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = heading_block_by_gutenix_styling( this.props, "heading-block-by-gutenix-heading" )
		}
	
		const props = this.props;

		const { setAttributes, isSelected, attributes } = this.props;

		const {
			block_id,

			title,
			align,

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
			
		} = attributes;

		let loadTextGoogleFonts

		if( textLoadGoogleFonts == true ) {
					
			const textconfig = {
				google: {
					families: [ textFontFamily + ( textFontWeight ? ":" + textFontWeight : "" ) ],
				},
			}

			loadTextGoogleFonts = (
				<WebfontLoader config={ textconfig }>
				</WebfontLoader>
			)
		}

		return [
			isSelected && (
				<InspectorControls
					key={ 'inspector' }
				>
					<PanelBody title={ __( 'General Settings', 'heading-block-by-gutenix' ) }>

						<div className="heading-block-by-gutenix-align-advanced">
							<p>{ __( 'Alignment', 'heading-block-by-gutenix' ) }</p>
							<Toolbar className="heading-block-by-gutenix-component-align-wrapper"
								controls={ [
									{
										icon: <HeadingBlockByGutenixUiIcons icon="left" />,
										isActive: 'left' === align,
										onClick: () => setAttributes( { align: 'left' } ),
									},{
										icon: <HeadingBlockByGutenixUiIcons icon="center" />,
										isActive: 'center' === align,
										onClick: () => setAttributes( { align: 'center' } ),
									},{
										icon: <HeadingBlockByGutenixUiIcons icon="right" />,
										isActive: 'right' === align,
										onClick: () => setAttributes( { align: 'right' } ),
									}
								] }
							/>
						</div>
						<br/>

						<TypographyControl
							label={ __( 'Typography', 'heading-block-by-gutenix' ) }
							attributes 				= { attributes }
							setAttributes 			= { setAttributes }

							loadGoogleFonts 		= { { value: textLoadGoogleFonts, label: __( "textLoadGoogleFonts" ) } }
							fontFamily 				= { { value: textFontFamily, label: __( "textFontFamily" ) } }
							fontWeight 				= { { value: textFontWeight, label: __( "textFontWeight" ) } }
							fontSubset 				= { { value: textFontSubset, label: __( "textFontSubset" ) } }

							fontStyle 				= { { value: textFontStyle, label: __( "textFontStyle" ) } }
							textTransform 			= { { value: textTextTransform, label: __( "textTextTransform" ) } }
							textDecoration 			= { { value: textTextDecoration, label: __( "textTextDecoration" ) } }

							heading 				= { { value: textTag, label: __( "textTag" ) } }

							fontSizeType 			= { { value: textFontSizeType, label: __( "textFontSizeType" ) } }
							fontSize 				= { { value: textFontSize, label: __( "textFontSize" ) } }
							fontSizeMobile 			= { { value: textFontSizeMobile, label: __( "textFontSizeMobile" ) } }
							fontSizeTablet 			= { { value: textFontSizeTablet, label: __( "textFontSizeTablet" ) } }

							lineHeightType 			= { { value: textLineHeightType, label: __( "textLineHeightType" ) } }
							lineHeight 				= { { value: textLineHeight, label: __( "textLineHeight" ) } }
							lineHeightMobile 		= { { value: textLineHeightMobile, label: __( "textLineHeightMobile" ) } }
							lineHeightTablet 		= { { value: textLineHeightTablet, label: __( "textLineHeightTablet" ) } }

							letterSpacingType 		= { { value: textLetterSpacingType, label: __( "textLetterSpacingType" ) } }
							letterSpacing 			= { { value: textLetterSpacing, label: __( "textLetterSpacing" ) } }
							letterSpacingMobile 	= { { value: textLetterSpacingMobile, label: __( "textLetterSpacingMobile" ) } }
							letterSpacingTablet 	= { { value: textLetterSpacingTablet, label: __( "textLetterSpacingTablet" ) } }
						/>
						<HeadingBlockByGutenixColorPicker
							label={ __( 'Color', 'heading-block-by-gutenix' ) }
							value={ textColor }
							onChange={ ( value ) => setAttributes( { textColor: value } ) }
							alpha={ true }
						/>

						<ToggleControl
							label = { __( 'Text Shadow', 'heading-block-by-gutenix' ) }
							checked = { textShadow }
							onChange={ ( value ) => setAttributes( { textShadow: value } ) }
						/>
						{ textShadow && <div className="heading-block-by-gutenix-post-wrapper">
							<HeadingBlockByGutenixColorPicker
								value={ textShadowColor }
								onChange={ ( value ) => setAttributes( { textShadowColor: value } ) }
								alpha={ true }
							/>
							<RangeControl
								label={ __( 'X', 'heading-block-by-gutenix' ) }
								value={ textShadowHorizontal }
								onChange={ ( value ) => setAttributes( { textShadowHorizontal: value } ) }
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
							<RangeControl
								label={ __( 'Y', 'heading-block-by-gutenix' ) }
								value={ textShadowVertical }
								onChange={ ( value ) => setAttributes( { textShadowVertical: value } ) }
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
							<RangeControl
								label={ __( 'Blur', 'heading-block-by-gutenix' ) }
								value={ textShadowBlur }
								onChange={ ( value ) => setAttributes( { textShadowBlur: value } ) }
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
						</div> }

					</PanelBody>

					<PanelBody title={ __( 'Background', 'heading-block-by-gutenix' ) } initialOpen={ false } >

						<HeadingBlockByGutenixColorPicker
							label={ __( 'Background Color', 'heading-block-by-gutenix' ) }
							value={ blockBGColor }
							onChange={ ( value ) => setAttributes( { blockBGColor: value } ) }
							alpha={ true }
						/>

						<SelectControl
							label = { __( 'Border Style', 'heading-block-by-gutenix' ) }
							value={ blockBorderStyle }
							options={ [
								{ label: __( 'None', 'heading-block-by-gutenix' ), value: 'none' },
								{ label: __( 'Solid', 'heading-block-by-gutenix' ), value: 'solid' },
								{ label: __( 'Dashed', 'heading-block-by-gutenix' ), value: 'dashed' },
								{ label: __( 'Dotted', 'heading-block-by-gutenix' ), value: 'dotted' },
								{ label: __( 'Double', 'heading-block-by-gutenix' ), value: 'double' },
								{ label: __( 'Ridge', 'heading-block-by-gutenix' ), value: 'ridge' },
							] }
							onChange={ ( blockBorderStyle ) => { setAttributes( { blockBorderStyle } ) } }
						/>
						{ ( blockBorderStyle && blockBorderStyle !== 'none' ) && <div className="heading-block-by-gutenix-post-wrapper">
							
							<HeadingBlockByGutenixBorderControl

								borderWidthlabel={ __( 'Border Width', 'heading-block-by-gutenix' ) }

								attributes 					= { attributes }
								setAttributes 				= { setAttributes }

								borderWidthType 			= { { value: blockBorderWidthType, label: __( "blockBorderWidthType" ) } }

								borderWidthTop 				= { { value: blockBorderWidthTop, label: __( "blockBorderWidthTop" ) } }
								borderWidthMobileTop 		= { { value: blockBorderWidthTopMobile, label: __( "blockBorderWidthTopMobile" ) } }
								borderWidthTabletTop 		= { { value: blockBorderWidthTopTablet, label: __( "blockBorderWidthTopTablet" ) } }

								borderWidthLeft 			= { { value: blockBorderWidthLeft, label: __( "blockBorderWidthLeft" ) } }
								borderWidthMobileLeft 		= { { value: blockBorderWidthLeftMobile, label: __( "blockBorderWidthLeftMobile" ) } }
								borderWidthTabletLeft 		= { { value: blockBorderWidthLeftTablet, label: __( "blockBorderWidthLeftTablet" ) } }

								borderWidthBottom 			= { { value: blockBorderWidthBottom, label: __( "blockBorderWidthBottom" ) } }
								borderWidthMobileBottom 	= { { value: blockBorderWidthBottomMobile, label: __( "blockBorderWidthBottomMobile" ) } }
								borderWidthTabletBottom 	= { { value: blockBorderWidthBottomTablet, label: __( "blockBorderWidthBottomTablet" ) } }

								borderWidthRight 			= { { value: blockBorderWidthRight, label: __( "blockBorderWidthRight" ) } }
								borderWidthMobileRight 		= { { value: blockBorderWidthRightMobile, label: __( "blockBorderWidthRightMobile" ) } }
								borderWidthTabletRight 		= { { value: blockBorderWidthRightTablet, label: __( "blockBorderWidthRightTablet" ) } }

							/>

							<HeadingBlockByGutenixColorPicker
								label={ __( 'Border Color', 'heading-block-by-gutenix' ) }
								value={ blockBorderColor }
								onChange={ ( value ) => setAttributes( { blockBorderColor: value } ) }
								alpha={ true }
							/>

						</div> }

						<HeadingBlockByGutenixBorderControl

							attributes 					= { attributes }
							setAttributes 				= { setAttributes }

							borderRadiuslabel={ __( 'Border Radius', 'heading-block-by-gutenix' ) }

							borderRadiusType 			= { { value: blockBorderSizeType, label: __( "blockBorderSizeType" ) } }

							borderRadiusTop 			= { { value: blockBorderRadiusTop, label: __( "blockBorderRadiusTop" ) } }
							borderRadiusMobileTop 		= { { value: blockBorderRadiusTopMobile, label: __( "blockBorderRadiusTopMobile" ) } }
							borderRadiusTabletTop 		= { { value: blockBorderRadiusTopTablet, label: __( "blockBorderRadiusTopTablet" ) } }

							borderRadiusLeft 			= { { value: blockBorderRadiusLeft, label: __( "blockBorderRadiusLeft" ) } }
							borderRadiusMobileLeft 		= { { value: blockBorderRadiusLeftMobile, label: __( "blockBorderRadiusLeftMobile" ) } }
							borderRadiusTabletLeft 		= { { value: blockBorderRadiusLeftTablet, label: __( "blockBorderRadiusLeftTablet" ) } }

							borderRadiusBottom 			= { { value: blockBorderRadiusBottom, label: __( "blockBorderRadiusBottom" ) } }
							borderRadiusMobileBottom 	= { { value: blockBorderRadiusBottomMobile, label: __( "blockBorderRadiusBottomMobile" ) } }
							borderRadiusTabletBottom 	= { { value: blockBorderRadiusBottomTablet, label: __( "blockBorderRadiusBottomTablet" ) } }

							borderRadiusRight 			= { { value: blockBorderRadiusRight, label: __( "blockBorderRadiusRight" ) } }
							borderRadiusMobileRight 	= { { value: blockBorderRadiusRightMobile, label: __( "blockBorderRadiusRightMobile" ) } }
							borderRadiusTabletRight 	= { { value: blockBorderRadiusRightTablet, label: __( "blockBorderRadiusRightTablet" ) } }

						/>

						<HeadingBlockByGutenixShadowControl

							label={ __( 'Box Shadow', 'heading-block-by-gutenix' ) }

							attributes 				= { attributes }
							setAttributes 			= { setAttributes }

							Vertical 				= { { value: blockShadowHorizontal, label: __( "blockShadowHorizontal" ) } }
							Horizontal 				= { { value: blockShadowVertical, label: __( "blockShadowVertical" ) } }
							Blur 					= { { value: blockShadowBlur, label: __( "blockShadowBlur" ) } }
							Spread 					= { { value: blockShadowSpread, label: __( "blockShadowSpread" ) } }

							Color 					= { { value: blockShadowColor, label: __( "blockShadowColor" ) } }

							Position 				= { { value: blockShadowPosition, label: __( "blockShadowPosition" ) } }

						/>

					</PanelBody>

					<PanelBody title={ __( 'Spacing', 'heading-block-by-gutenix' ) } initialOpen={ false } >

						<HeadingBlockByGutenixSpacingControl

							paddinglabel={ __( 'Padding Column', 'heading-block-by-gutenix' ) }

							attributes 				= { attributes }
							setAttributes 			= { setAttributes }

							paddingType 			= { { value: PaddingType, label: __( "PaddingType" ) } }
							paddingTop 				= { { value: paddingTop, label: __( "paddingTop" ) } }
							paddingMobileTop 		= { { value: paddingTopMobile, label: __( "paddingTopMobile" ) } }
							paddingTabletTop		= { { value: paddingTopTablet, label: __( "paddingTopTablet" ) } }
							paddingLeft 			= { { value: paddingLeft, label: __( "paddingLeft" ) } }
							paddingMobileLeft 		= { { value: paddingLeftMobile, label: __( "paddingLeftMobile" ) } }
							paddingTabletLeft		= { { value: paddingLeftTablet, label: __( "paddingLeftTablet" ) } }
							paddingBottom 			= { { value: paddingBottom, label: __( "paddingBottom" ) } }
							paddingMobileBottom 	= { { value: paddingBottomMobile, label: __( "paddingBottomMobile" ) } }
							paddingTabletBottom 	= { { value: paddingBottomTablet, label: __( "paddingBottomTablet" ) } }
							paddingRight 			= { { value: paddingRight, label: __( "paddingRight" ) } }
							paddingMobileRight 		= { { value: paddingRightMobile, label: __( "paddingRightMobile" ) } }
							paddingTabletRight 		= { { value: paddingRightTablet, label: __( "paddingRightTablet" ) } }

							marginlabel={ __( 'Margin Column', 'heading-block-by-gutenix' ) }

							marginType 				= { { value: MarginType, label: __( "MarginType" ) } }
							marginTop 				= { { value: marginTop, label: __( "marginTop" ) } }
							marginMobileTop 		= { { value: marginTopMobile, label: __( "marginTopMobile" ) } }
							marginTabletTop			= { { value: marginTopTablet, label: __( "marginTopTablet" ) } }
							marginLeft 				= { { value: marginLeft, label: __( "marginLeft" ) } }
							marginMobileLeft 		= { { value: marginLeftMobile, label: __( "marginLeftMobile" ) } }
							marginTabletLeft		= { { value: marginLeftTablet, label: __( "marginLeftTablet" ) } }
							marginBottom 			= { { value: marginBottom, label: __( "marginBottom" ) } }
							marginMobileBottom 		= { { value: marginBottomMobile, label: __( "marginBottomMobile" ) } }
							marginTabletBottom 		= { { value: marginBottomTablet, label: __( "marginBottomTablet" ) } }
							marginRight 			= { { value: marginRight, label: __( "marginRight" ) } }
							marginMobileRight 		= { { value: marginRightMobile, label: __( "marginRightMobile" ) } }
							marginTabletRight 		= { { value: marginRightTablet, label: __( "marginRightTablet" ) } }

						/>

					</PanelBody>
				</InspectorControls>
			),
			<div
				id={ `heading-block-by-gutenix-heading-${ block_id }`}
				className={ [ className ].join(' ') }
			>
				<div className={`${className}__wrap`}>
					<RichText
						tagName={ textTag }
						className={ [ className + '__text', 'text-' + align ].join(' ') }
						placeholder={ __( 'Write text…', 'heading-block-by-gutenix' ) }
						value={title}
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
						<Fragment>
							{ loadTextGoogleFonts }
						</Fragment>
				</div>
			</div>
		];
	}
}

export default Edit;