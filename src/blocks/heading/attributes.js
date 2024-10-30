/**
* Module Constants
*/
const attributes = {
	block_id: {
		type: 'string',
		default: 'not_set',
	},

	title: {
		type: 'string'
	},
	align: {
		type: 'string'
	},

	//	Text Shadow
	textShadow: {
		type: 'boolean'
	},
	textShadowHorizontal: {
		type: 'number'
	},
	textShadowVertical: {
		type: 'number'
	},
	textShadowBlur: {
		type: 'number'
	},
	textShadowColor: {
		type: 'string'
	},

	//	Typography
	textLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	textFontFamily: {
		type: 'string'
	},
	textFontWeight: {
		type: 'string'
	},
	textFontSubset: {
		type: 'string'
	},
	textFontStyle: {
		type: 'string'
	},
	textTextTransform: {
		type: 'string'
	},
	textTextDecoration: {
		type: 'string'
	},
	textTag: {
		type: 'string',
		default: 'H3'
	},
	textFontSizeType: {
		type: 'string',
		default: 'px'
	},
	textFontSize: {
		type: 'number'
	},
	textFontSizeMobile: {
		type: 'number'
	},
	textFontSizeTablet: {
		type: 'number'
	},
	textLineHeightType: {
		type: 'string',
		default: 'px'
	},
	textLineHeight: {
		type: 'number'
	},
	textLineHeightMobile: {
		type: 'number'
	},
	textLineHeightTablet: {
		type: 'number'
	},
	textLetterSpacingType: {
		type: 'string',
		default: 'px'
	},
	textLetterSpacing: {
		type: 'number'
	},
	textLetterSpacingMobile: {
		type: 'number'
	},
	textLetterSpacingTablet: {
		type: 'number'
	},
	textColor: {
		type: 'string'
	},

	//	Block Background
	blockBGColor: {
		type: 'string'
	},
	blockBorderStyle: {
		type: 'string'
	},
	blockBorderWidthType: {
		type: 'string',
		default: 'px'
	},
	blockBorderWidthTop: {
		type: 'string'
	},
	blockBorderWidthTopMobile: {
		type: 'string'
	},
	blockBorderWidthTopTablet: {
		type: 'string'
	},
	blockBorderWidthLeft: {
		type: 'string'
	},
	blockBorderWidthLeftMobile: {
		type: 'string'
	},
	blockBorderWidthLeftTablet: {
		type: 'string'
	},
	blockBorderWidthBottom: {
		type: 'string'
	},
	blockBorderWidthBottomMobile: {
		type: 'string'
	},
	blockBorderWidthBottomTablet: {
		type: 'string'
	},
	blockBorderWidthRight: {
		type: 'string'
	},
	blockBorderWidthRightMobile: {
		type: 'string'
	},
	blockBorderWidthRightTablet: {
		type: 'string'
	},
	blockBorderSizeType: {
		type: 'string',
		default: 'px',
	},
	blockBorderRadiusTop: {
		type: 'string'
	},
	blockBorderRadiusTopMobile: {
		type: 'string'
	},
	blockBorderRadiusTopTablet: {
		type: 'string'
	},
	blockBorderRadiusLeft: {
		type: 'string'
	},
	blockBorderRadiusLeftMobile: {
		type: 'string'
	},
	blockBorderRadiusLeftTablet: {
		type: 'string'
	},
	blockBorderRadiusBottom: {
		type: 'string'
	},
	blockBorderRadiusBottomMobile: {
		type: 'string'
	},
	blockBorderRadiusBottomTablet: {
		type: 'string'
	},
	blockBorderRadiusRight: {
		type: 'string'
	},
	blockBorderRadiusRightMobile: {
		type: 'string'
	},
	blockBorderRadiusRightTablet: {
		type: 'string'
	},
	blockBorderColor: {
		type: 'string'
	},
	blockShadowHorizontal: {
		type: 'number'
	},
	blockShadowVertical: {
		type: 'number'
	},
	blockShadowBlur: {
		type: 'number'
	},
	blockShadowSpread: {
		type: 'number'
	},
	blockShadowColor: {
		type: 'string'
	},
	blockShadowPosition: {
		type: 'string'
	},

	//	Spacing
	PaddingType: {
		type: 'string',
		default: 'px'
	},
	paddingTop: {
		type: 'number'
	},
	paddingTopMobile: {
		type: 'number'
	},
	paddingTopTablet: {
		type: 'number'
	},
	paddingLeft: {
		type: 'number'
	},
	paddingLeftMobile: {
		type: 'number'
	},
	paddingLeftTablet: {
		type: 'number'
	},
	paddingBottom: {
		type: 'number'
	},
	paddingBottomMobile: {
		type: 'number'
	},
	paddingBottomTablet: {
		type: 'number'
	},
	paddingRight: {
		type: 'number'
	},
	paddingRightMobile: {
		type: 'number'
	},
	paddingRightTablet: {
		type: 'number'
	},

	MarginType: {
		type: 'string',
		default: 'px'
	},
	marginTop: {
		type: 'number'
	},
	marginTopMobile: {
		type: 'number'
	},
	marginTopTablet: {
		type: 'number'
	},
	marginLeft: {
		type: 'number'
	},
	marginLeftMobile: {
		type: 'number'
	},
	marginLeftTablet: {
		type: 'number'
	},
	marginBottom: {
		type: 'number'
	},
	marginBottomMobile: {
		type: 'number'
	},
	marginBottomTablet: {
		type: 'number'
	},
	marginRight: {
		type: 'number'
	},
	marginRightMobile: {
		type: 'number'
	},
	marginRightTablet: {
		type: 'number'
	},
};

export default attributes;